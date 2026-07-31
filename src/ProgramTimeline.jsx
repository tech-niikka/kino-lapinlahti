import React, { useMemo, useState } from "react";

// Kategorioiden aksenttivärit — sävyt valittu erottumaan mintunvihreältä
// taustalta (grape/cloud) ja toimimaan valkoisen tekstin kanssa.
const CATEGORY_COLORS = {
  elokuva: "#441752",
  lyhytelokuvat: "#5A639C",
  musiikki: "#A22D77",
  tyopaja: "#1F7A5C",
  taide: "#B4581F",
  muu: "#63666B",
};

const WEEK = "week";
const MINE = "mine";
const STORAGE_KEY = "llff2026-oma-festivaali";

const categoryColor = (id) => CATEGORY_COLORS[id] ?? CATEGORY_COLORS.muu;

// Tallennetun valinnan avain: päivä + kellonaika + kategoria, ja tarvittaessa
// juokseva numero kun samana ajankohtana on useampi saman kategorian tapahtuma
// (esim. lauantain kaksi klo 14 alkavaa työpajaa). Avain on kieliriippumaton,
// joten valinta säilyy kielenvaihdossa — eikä ohjelmaan myöhemmin lisätty
// tapahtuma siirrä aiemmin tallennettuja valintoja väärille riveille.
const buildDayKeys = (day) => {
  const seen = new Map();
  return day.events.map((event) => {
    const base = `${day.id}|${event.time}|${event.categoryId}`;
    const n = seen.get(base) ?? 0;
    seen.set(base, n + 1);
    return n === 0 ? base : `${base}|${n}`;
  });
};

const loadSelection = () => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const arr = raw ? JSON.parse(raw) : [];
    return new Set(Array.isArray(arr) ? arr : []);
  } catch {
    return new Set();
  }
};

const persistSelection = (set) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]));
  } catch {
    // localStorage estetty (esim. yksityinen selaus) — valinta toimii
    // silti istunnon ajan
  }
};

// Festivaaliviikon aikana valitaan oletuksena kuluva päivä
const getDefaultDayId = (days) => {
  const now = new Date();
  if (now.getFullYear() === 2026 && now.getMonth() === 7) {
    const match = days.find((d) => d.dayOfMonth === now.getDate());
    if (match) return match.id;
  }
  return days[0]?.id;
};

const downloadBlob = (blob, filename) => {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
};

// --- Kalenterivienti (.ics) ---------------------------------------------

const icsTime = (dayOfMonth, time) => {
  const [h, m] = time.split(".");
  return `202608${String(dayOfMonth).padStart(2, "0")}T${String(h).padStart(
    2,
    "0"
  )}${m}00`;
};

// Oletuskesto tapahtumille joilla ei ole päättymisaikaa
const defaultEnd = (time) => {
  const [h, m] = time.split(".").map(Number);
  const total = h * 60 + m + 45;
  return `${Math.floor(total / 60)}.${String(total % 60).padStart(2, "0")}`;
};

const escapeIcs = (text) => text.replace(/([,;\\])/g, "\\$1");

const buildIcs = (items, calendarName) => {
  const stamp =
    new Date().toISOString().replace(/[-:]/g, "").slice(0, 15) + "Z";
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Lapinlahden elokuvajuhlat//Oma festivaali//FI",
    `X-WR-CALNAME:${escapeIcs(calendarName)}`,
  ];
  items.forEach(({ day, event }, i) => {
    const start = icsTime(day.dayOfMonth, event.time);
    const end = icsTime(day.dayOfMonth, event.end ?? defaultEnd(event.time));
    const location = (event.detail ?? "").split(" · ")[0] ?? "";
    lines.push(
      "BEGIN:VEVENT",
      `UID:llff2026-${i}-${start}@lapinlahdenelokuvajuhlat.fi`,
      `DTSTAMP:${stamp}`,
      `DTSTART:${start}`,
      `DTEND:${end}`,
      `SUMMARY:${escapeIcs(event.title)}`,
      `LOCATION:${escapeIcs(location)}`,
      "END:VEVENT"
    );
  });
  lines.push("END:VCALENDAR");
  return new Blob([lines.join("\r\n")], {
    type: "text/calendar;charset=utf-8",
  });
};

// --- Kuvavienti (PNG) ----------------------------------------------------

const fitText = (ctx, text, maxWidth) => {
  if (ctx.measureText(text).width <= maxWidth) return text;
  let cut = text;
  while (cut.length > 0 && ctx.measureText(`${cut}…`).width > maxWidth) {
    cut = cut.slice(0, -1);
  }
  return `${cut}…`;
};

const buildImage = async (itemsByDay, texts) => {
  await document.fonts.ready;

  const W = 1080;
  const pad = 64;
  const cardH = 84;
  const cardGap = 14;
  const dayHeadH = 42 + 18;
  const dayGap = 52;

  let H = 250;
  itemsByDay.forEach(({ events }) => {
    H += dayHeadH + events.length * (cardH + cardGap) + dayGap;
  });
  H += 90;

  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#D5F6E5";
  ctx.fillRect(0, 0, W, H);

  ctx.fillStyle = "#441752";
  ctx.font = "600 60px 'Playfair Display', serif";
  ctx.fillText(texts.imageTitle, pad, 120);
  ctx.font = "400 32px 'DM Sans', sans-serif";
  ctx.fillText(texts.imageSubtitle, pad, 175);

  let y = 250;
  itemsByDay.forEach(({ day, events }) => {
    ctx.fillStyle = "#441752";
    ctx.font = "600 42px 'Playfair Display', serif";
    ctx.fillText(day.heading, pad, y + 42);
    y += dayHeadH;

    events.forEach((event) => {
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(pad, y, W - 2 * pad, cardH);
      ctx.fillStyle = categoryColor(event.categoryId);
      ctx.fillRect(pad, y, 8, cardH);

      ctx.fillStyle = "#441752";
      ctx.font = "700 32px 'DM Sans', sans-serif";
      ctx.fillText(event.time, pad + 30, y + 52);

      const textX = pad + 170;
      const maxW = W - pad - textX - 24;
      ctx.font = "600 30px 'DM Sans', sans-serif";
      ctx.fillText(fitText(ctx, event.title, maxW), textX, y + 38);
      const venue = (event.detail ?? "").split(" · ")[0] ?? "";
      ctx.fillStyle = "#6B5876";
      ctx.font = "400 24px 'DM Sans', sans-serif";
      ctx.fillText(fitText(ctx, venue, maxW), textX, y + 68);

      y += cardH + cardGap;
    });

    y += dayGap;
  });

  ctx.fillStyle = "#441752";
  ctx.font = "500 28px 'DM Sans', sans-serif";
  const footerW = ctx.measureText(texts.imageFooter).width;
  ctx.fillText(texts.imageFooter, (W - footerW) / 2, H - 44);

  return new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
};

// --- Rivikomponentit ------------------------------------------------------

const CategoryChip = ({ categoryId, label }) => (
  <span
    className="inline-block text-[11px] xsm:text-xs uppercase rounded-full px-2.5 py-0.5 text-white whitespace-nowrap"
    style={{ backgroundColor: categoryColor(categoryId) }}
  >
    {label}
  </span>
);

const ToggleButton = ({ selected, onToggle, labels }) => (
  <button
    onClick={onToggle}
    aria-pressed={selected}
    aria-label={selected ? labels.removeAria : labels.addAria}
    title={selected ? labels.removeAria : labels.addAria}
    className={`w-7 h-7 shrink-0 rounded-full border-2 border-solid border-plum flex items-center justify-center text-base leading-none hover:cursor-pointer ${
      selected
        ? "bg-plum text-white"
        : "text-plum hover:bg-plum hover:text-white"
    }`}
  >
    {selected ? "✓" : "+"}
  </button>
);

// Otsikko on linkki ohjelmistokorttiin, jos tapahtumalla on catalog-kytkös
const RowTitle = ({ title, catalog, onOpenCatalog }) =>
  catalog && onOpenCatalog ? (
    <button
      onClick={() => onOpenCatalog(catalog)}
      className="text-left text-sm xsm:text-base font-semibold underline decoration-1 underline-offset-2 hover:no-underline hover:cursor-pointer"
    >
      {title}
    </button>
  ) : (
    <div className="text-sm xsm:text-base font-semibold">{title}</div>
  );

const EventRow = ({ event, selected, onToggle, toggleLabels, onOpenCatalog }) => (
  <div
    className="bg-white grid grid-cols-[3.2rem_minmax(0,1fr)] xsm:grid-cols-[3.5rem_minmax(0,1fr)_auto] gap-x-3 gap-y-1 items-center px-3 xsm:px-4 py-3"
    style={{ borderLeft: `4px solid ${categoryColor(event.categoryId)}` }}
  >
    <div className="text-sm xsm:text-base font-semibold self-start pt-[0.1rem]">
      {event.time}
    </div>
    <div className="min-w-0">
      <RowTitle
        title={event.title}
        catalog={event.catalog}
        onOpenCatalog={onOpenCatalog}
      />
      {event.detail && (
        <div className="text-xs xsm:text-sm pt-[0.15rem]">{event.detail}</div>
      )}
    </div>
    <div className="col-start-2 xsm:col-start-3 justify-self-start xsm:justify-self-end flex items-center gap-2">
      <CategoryChip categoryId={event.categoryId} label={event.categoryLabel} />
      {onToggle && (
        <ToggleButton
          selected={selected}
          onToggle={onToggle}
          labels={toggleLabels}
        />
      )}
    </div>
  </div>
);

const OngoingRow = ({ item, onOpenCatalog }) => (
  <div
    className="bg-white grid grid-cols-[minmax(0,1fr)] xsm:grid-cols-[minmax(0,1fr)_auto] gap-x-3 gap-y-1 items-center px-3 xsm:px-4 py-3"
    style={{ borderLeft: `4px solid ${categoryColor(item.categoryId)}` }}
  >
    <div className="min-w-0">
      <RowTitle
        title={item.title}
        catalog={item.catalog}
        onOpenCatalog={onOpenCatalog}
      />
      {item.detail && (
        <div className="text-xs xsm:text-sm pt-[0.15rem]">{item.detail}</div>
      )}
    </div>
    <div className="justify-self-start xsm:justify-self-end">
      <CategoryChip categoryId={item.categoryId} label={item.categoryLabel} />
    </div>
  </div>
);

// Yhden päivän sisältö: otsikko, paikka, tapahtumarivit ja jatkuvat teokset
const DayBlock = ({
  day,
  keys,
  ongoingTitle,
  compact,
  selection,
  onToggle,
  toggleLabels,
  onOpenCatalog,
  activeCategory,
}) => {
  const show = (item) => !activeCategory || item.categoryId === activeCategory;
  const events = day.events
    .map((event, idx) => ({ event, key: keys[idx] }))
    .filter(({ event }) => show(event));
  const ongoing = (day.ongoing ?? []).filter(show);
  if (events.length === 0 && ongoing.length === 0) return null;
  return (
    <div>
    <h2
      className={`font-serif font-semibold text-plum ${
        compact ? "text-xl xsm:text-2xl" : "text-2xl xsm:text-3xl"
      }`}
    >
      {day.heading}
    </h2>
    <div className="pt-1 pb-4 text-sm text-plum">
      {day.venueUrl ? (
        <a
          href={day.venueUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:no-underline"
        >
          {day.venue}
        </a>
      ) : (
        day.venue
      )}
    </div>

    <div className="flex flex-col gap-2">
      {events.map(({ event, key }) => (
        <EventRow
          key={key}
          event={event}
          selected={selection?.has(key)}
          onToggle={onToggle ? () => onToggle(key) : null}
          toggleLabels={toggleLabels}
          onOpenCatalog={onOpenCatalog}
        />
      ))}
    </div>

    {ongoing.length > 0 && (
      <div className="pt-6">
        <h3 className="font-serif font-semibold text-lg xsm:text-xl text-plum pb-3">
          {ongoingTitle}
        </h3>
        <div className="flex flex-col gap-2">
          {ongoing.map((item, idx) => (
            <OngoingRow key={idx} item={item} onOpenCatalog={onOpenCatalog} />
          ))}
        </div>
      </div>
    )}
  </div>
  );
};

function ProgramTimeline({ data, onOpenCatalog }) {
  const days = data?.days ?? [];
  const [selectedId, setSelectedId] = useState(() => getDefaultDayId(days));
  const [selection, setSelection] = useState(() => loadSelection());
  // Kategoriasuodatin: null = kaikki
  const [activeCategory, setActiveCategory] = useState(null);

  // Tallennusavaimet päivittäin — lasketaan kerran ohjelmadataa kohden
  const keysByDay = useMemo(() => {
    const map = {};
    days.forEach((d) => {
      map[d.id] = buildDayKeys(d);
    });
    return map;
  }, [days]);

  // Ohjelmassa esiintyvät kategoriat suodatinnappeja varten
  const categories = useMemo(() => {
    const seen = new Map();
    days.forEach((d) => {
      [...d.events, ...(d.ongoing ?? [])].forEach((e) => {
        if (!seen.has(e.categoryId)) seen.set(e.categoryId, e.categoryLabel);
      });
    });
    return [...seen].map(([id, label]) => ({ id, label }));
  }, [days]);

  if (days.length === 0) return null;

  const mine = data.mine;
  const isWeekView = selectedId === WEEK;
  const isMineView = selectedId === MINE;
  const day = days.find((d) => d.id === selectedId) ?? days[0];

  const toggleEvent = (key) => {
    setSelection((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      persistSelection(next);
      return next;
    });
  };

  const toggleLabels = {
    addAria: mine?.addAria ?? "",
    removeAria: mine?.removeAria ?? "",
  };

  // Valitut tapahtumat päivittäin, kronologisessa järjestyksessä
  const mineByDay = days
    .map((d) => ({
      day: d,
      entries: d.events
        .map((event, idx) => ({ event, key: keysByDay[d.id][idx] }))
        .filter(({ key }) => selection.has(key)),
    }))
    .filter(({ entries }) => entries.length > 0);
  const mineCount = mineByDay.reduce((sum, d) => sum + d.entries.length, 0);

  const handleCalendar = () => {
    const items = mineByDay.flatMap(({ day: d, entries }) =>
      entries.map(({ event }) => ({ day: d, event }))
    );
    downloadBlob(
      buildIcs(items, mine.calendarName),
      "oma-festivaali-llff2026.ics"
    );
  };

  const handleImage = async () => {
    const itemsByDay = mineByDay.map(({ day: d, entries }) => ({
      day: d,
      events: entries.map(({ event }) => event),
    }));
    const blob = await buildImage(itemsByDay, mine);
    if (blob) downloadBlob(blob, "oma-festivaali-llff2026.png");
  };

  const pillClass = (active) =>
    `px-4 py-1 text-center uppercase border-2 border-solid rounded-full text-sm custom-1020:text-base hover:cursor-pointer whitespace-nowrap ${
      active
        ? "bg-heading text-peony border-heading"
        : "text-plum hover:bg-heading hover:text-peony"
    }`;

  const actionClass =
    "px-4 py-1 text-center uppercase border-2 border-solid rounded-full text-sm text-plum hover:bg-heading hover:text-peony hover:cursor-pointer whitespace-nowrap";

  return (
    <div className="w-full flex flex-col items-center">
      {/* Päivävalitsin + koko viikko + oma festivaali */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 px-4 max-w-[88%]">
        {days.map((d) => (
          <button
            key={d.id}
            onClick={() => setSelectedId(d.id)}
            className={pillClass(!isWeekView && !isMineView && d.id === day.id)}
          >
            {d.label} {d.date}
          </button>
        ))}
        {data.weekLabel && (
          <button
            onClick={() => setSelectedId(WEEK)}
            className={pillClass(isWeekView)}
          >
            {data.weekLabel}
          </button>
        )}
        {mine && (
          <button
            onClick={() => setSelectedId(MINE)}
            className={pillClass(isMineView)}
          >
            {mine.label}
            {mineCount > 0 ? ` (${mineCount})` : ""}
          </button>
        )}
      </div>

      {/* Kategoriasuodatin */}
      {!isMineView && categories.length > 1 && (
        <div className="flex flex-wrap justify-center gap-2 mb-6 px-4 max-w-[88%]">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-3 py-0.5 text-xs xsm:text-sm uppercase rounded-full border-2 border-solid hover:cursor-pointer whitespace-nowrap ${
              activeCategory === null
                ? "bg-plum text-white border-plum"
                : "text-plum border-plum hover:bg-plum hover:text-white"
            }`}
          >
            {data.allLabel}
          </button>
          {categories.map((c) => {
            const active = activeCategory === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setActiveCategory(active ? null : c.id)}
                className="px-3 py-0.5 text-xs xsm:text-sm uppercase rounded-full border-2 border-solid hover:cursor-pointer whitespace-nowrap"
                style={{
                  borderColor: categoryColor(c.id),
                  backgroundColor: active ? categoryColor(c.id) : "transparent",
                  color: active ? "#FFFFFF" : categoryColor(c.id),
                }}
              >
                {c.label}
              </button>
            );
          })}
        </div>
      )}

      <div className="w-[88%] sm:w-[85%] bg-cloud px-4 xsm:px-8 md:px-12 py-10">
        {isMineView ? (
          <div>
            <h2 className="font-serif font-semibold text-plum text-2xl xsm:text-3xl pb-4">
              {mine.label}
            </h2>
            {mineCount === 0 ? (
              <p className="text-sm xsm:text-base text-plum">{mine.empty}</p>
            ) : (
              <div>
                {/* Muistutus lippujen varaamisesta Fientassa */}
                {mine.reminderStart && (
                  <p className="text-sm xsm:text-base text-plum pb-6">
                    {mine.reminderStart}
                    <a
                      href={mine.ticketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold underline hover:no-underline"
                    >
                      {mine.reminderLink}
                    </a>
                    {mine.reminderEnd}
                  </p>
                )}
                <div className="flex flex-wrap gap-3 pb-8">
                  <button onClick={handleImage} className={actionClass}>
                    {mine.saveImage}
                  </button>
                  <button onClick={handleCalendar} className={actionClass}>
                    {mine.calendar}
                  </button>
                </div>
                <div className="flex flex-col gap-8">
                  {mineByDay.map(({ day: d, entries }) => (
                    <div key={d.id}>
                      <h3 className="font-serif font-semibold text-plum text-xl xsm:text-2xl pb-3">
                        {d.heading}
                      </h3>
                      <div className="flex flex-col gap-2">
                        {entries.map(({ event, key }) => (
                          <EventRow
                            key={key}
                            event={event}
                            selected
                            onToggle={() => toggleEvent(key)}
                            toggleLabels={toggleLabels}
                            onOpenCatalog={onOpenCatalog}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : isWeekView ? (
          <div className="flex flex-col gap-12">
            {days.map((d) => (
              <DayBlock
                key={d.id}
                day={d}
                keys={keysByDay[d.id]}
                ongoingTitle={data.ongoingTitle}
                compact
                selection={selection}
                onToggle={toggleEvent}
                toggleLabels={toggleLabels}
                onOpenCatalog={onOpenCatalog}
                activeCategory={activeCategory}
              />
            ))}
          </div>
        ) : (
          <DayBlock
            day={day}
            keys={keysByDay[day.id]}
            ongoingTitle={data.ongoingTitle}
            selection={selection}
            onToggle={toggleEvent}
            toggleLabels={toggleLabels}
            onOpenCatalog={onOpenCatalog}
            activeCategory={activeCategory}
          />
        )}

        {/* Yleinen huomautus (ilmoittautuminen, muutokset) */}
        {!isMineView && data.note && (
          <p className="pt-8 text-xs xsm:text-sm text-plum">{data.note}</p>
        )}
      </div>
    </div>
  );
}

export default ProgramTimeline;
