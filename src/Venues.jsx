import React, { useState } from "react";

// Festivaalin näyttämöt: kuva, osoite, karttalinkki ja käytännön tiedot.
// Osiot avautuvat klikkaamalla, jotta pitkät esteettömyystekstit eivät
// hukuta sivua — ensimmäinen paikka on auki oletuksena.
function Venues({ data }) {
  const venues = data?.venues ?? [];
  const [openId, setOpenId] = useState(venues[0]?.id ?? null);

  if (venues.length === 0) return null;

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[88%] sm:w-[85%] flex flex-col gap-6">
        {venues.map((venue) => {
          const open = openId === venue.id;
          return (
            <div key={venue.id} className="bg-cloud">
              <button
                onClick={() => setOpenId(open ? null : venue.id)}
                aria-expanded={open}
                className="w-full text-left px-5 xsm:px-8 py-5 flex flex-row items-start justify-between gap-4 hover:cursor-pointer"
              >
                <span className="min-w-0">
                  <span className="block font-serif font-semibold text-plum text-2xl xsm:text-3xl">
                    {venue.name}
                  </span>
                  <span className="block text-sm text-plum pt-1">
                    {venue.days} · {venue.address}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="text-plum text-2xl leading-none shrink-0 pt-1"
                >
                  {open ? "–" : "+"}
                </span>
              </button>

              {open && (
                <div className="px-5 xsm:px-8 pb-8">
                  {venue.photo && (
                    <div className="pb-6">
                      <img
                        src={venue.photo}
                        alt={venue.name}
                        className="w-full h-auto max-h-[22rem] object-cover"
                        loading="lazy"
                      />
                      {venue.photoCredit && (
                        <div className="text-xs pt-2 font-light text-plum">
                          {venue.photoCredit}
                        </div>
                      )}
                    </div>
                  )}

                  <div className="flex flex-col gap-5 text-plum">
                    {venue.sections.map((section, i) => (
                      <div key={i}>
                        <h3 className="font-semibold text-lg pb-1">
                          {section.heading}
                        </h3>
                        <p className="whitespace-pre-line leading-7">
                          {section.body}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-2 pt-6">
                    {venue.links?.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold underline hover:no-underline text-plum"
                      >
                        {link.label}
                      </a>
                    ))}
                    {venue.mapsUrl && (
                      <a
                        href={venue.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold underline hover:no-underline text-plum"
                      >
                        {data.mapLabel}
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Venues;
