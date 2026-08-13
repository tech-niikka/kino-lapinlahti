// Paikalliset kuvat — Vite resolvoi import-URL:t buildissa
import eventImage from "../assets/event-2026.jpg";

// 2026-ohjelmiston kortit (elokuvat, lyhärit, musiikki, työpajat, taide)
import { buildCatalog } from "./catalog-2026.js";

// Festivaalin näyttämöt (saapuminen, esteettömyys, katsomot)
import { buildVenues } from "./venues-2026.js";

// Sponsoreiden logot
import koneenSaatioLogo from "../assets/sponsors/koneen-saatio.webp";
import proLapinlahtiLogo from "../assets/sponsors/pro-lapinlahti.png";
import yleLogo from "../assets/sponsors/yle.png";
import helsinkiLogo from "../assets/sponsors/helsinki.png";
import lahdeLogo from "../assets/sponsors/lapinlahden-lahde.png";
import mesLogo from "../assets/sponsors/mes.svg";
import pagaLogo from "../assets/sponsors/paga.png";
import frikutLogo from "../assets/sponsors/frikut.svg";
import oodiLogo from "../assets/sponsors/oodi.png";
import mieliLogo from "../assets/sponsors/mieli.png";
import cosaLogo from "../assets/sponsors/cosa.png";
import purewasteLogo from "../assets/sponsors/purewaste.png";
import kinosRentalsLogo from "../assets/sponsors/kinos-rentals.png";
import mutteriKahvilaLogo from "../assets/sponsors/mutteri-kahvila.png";
import kahvilaLahdeLogo from "../assets/sponsors/kahvila-lahde.svg";
import rikiyakiLogo from "../assets/sponsors/rikiyaki.jpg";
import angelFilmsLogo from "../assets/sponsors/angel-films.png";

// Sponsorilistan rakenne mukailee aiempaa Contentful-rakennetta:
//   - Footer.jsx ohittaa indeksin [0] festivaalin omana logona
//     (placeholder-merkintä alla, Footer käyttää paikallista fallbackia)
//   - Indeksit [1]+ ovat sponsorit
//   - `size: "large"` saa containeriin enemmän tilaa Footer.jsx:ssä
//     (esim. vaakasuorat tai muutoin pienet logot tarvitsevat sitä,
//     jotta ne ovat luettavissa muiden joukossa)
const sponsorEntries = [
  { logoUrl: null, url: null, altText: "Lapinlahden elokuvajuhlat" }, // [0] festival-placeholder
  {
    logoUrl: koneenSaatioLogo,
    url: "https://koneensaatio.fi/",
    altText: "Koneen Säätiö",
    size: "large",
  },
  {
    logoUrl: proLapinlahtiLogo,
    url: "https://www.prolapinlahtiry.fi/",
    altText: "Pro Lapinlahti Mielenterveysseura ry",
  },
  {
    logoUrl: yleLogo,
    url: "https://yle.fi/",
    altText: "Yle",
    size: "large",
  },
  {
    logoUrl: helsinkiLogo,
    url: "https://www.myhelsinki.fi/",
    altText: "Helsingin kaupunki",
  },
  {
    logoUrl: lahdeLogo,
    url: "https://lapinlahdenlahde.fi/",
    altText: "Lapinlahden Lähde",
  },
  {
    logoUrl: mesLogo,
    url: "https://mes.fi/",
    altText: "Musiikin edistämissäätiö MES",
  },
  {
    logoUrl: pagaLogo,
    url: null,
    altText: "PÅGÅ",
  },
  {
    logoUrl: frikutLogo,
    url: null,
    altText: "Frikut",
  },
  {
    logoUrl: oodiLogo,
    url: "https://oodihelsinki.fi/",
    altText: "Helsingin keskustakirjasto Oodi",
  },
  {
    logoUrl: mieliLogo,
    url: "https://mieli.fi/",
    altText: "MIELI Suomen Mielenterveys ry",
    size: "large",
  },
  {
    logoUrl: cosaLogo,
    url: "https://cosa.fi/",
    altText: "Cosa Vuokrakalusteet",
  },
  {
    logoUrl: purewasteLogo,
    url: "https://purewaste.com/",
    altText: "Pure Waste",
    size: "large",
  },
  {
    logoUrl: kinosRentalsLogo,
    url: "https://kinosrentals.fi/",
    altText: "Kinos Rentals",
    size: "large",
  },
  {
    logoUrl: mutteriKahvilaLogo,
    url: null,
    altText: "Mutteri-Kahvila",
  },
  {
    logoUrl: kahvilaLahdeLogo,
    url: "https://lapinlahdenlahde.fi/",
    altText: "Kahvila Lähde",
  },
  {
    logoUrl: rikiyakiLogo,
    url: null,
    altText: "RikiYaki",
  },
  {
    logoUrl: angelFilmsLogo,
    url: "https://angelfilms.fi/",
    altText: "Angel Films",
  },
];

// Muunna entry Contentful-yhteensopivaan rakenteeseen jonka Footer.jsx odottaa
const sponsorLogos = sponsorEntries.map((entry) => ({
  fields: {
    logo: entry.logoUrl
      ? { fields: { file: { url: entry.logoUrl } } }
      : null,
    url: entry.url,
    altText: entry.altText,
    size: entry.size ?? "default",
  },
}));

// Paikallinen sisältömoduuli — korvasi aiemmin Contentful-API:n
//
// Ylätason avaimet vastaavat App.jsx:n `content`-state:n avaimia ja
// muoto vastaa Contentful-vastauksen rakennetta:
//   - Jokainen sisältötyyppi on lista, jossa indeksi [0] sisältää
//     varsinaiset kentät objektissa `fields`
//   - Tämä yhdenmukaisuus tekee kompponenteista muuttumattomia
//
// Lokalisaatio: top-level avaimet `fi` ja `en-US` vastaavat App.jsx:n
// `language` statea. Käytä `getContent(language)`-funktiota lukemiseen.
//
// 2026-festivaalin aluksi sisältöä on niukasti — elokuvalistat ovat
// tyhjiä ("Tulossa") ja konkreettiset päivämäärät julkaistaan myöhemmin.
// Komponentit on suunniteltu kestämään tyhjät listat, ja App.jsx
// näyttää placeholderin kun lista on tyhjä.

// Tiimin yhteystiedot — sama lista molemmille kielille, vain tittelit lokalisoidaan
const contactsByLocale = {
  fi: [
    {
      name: "Sveta Sirin",
      title: "Vastaava tuottaja",
      email: "sveta.sirin@kinolapinlahti.fi",
    },
    {
      name: "Anton Baer",
      title: "Taiteellinen johtaja",
      email: "anton.baer@kinolapinlahti.fi",
    },
    {
      name: "Lars M. Huldén",
      title: "Viestintävastaava",
      email: "lars@kinolapinlahti.fi",
    },
    {
      name: "Siiri Siltala",
      title: "Kuraattori",
      email: "siiri.siltala@kinolapinlahti.fi",
    },
    {
      name: "Hanna Hovitie",
      title: "Kuraattori",
      email: "hanna.hovitie@kinolapinlahti.fi",
    },
    {
      name: "Moritz Sebastian Müller",
      title: "Nordic Frames -kuraattori",
      email: "lapinlahti.nordic.frames@gmail.com",
    },
    {
      name: "Nellie Rajala",
      title: "Nordic Frames -kuraattori",
      email: "lapinlahti.nordic.frames@gmail.com",
    },
    {
      name: "Anna Lehtonen",
      title: "NØW-työpajan tuottaja",
      email: "anna.lehtonen@kinolapinlahti.fi",
    },
  ],
  "en-US": [
    {
      name: "Sveta Sirin",
      title: "Executive Producer",
      email: "sveta.sirin@kinolapinlahti.fi",
    },
    {
      name: "Anton Baer",
      title: "Artistic Director",
      email: "anton.baer@kinolapinlahti.fi",
    },
    {
      name: "Lars M. Huldén",
      title: "Communications",
      email: "lars@kinolapinlahti.fi",
    },
    {
      name: "Siiri Siltala",
      title: "Curator",
      email: "siiri.siltala@kinolapinlahti.fi",
    },
    {
      name: "Hanna Hovitie",
      title: "Curator",
      email: "hanna.hovitie@kinolapinlahti.fi",
    },
    {
      name: "Moritz Sebastian Müller",
      title: "Nordic Frames curator",
      email: "lapinlahti.nordic.frames@gmail.com",
    },
    {
      name: "Nellie Rajala",
      title: "Nordic Frames curator",
      email: "lapinlahti.nordic.frames@gmail.com",
    },
    {
      name: "Anna Lehtonen",
      title: "NØW workshop producer",
      email: "anna.lehtonen@kinolapinlahti.fi",
    },
  ],
};

const fi = {
  landingPage: [
    {
      fields: {
        title: "Lapinlahden elokuvajuhlat",
        date: "17.–23.8.2026",
        secondaryTitle: "Elokuva tekee hyvää",
      },
    },
  ],
  scheduleSection: [
    {
      fields: {
        title: "Aikataulu",
        schedule: [],
      },
    },
  ],
  catalogSection: [
    {
      fields: {
        title: "Ohjelmisto",
        filmSectionTitle: "Elokuvat",
        musicSectionTitle: "Musiikki",
        shortFilmSectionTitle: "Lyhytelokuvat",
        workshopSectionTitle: "Työpajat",
        nowSectionTitle: "Nyt",
        artSectionTitle: "Taide",
        films: [],
        music: [],
        shortFilms: [],
        workshops: [],
        now: null,
        art: [],
      },
    },
  ],
  contactsSection: [
    {
      fields: {
        title: "Yhteystiedot",
        contacts: contactsByLocale.fi,
      },
    },
  ],
  eventSection: [
    {
      fields: {
        title: "Tapahtumasta",
        secondaryTitle: "Lapinlahden elokuvajuhlat",
        paragraph:
          "Lapinlahden elokuvajuhlat on vapaan pääsyn tapahtuma. Festivaalin ohjelma on vierailijoille ilmainen, mutta elokuvanäytökset ja työpajat vaativat ennakkoilmoittautumisen. Loppuunvarattuihin näytöksiin ja työpajoihin voi tulla jonottamaan peruutuspaikkoja paikan päälle.",
        paragraph2:
          "Lapinlahden elokuvajuhlat levittäytyvät tänä vuonna aiempaa laajemmin Helsinkiin. Maanantaina ja tiistaina näytökset ovat Oodin Kino Reginassa, keskiviikkona vuorossa on tunnelmallinen ulkoilmanäytös Lasipalatsin aukiolla ja torstaina Taiteiden yönä monitaideohjelmaa Lapinlahden Lähteellä. Viikonloppuna kokoonnumme perinteiseen tapaan Lapinlahden alueelle: päivisin elokuvanäytöksiä historiallisessa rakennuksessa ja auringon laskiessa ulkoilmanäytös isolta valkokankaalta kivipihalla.",
        paragraph3:
          "Festivaalin elokuvakuratointi rakentuu tänä vuonna perinnön ja tabujen teeman ympärille. Ohjelmistossa nähdään lisäksi Nordic Frames -lyhytelokuvasarja. Lapinlahden Lähteen historiallisessa ympäristössä on tarjolla myös yhteisöllisyyttä rakentavaa monitaideohjelmaa, jossa korostuu paikallisten taiteilijoiden ja toimijoiden omalaatuinen ääni.",
        paragraph4: "",
        images: [
          {
            fields: {
              file: { url: eventImage },
            },
          },
        ],
      },
    },
  ],
  areaSection: [
    {
      fields: {
        title: "Alue",
        secondaryTitle: "Lapinlahden Lähde, Helsinki",
        subheading1: "",
        paragraph1: "",
        paragraph5: "",
        subheading2: "",
        openHours: null,
        subheading3: "",
        paragraph3: "",
        subheading4: "",
        paragraph4: "",
        subheading5: "",
        subheading6: "",
        subheading8: "",
        paragraph6: "",
        paragraph7: "",
        paragraph8: "",
        paragraph9: "",
        subheading9: "",
        subheading10: "",
        subheading11: "",
        subheading12: "",
      },
    },
  ],
  buttons: [
    {
      fields: {
        ticketButton: "Liput",
        // Lippujen aukeamishuomautus poistettu 4.8.2026 (liput ovat auki)
        ticketNote: null,
        open: "Avaa",
        closed: "Suljettu",
      },
    },
  ],
  navBar: [
    {
      fields: {
        title: "Navigaatio",
        // logo = null ⇒ Nav.jsx käyttää paikallista logo-fallbackia
        logo: null,
        ticketButton: "Liput",
      },
    },
  ],
  footer: [
    {
      fields: {
        // Footer.jsx käyttää data?.logos[0] festivaalin omana logona;
        // se on null tässä → paikallinen import-fallback Footer.jsx:ssä.
        // Indeksit [1]+ ovat sponsorit jotka näytetään yläosassa.
        logos: sponsorLogos,
        address: "Lapinlahdenpolku 8, 00180 Helsinki",
        emailAddress: "kinolapinlahti@gmail.com",
        privacyNotice: "Tietosuojaseloste",
        copyright: "© Lapinlahden elokuvajuhlat 2026",
      },
    },
  ],
};

const en = {
  landingPage: [
    {
      fields: {
        title: "Lapinlahti Film Festival",
        date: "17–23 August 2026",
        secondaryTitle: "Cinema Works Wonders",
      },
    },
  ],
  scheduleSection: [
    {
      fields: {
        title: "Schedule",
        schedule: [],
      },
    },
  ],
  catalogSection: [
    {
      fields: {
        title: "Programme",
        filmSectionTitle: "Films",
        musicSectionTitle: "Music",
        shortFilmSectionTitle: "Short films",
        workshopSectionTitle: "Workshops",
        nowSectionTitle: "Now",
        artSectionTitle: "Art",
        films: [],
        music: [],
        shortFilms: [],
        workshops: [],
        now: null,
        art: [],
      },
    },
  ],
  contactsSection: [
    {
      fields: {
        title: "Contact",
        contacts: contactsByLocale["en-US"],
      },
    },
  ],
  eventSection: [
    {
      fields: {
        title: "About",
        secondaryTitle: "Lapinlahti Film Festival",
        paragraph:
          "Lapinlahti Film Festival is a free-admission event. The programme is free to visitors, but films and workshops require registration in advance. For fully booked screenings and workshops you can come and queue on site for cancelled places.",
        paragraph2:
          "This year the festival spreads more widely across Helsinki. On Monday and Tuesday the screenings are at Kino Regina in Oodi, on Wednesday there is an open-air screening on Lasipalatsi Square, and on Thursday, during the Night of the Arts, a multidisciplinary art programme at Lapinlahden Lähde. At the weekend we gather as always in the Lapinlahti area: screenings inside the historic building during the day, and as the sun sets, an open-air screening on the big screen in the stone yard.",
        paragraph3:
          "This year the film curation is built around the theme of heritage and taboos. The programme also features the Nordic Frames short film series. In the historic surroundings of Lapinlahden Lähde there is a community-building multidisciplinary art programme that highlights the distinctive voice of local artists and practitioners.",
        paragraph4: "",
        images: [
          {
            fields: {
              file: { url: eventImage },
            },
          },
        ],
      },
    },
  ],
  areaSection: [
    {
      fields: {
        title: "Area",
        secondaryTitle: "Lapinlahden Lähde, Helsinki",
        subheading1: "",
        paragraph1: "",
        paragraph5: "",
        subheading2: "",
        openHours: null,
        subheading3: "",
        paragraph3: "",
        subheading4: "",
        paragraph4: "",
        subheading5: "",
        subheading6: "",
        subheading8: "",
        paragraph6: "",
        paragraph7: "",
        paragraph8: "",
        paragraph9: "",
        subheading9: "",
        subheading10: "",
        subheading11: "",
        subheading12: "",
      },
    },
  ],
  buttons: [
    {
      fields: {
        ticketButton: "Tickets",
        ticketNote: null,
        open: "Open",
        closed: "Closed",
      },
    },
  ],
  navBar: [
    {
      fields: {
        title: "Navigation",
        logo: null,
        ticketButton: "Tickets",
      },
    },
  ],
  footer: [
    {
      fields: {
        logos: [],
        address: "Lapinlahdenpolku 8, 00180 Helsinki, Finland",
        emailAddress: "kinolapinlahti@gmail.com",
        privacyNotice: "Privacy notice",
        copyright: "© Lapinlahti Film Festival 2026",
      },
    },
  ],
};

// 2026-ohjelman aikataulu — koottu tuotantoaikataulusta (heinäkuu 2026).
// Julkinen versio: sisäiset merkinnät (soundcheckit, tekniikka, kävijä-
// ennusteet) on jätetty pois. "Päättyy n." -ajat ovat arvioita.
// Sama rakenne molemmille kielille — t(fi, en) valitsee käännöksen.
const buildProgramSection = (locale) => {
  const isEn = locale === "en-US";
  const isSv = locale === "sv";
  // Ruotsi käyttää englanninkielistä tekstiä kun sv-käännöstä ei ole annettu
  const t = (fiText, enText, svText) =>
    isSv ? svText ?? enText ?? fiText : isEn ? enText : fiText;

  const CAT = {
    elokuva: { id: "elokuva", label: t("Elokuva", "Film", "Film") },
    lyhytelokuvat: {
      id: "lyhytelokuvat",
      label: t("Lyhytelokuvat", "Short films", "Kortfilmer"),
    },
    musiikki: { id: "musiikki", label: t("Musiikki", "Music", "Musik") },
    tyopaja: { id: "tyopaja", label: t("Työpaja", "Workshop", "Workshop") },
    taide: { id: "taide", label: t("Taide", "Art", "Konst") },
    muu: { id: "muu", label: t("Muu ohjelma", "Other", "Övrigt") },
  };

  // Apurit tapahtumariveille ja koko päivän teoksille
  const detail = (...parts) => parts.filter(Boolean).join(" · ");
  const ends = (time) =>
    t(`Päättyy n. ${time}`, `Ends approx. ${time}`, `Slutar ca ${time}`);
  const qa = () =>
    t("Q&A näytöksen jälkeen", "Q&A after the screening", "Q&A efter visningen");
  // Poimii päättymisajan detail-tekstistä ("Päättyy n. 18.28" / "Ends
  // approx. 18.28") tai laskee sen kestosta ("2 h", "45 min"). Käytetään
  // kalenterivientiin (.ics) — sama tehdas tuottaa detail-tekstit, joten
  // muodot pysyvät synkassa.
  const parseEnd = (time, detailText) => {
    if (!detailText) return null;
    const endMatch = detailText.match(
      /(?:Päättyy n\.|Ends approx\.) (\d{1,2}\.\d{2})/
    );
    if (endMatch) return endMatch[1];
    const [h, m] = time.split(".").map(Number);
    let minutes = null;
    const hourMatch = detailText.match(/(\d+(?:[.,]\d+)?) h/);
    const minMatch = detailText.match(/(\d+) min/);
    if (hourMatch) {
      minutes = Math.round(parseFloat(hourMatch[1].replace(",", ".")) * 60);
    } else if (minMatch) {
      minutes = Number(minMatch[1]);
    }
    if (minutes == null) return null;
    const total = h * 60 + m + minutes;
    return `${Math.floor(total / 60)}.${String(total % 60).padStart(2, "0")}`;
  };

  // `catalog` = { type, id } → linkki Ohjelmisto-osion korttiin
  const ev = (time, title, category, detailText, catalog) => ({
    time,
    end: parseEnd(time, detailText),
    title,
    categoryId: category.id,
    categoryLabel: category.label,
    detail: detailText,
    catalog: catalog ?? null,
  });
  const ongoing = (title, category, detailText, catalog) => ({
    title,
    categoryId: category.id,
    categoryLabel: category.label,
    detail: detailText,
    catalog: catalog ?? null,
  });

  // Paikkojen nimet — kuvailevat käännetään, erisnimet säilyvät
  const AUDITORIO = t("Auditorio", "Auditorium", "Auditoriet");
  const PUUTARHAPIHA = t("Puutarhapiha", "Garden yard", "Trädgården");
  const KIVIPIHA = t("Kivipiha", "Stone yard", "Stengården");
  const PUISTO = t("Puisto", "Park", "Parken");
  const ULKOILMA = t(
    "Kivipiha, ulkoilmanäytös",
    "Stone yard, open-air screening",
    "Stengården, utomhusvisning"
  );

  // Linkit Ohjelmisto-osion kortteihin tyypeittäin
  const cf = (id) => ({ type: "films", id });
  const cs = (id) => ({ type: "shortFilms", id });
  const cm = (id) => ({ type: "music", id });
  const cw = (id) => ({ type: "workshops", id });
  const ca = (id) => ({ type: "art", id });

  // Julkaistuissa näytösajoissa päättymisaika sisältää Q&A:n
  const inclQa = t("sis. Q&A", "incl. Q&A", "inkl. Q&A");
  const guest = (name) =>
    t(`vieraana ${name}`, `guest: ${name}`, `gäst: ${name}`);

  // Google Maps -linkit päivän päänäyttämölle
  const MAPS = {
    oodi: "https://www.google.com/maps/search/?api=1&query=Oodi+Helsingin+keskustakirjasto",
    lasipalatsi:
      "https://www.google.com/maps/search/?api=1&query=Lasipalatsin+aukio+Helsinki",
    lahde:
      "https://www.google.com/maps/search/?api=1&query=Lapinlahden+L%C3%A4hde+Helsinki",
  };

  const blindCinema = (times) =>
    ongoing(
      "KEN TÄSTÄ KÄY... blind cinema -näytös",
      CAT.taide,
      detail(
        t("Valo-tila, 2. krs", "Valo-tila, 2nd floor", "Valo-tila, 2 vån."),
        t(`näytökset klo ${times}`, `screenings at ${times}`, `visningar kl. ${times}`),
        "47 min",
        t("Fienta-ilmoittautuminen", "registration via Fienta", "anmälan via Fienta")
      ),
      ca("ken-tasta-kay")
    );
  const seitsemasAaltoFilm = (times) =>
    ongoing(
      t("Seitsemäs aalto -elokuva", "The Seventh Wave film", "Sjunde vågen — film"),
      CAT.taide,
      detail(
        t("Venetsia-talo, 1. krs", "Venetsia building, 1st floor", "Venetsia-huset, 1 vån."),
        t(`klo ${times}`, times, `kl. ${times}`)
      ),
      ca("seitsemas-aalto")
    );
  const awitha = (times) =>
    ongoing(
      "AwithA Body Shop",
      CAT.taide,
      detail(
        t("Omenapuutalon nurmikko", "Omenapuutalo lawn", "Omenapuutalos gräsmatta"),
        t(`klo ${times}`, times, `kl. ${times}`)
      ),
      ca("awitha-body-shop")
    );
  const elephant = () =>
    ongoing(
      "The Elephant in the Room",
      CAT.taide,
      detail(
        t(
          "Lähteen eteläinen puistoalue",
          "Southern park area",
          "Södra parkområdet"
        )
      ),
      ca("elephant-in-the-room")
    );
  const stopTheHustle = () =>
    ongoing(
      "Stop the Hustle",
      CAT.taide,
      detail("Omenapuutalo", t("klo 15–19", "15–19", "kl. 15–19")),
      ca("stop-the-hustle")
    );
  const exhibitions = () => [
    ongoing(
      t("Seitsemäs aalto — valokuvanäyttely", "Seitsemäs aalto — photo exhibition", "Sjunde vågen — fotoutställning"),
      CAT.taide,
      detail("Käytävägalleria", t("ma–la 11–17, su 12–17", "Mon–Sat 11–17, Sun 12–17", "mån–lör 11–17, sön 12–17")),
      ca("seitsemas-aalto")
    ),
    ongoing(
      t("Madonsyöjät", "Madonsyöjät (Worm Eaters)", "Madonsyöjät"),
      CAT.taide,
      detail("Kahvila Lähde", t("ma–la 11–17, su 12–17", "Mon–Sat 11–17, Sun 12–17", "mån–lör 11–17, sön 12–17")),
      ca("madonsyojat")
    ),
    ongoing(
      t("Taiteilijan talo – Maisemamaalarin talo", "The Artist's House – The Landscape Painter's House", "Konstnärens hus – Landskapsmålarens hus"),
      CAT.taide,
      detail(t("Venetsian niemi", "Venetsia Peninsula", "Venetsia-udden")),
      ca("taiteilijan-talo")
    ),
    ongoing(
      t("Ruumiillistumia", "Ruumiillistumia (Embodiments)", "Ruumiillistumia"),
      CAT.taide,
      detail("Osasto 5", t("ma–la 11–17, su 12–17", "Mon–Sat 11–17, Sun 12–17", "mån–lör 11–17, sön 12–17")),
      ca("ruumiillistumia")
    ),
  ];

  const days = [
    {
      id: "ma",
      label: t("Ma", "Mon", "Mån"),
      date: "17.8",
      dayOfMonth: 17,
      heading: t("Maanantai 17.8.", "Monday 17 August", "Måndag 17 augusti"),
      venue: t(
        "Kino Regina, Oodi, Helsinki",
        "Kino Regina, Oodi, Helsinki",
        "Kino Regina, Ode, Helsingfors"
      ),
      venueUrl: MAPS.oodi,
      events: [
        ev("16.30", t("Vasenkätinen tyttö", "Left-Handed Girl", "Vänsterhänta flickan"),
          CAT.elokuva, detail("Kino Regina, Oodi", ends("18.28")), cf("left-handed-girl")),
        ev("18.50", t("Europa + Noita (Häxan)", "Europa + Häxan", "Europa + Häxan"),
          CAT.elokuva, detail("Kino Regina, Oodi", ends("20.39")), cf("haxan")),
      ],
      ongoing: [],
    },
    {
      id: "ti",
      label: t("Ti", "Tue", "Tis"),
      date: "18.8",
      dayOfMonth: 18,
      heading: t("Tiistai 18.8.", "Tuesday 18 August", "Tisdag 18 augusti"),
      venue: t(
        "Kino Regina, Oodi, Helsinki",
        "Kino Regina, Oodi, Helsinki",
        "Kino Regina, Ode, Helsingfors"
      ),
      venueUrl: MAPS.oodi,
      events: [
        ev("16.00", t("Miehen työ", "Miehen työ (Man's Job)", "Miehen työ (Mansarbete)"),
          CAT.elokuva, detail("Kino Regina, Oodi", ends("18.23"), inclQa, guest("Aleksi Salmenperä")), cf("miehen-tyo")),
        ev("18.35", t("Häiriötekijä", "Häiriötekijä (Distractions)", "Häiriötekijä"),
          CAT.elokuva, detail("Kino Regina, Oodi", ends("20.40"), inclQa, guest("Aleksi Salmenperä")), cf("hairiotekija")),
      ],
      ongoing: [],
    },
    {
      id: "ke",
      label: t("Ke", "Wed", "Ons"),
      date: "19.8",
      dayOfMonth: 19,
      heading: t("Keskiviikko 19.8.", "Wednesday 19 August", "Onsdag 19 augusti"),
      venue: t(
        "Lasipalatsin aukio, Helsinki",
        "Lasipalatsi Square, Helsinki",
        "Glaspalatsets plats, Helsingfors"
      ),
      venueUrl: MAPS.lasipalatsi,
      events: [
        ev("21.00", t("Shoplifters – perhesalaisuuksia", "Shoplifters", "Shoplifters"),
          CAT.elokuva,
          detail(
            t("Lasipalatsin aukio", "Lasipalatsi Square", "Glaspalatsets plats"),
            ends("23.11"),
            t("vapaa pääsy ilman ennakkoilmoittautumista", "free entry without advance registration", "fritt inträde utan förhandsanmälan")
          ),
          cf("shoplifters")),
      ],
      ongoing: [],
    },
    {
      id: "to",
      label: t("To", "Thu", "Tors"),
      date: "20.8",
      dayOfMonth: 20,
      heading: t("Torstai 20.8.", "Thursday 20 August", "Torsdag 20 augusti"),
      venue: "Lapinlahden Lähde",
      venueUrl: MAPS.lahde,
      events: [
        // Taiteiden yön ulkoilmanäytökset poistettu 4.8.2026 — niitä ei järjestetä
        ev("19.00",
          t("Taiteilijan talo – Maisemamaalarin talo", "The Artist's House – The Landscape Painter's House", "Konstnärens hus – Landskapsmålarens hus"),
          CAT.taide,
          detail(t("Venetsian niemi", "Venetsia Peninsula", "Venetsia-udden"), ends("21.00"), t("avajaiset", "opening", "vernissage")),
          ca("taiteilijan-talo")),
      ],
      ongoing: [],
    },
    {
      id: "pe",
      label: t("Pe", "Fri", "Fre"),
      date: "21.8",
      dayOfMonth: 21,
      heading: t("Perjantai 21.8.", "Friday 21 August", "Fredag 21 augusti"),
      venue: "Lapinlahden Lähde",
      venueUrl: MAPS.lahde,
      events: [
        ev("15.00", "Kapina elämän puolesta", CAT.elokuva,
          detail(PUUTARHAPIHA, ends("17.00"), inclQa, guest("Saku Soukka")), cf("kapina-elaman-puolesta")),
        ev("15.00", "Whirl to Feel", CAT.tyopaja,
          detail(t("Omenapuutalon nurmikko", "Omenapuutalo lawn", "Omenapuutalos gräsmatta"), ends("17.00")), cw("whirl-to-feel")),
        ev("15.30", "Nordic Frames: Cold Plunge", CAT.lyhytelokuvat,
          detail(AUDITORIO, ends("17.30"), inclQa), cs("cold-plunge")),
        ev("17.00", "Trauma Release Exercise (TRE)", CAT.tyopaja,
          detail("Wanha Labra", ends("18.30")), cw("trauma-release-exercise")),
        ev("17.00", "Inherited and Silent Stories", CAT.tyopaja,
          detail(t("Sininen Huone", "Sininen Huone", "Sininen Huone"), ends("19.00")), cw("inherited-and-silent-stories")),
        ev("17.20", t("Tyhjiö", "Tyhjiö (Void)", "Tyhjiö (Tomrum)"), CAT.elokuva,
          detail(PUUTARHAPIHA, ends("19.37"), inclQa, guest("Aleksi Salmenperä")), cf("tyhjio")),
        ev("18.00", "Nordic Frames: Vessel Views", CAT.lyhytelokuvat,
          detail(AUDITORIO, ends("20.00"), inclQa), cs("vessel-views")),
        ev("18.00", t("DJ Valoantin vinyylikaraoke", "Vinyl Karaoke — DJ Valoantti", "Vinylkaraoke — DJ Valoantti"),
          CAT.musiikki, detail(KIVIPIHA, ends("20.00")),
          cm("leffakaraoke")),
        ev("20.00", t("Kirsikan maku", "Taste of Cherry", "Körsbärets smak"), CAT.elokuva,
          detail(PUUTARHAPIHA, ends("21.45")), cf("taste-of-cherry")),
        ev("20.00", "Orvokki", CAT.musiikki, detail(KIVIPIHA, ends("20.45")), cm("orvokki")),
        ev("21.00", t("Isänpäivä", "Isänpäivä (Father's Day)", "Isänpäivä (Farsdag)"), CAT.elokuva,
          detail(ULKOILMA, ends("23.19"), guest("Aleksi Salmenperä")), cf("isanpaiva")),
        ev("22.00", "Love Lies Bleeding", CAT.elokuva,
          detail(PUUTARHAPIHA, ends("23.54")), cf("love-lies-bleeding")),
      ],
      ongoing: [
        blindCinema(t("15, 18 ja 20", "15, 18 and 20", "15, 18 och 20")),
        seitsemasAaltoFilm("15–18"),
        ongoing(
          t("Seitsemäs aalto — näyttelyn avajaiset", "Seitsemäs aalto — exhibition opening", "Sjunde vågen — vernissage"),
          CAT.taide, detail("Käytävägalleria", t("klo 19–22", "19–22", "kl. 19–22")), ca("seitsemas-aalto")),
        ongoing(
          t("Seitsemäs aalto — ulkoinstallaatio", "Seitsemäs aalto — outdoor installation", "Sjunde vågen — utomhusinstallation"),
          CAT.taide, detail(t("Lapinlahden laituri", "Lapinlahti pier", "Lappvikens brygga"), t("klo 21–23", "21–23", "kl. 21–23")), ca("seitsemas-aalto")),
        awitha("15–21"),
        stopTheHustle(),
        elephant(),
        ...exhibitions(),
      ],
    },
    {
      id: "la",
      label: t("La", "Sat", "Lör"),
      date: "22.8",
      dayOfMonth: 22,
      heading: t("Lauantai 22.8.", "Saturday 22 August", "Lördag 22 augusti"),
      venue: "Lapinlahden Lähde",
      venueUrl: MAPS.lahde,
      events: [
        ev("13.00", t("Olennolliset olennot — stop motion", "Essential Creatures — stop motion", "Väsentliga varelser — stop motion"),
          CAT.tyopaja, detail(t("Tilajakamon puutarhapiha", "Tilajakamo garden courtyard", "Tilajakamos trädgårdsgård"), ends("15.00")), cw("olennolliset-olennot")),
        ev("13.00", "Release & Relax", CAT.tyopaja,
          detail(t("Omenapuutalon nurmikko", "Omenapuutalo lawn", "Omenapuutalos gräsmatta"), ends("13.55")), cw("release-and-relax")),
        ev("14.00", "Nordic Frames: I Love My Car", CAT.lyhytelokuvat,
          detail(AUDITORIO, ends("15.45"), inclQa), cs("i-love-my-car")),
        ev("14.00", "Stinging Nettle Fibre Processing", CAT.tyopaja,
          detail(PUISTO, ends("16.00")), cw("stinging-nettle")),
        ev("14.00", t("Palaa kehoosi, palaa ääneesi", "Come Back to Your Body, Come Back to Your Voice", "Återvänd till din kropp, återvänd till din röst"),
          CAT.tyopaja, detail("Wanha Labra", ends("15.15")), cw("come-back-to-your-body")),
        ev("14.45", t("Musta Orfeus", "Black Orpheus", "Svart Orfeus"), CAT.elokuva,
          detail(PUUTARHAPIHA, ends("16.40")), cf("musta-orfeus")),
        ev("15.00", "[Re]membering: A Writing Workshop", CAT.tyopaja,
          detail(t("Sininen Huone", "Sininen Huone", "Sininen Huone"), ends("17.00")), cw("re-membering")),
        ev("16.00", "Nordic Frames: Borderland", CAT.lyhytelokuvat,
          detail(AUDITORIO, ends("18.03"), inclQa), cs("borderland")),
        ev("16.00", "DIY DIE (Putting the Fun in Funeral Planning)", CAT.tyopaja,
          detail("Wanha Labra", ends("17.30")), cw("diy-die")),
        ev("17.00", "Birita", CAT.elokuva,
          detail(PUUTARHAPIHA, ends("19.10"), inclQa), cf("birita")),
        ev("18.20", "Nordic Frames: Mothers' Figures", CAT.lyhytelokuvat,
          detail(AUDITORIO, ends("20.21"), inclQa), cs("mothers-figures")),
        ev("19.30", "Embrace of the Serpent", CAT.elokuva,
          detail(PUUTARHAPIHA, ends("21.45")), cf("embrace-of-the-serpent")),
        ev("20.00", "Joni Ekman", CAT.musiikki, detail(KIVIPIHA, ends("20.45")), cm("joni-ekman")),
        ev("21.00", t("Turisti", "Force Majeure", "Turist"), CAT.elokuva,
          detail(ULKOILMA, ends("23.25")), cf("turisti")),
        ev("22.00", "The Ugly Stepsister", CAT.elokuva,
          detail(PUUTARHAPIHA, ends("23.59")), cf("the-ugly-stepsister")),
      ],
      ongoing: [
        blindCinema(t("13, 15, 18 ja 20", "13, 15, 18 and 20", "13, 15, 18 och 20")),
        seitsemasAaltoFilm("13–21"),
        ongoing(
          t("Madonsyöjät — näyttelyn avajaiset", "Madonsyöjät — exhibition opening", "Madonsyöjät — vernissage"),
          CAT.taide, detail("Kahvila Lähde", t("klo 18–20", "18–20", "kl. 18–20")), ca("madonsyojat")),
        ongoing(
          t("Seitsemäs aalto — ulkoinstallaatio", "Seitsemäs aalto — outdoor installation", "Sjunde vågen — utomhusinstallation"),
          CAT.taide, detail(t("Lapinlahden laituri", "Lapinlahti pier", "Lappvikens brygga"), t("klo 21–23", "21–23", "kl. 21–23")), ca("seitsemas-aalto")),
        awitha("14–21"),
        stopTheHustle(),
        elephant(),
        ...exhibitions(),
      ],
    },
    {
      id: "su",
      label: t("Su", "Sun", "Sön"),
      date: "23.8",
      dayOfMonth: 23,
      heading: t("Sunnuntai 23.8.", "Sunday 23 August", "Söndag 23 augusti"),
      venue: "Lapinlahden Lähde",
      venueUrl: MAPS.lahde,
      events: [
        ev("13.00", t("Hoitava liike", "Hoitava liike", "Hoitava liike"), CAT.tyopaja,
          detail("Wanha Labra", ends("14.00")), cw("hoitava-liike")),
        ev("13.00", t("Craft Corner — Emma ja Ilya", "Craft Corner with Emma and Ilya", "Craft Corner med Emma och Ilya"),
          CAT.tyopaja,
          detail(
            t("Omenapuutalon nurmikko", "Omenapuutalo lawn", "Omenapuutalos gräsmatta"),
            ends("17.00")
          ),
          cw("craft-corner")),
        ev("14.00", "Los Pan Pan", CAT.musiikki, detail(KIVIPIHA, ends("14.45")), cm("los-pan-pan")),
        ev("14.00", t("Surun keskellä", "Sitting with Grief", "Mitt i sorgen"), CAT.tyopaja,
          detail("Osasto 5", ends("16.00")), cw("sitting-with-grief")),
        ev("14.30", t("Taistelu Lapinlahdesta", "The Battle for Lapinlahti", "Kampen om Lappviken"), CAT.elokuva,
          detail(PUUTARHAPIHA, ends("16.25"), inclQa), cf("taistelu-lapinlahdesta")),
        ev("15.00", "Nordic Frames: Generation Zeitgeist", CAT.lyhytelokuvat,
          detail(AUDITORIO, ends("17.00"), inclQa), cs("generation-zeitgeist")),
        ev("15.00", "The End of The Word", CAT.tyopaja,
          detail(t("Sininen Huone", "Sininen Huone", "Sininen Huone"), ends("17.00")), cw("the-end-of-the-word")),
        ev("16.45", "Christiania", CAT.elokuva, detail(PUUTARHAPIHA, ends("18.27")), cf("christiania")),
        ev("17.00", "Poljin", CAT.taide,
          detail(KIVIPIHA), ca("poljin")),
        ev("17.30", "Nordic Frames: Weirdly Working", CAT.lyhytelokuvat,
          detail(AUDITORIO, ends("19.38"), inclQa), cs("weirdly-working")),
        ev("18.45", "And Then We Danced", CAT.elokuva,
          detail(PUUTARHAPIHA, ends("20.43")), cf("and-then-we-danced")),
        ev("20.00", "Lyyti", CAT.musiikki, detail(KIVIPIHA, ends("20.45")), cm("lyyti")),
        ev("21.00", "Aftersun", CAT.elokuva, detail(ULKOILMA, ends("23.00")), cf("aftersun")),
        ev("22.00", t("Nordic Frames: NØW-työpajan näytös", "Nordic Frames: NØW Workshop Screening", "Nordic Frames: NØW-Workshop visning"),
          CAT.lyhytelokuvat, detail(PUUTARHAPIHA, ends("23.30")), cs("now-workshop")),
      ],
      ongoing: [
        blindCinema(t("13, 15, 18 ja 20", "13, 15, 18 and 20", "13, 15, 18 och 20")),
        seitsemasAaltoFilm("13–21"),
        ongoing(
          t("KAKSI VÄRIÄ", "TWO COLORS", "TVÅ FÄRGER"),
          CAT.taide,
          detail(t("Ulkoinstallaatio, Lapinlahden laituri", "Outdoor installation, Lapinlahden laituri", "Utomhusinstallation, Lappvikens brygga"), t("klo 21–22", "21–22", "kl. 21–22")),
          ca("kaksi-varia")),
        ongoing(
          "Pinngortitarlu Oqaloqatigiinneq (Dialogue With Nature)",
          CAT.taide,
          detail(t("Ulkoinstallaatio, Lapinlahden laituri", "Outdoor installation, Lapinlahden laituri", "Utomhusinstallation, Lappvikens brygga"), t("klo 22–23", "22–23", "kl. 22–23")),
          ca("dialogue-with-nature")),
        awitha("14–21"),
        stopTheHustle(),
        elephant(),
        ...exhibitions(),
      ],
    },
  ];
  return [
    {
      fields: {
        ongoingTitle: t("Koko päivän", "All day", "Hela dagen"),
        weekLabel: t("Koko viikko", "Whole week", "Hela veckan"),
        allLabel: t("Kaikki", "All", "Alla"),
        // Näytetään kun kategoriasuodatin ei osu valitun päivän ohjelmaan
        emptyFilter: t(
          "Tämän kategorian tapahtumia ei ole valittuna päivänä. Kokeile toista päivää tai Koko viikko -näkymää.",
          "There are no events in this category on the selected day. Try another day or the Whole week view.",
          "Det finns inga evenemang i den här kategorin den valda dagen. Prova en annan dag eller vyn Hela veckan."
        ),
        // Oma festivaali -ominaisuuden tekstit
        mine: {
          label: t("Oma festivaali", "My festival", "Min festival"),
          empty: t(
            "Et ole vielä valinnut tapahtumia. Kokoa oma festivaalisi lisäämällä tapahtumia plus-napista.",
            "You haven't picked any events yet. Build your own festival by adding events with the plus button.",
            "Du har inte valt några evenemang ännu. Bygg din egen festival genom att lägga till evenemang med plusknappen."
          ),
          // Muistutus lippujen varaamisesta — linkki upotetaan tekstin
          // keskelle ProgramTimeline.jsx:ssä (reminderStart + linkki + reminderEnd)
          reminderStart: t(
            "Tästä näet, mihin olet suunnitellut oman festivaalisi. Muistathan varata liput näytöksiin ja työpajoihin erikseen ",
            "Here you can see what you have planned for your own festival. Remember to reserve tickets for screenings and workshops separately on ",
            "Här ser du vad du har planerat för din egen festival. Kom ihåg att boka biljetter till visningarna och workshopparna separat på "
          ),
          reminderLink: t("Fientassa", "Fienta", "Fienta"),
          reminderEnd: ".",
          ticketUrl: "https://fienta.com/fi/o/lapinlahti-film-festival",
          saveImage: t("Tallenna kuvana", "Save as image", "Spara som bild"),
          calendar: t("Vie kalenteriin", "Add to calendar", "Lägg till i kalendern"),
          addAria: t("Lisää omaan festivaaliin", "Add to my festival", "Lägg till i min festival"),
          removeAria: t("Poista omasta festivaalista", "Remove from my festival", "Ta bort från min festival"),
          imageTitle: t("Oma festivaalini", "My festival", "Min festival"),
          imageSubtitle: t(
            "Lapinlahden elokuvajuhlat 17.–23.8.2026",
            "Lapinlahti Film Festival 17–23 August 2026",
            "Lappvikens Filmfestival 17–23.8.2026"
          ),
          imageFooter: "lapinlahdenelokuvajuhlat.fi",
          calendarName: t(
            "Lapinlahden elokuvajuhlat 2026",
            "Lapinlahti Film Festival 2026",
            "Lappvikens Filmfestival 2026"
          ),
        },
        note: t(
          "Elokuvanäytökset ja työpajat vaativat ennakkoilmoittautumisen. Muutokset ohjelmaan ovat mahdollisia.",
          "Films and workshops require advance registration. The programme is subject to change.",
          "Filmvisningarna och workshopparna kräver förhandsanmälan. Ändringar i programmet är möjliga."
        ),
        days,
      },
    },
  ];
};

// --- Ruotsinkielinen versio -------------------------------------------
// Rakenne peritään englanninkielisestä (`...en`), jolloin kaikki kentät
// ovat olemassa; alla ylikirjoitetaan ne, joille on ruotsinnos.
// Festivaalin virallinen ruotsinkielinen nimi on Lappvikens Filmfestival.
const sv = {
  ...en,
  landingPage: [
    {
      fields: {
        title: "Lappvikens Filmfestival",
        date: "17–23.8.2026",
        secondaryTitle: "Film gör gott",
      },
    },
  ],
  scheduleSection: [{ fields: { title: "Tidtabell", schedule: [] } }],
  catalogSection: [
    {
      fields: {
        title: "Program",
        filmSectionTitle: "Filmer",
        musicSectionTitle: "Musik",
        shortFilmSectionTitle: "Kortfilmer",
        workshopSectionTitle: "Workshops",
        nowSectionTitle: "Nu",
        artSectionTitle: "Konst",
        films: [],
        music: [],
        shortFilms: [],
        workshops: [],
        now: null,
        art: [],
      },
    },
  ],
  contactsSection: [
    {
      fields: {
        title: "Kontakt",
        contacts: contactsByLocale["en-US"],
      },
    },
  ],
  eventSection: [
    {
      fields: {
        ...en.eventSection[0].fields,
        title: "Om festivalen",
        secondaryTitle: "Lappvikens Filmfestival",
        paragraph:
          "Lappvikens Filmfestival är ett evenemang med fritt inträde. Programmet är gratis för besökarna, men filmvisningarna och workshopparna kräver förhandsanmälan. Till fullbokade visningar och workshoppar kan du komma och köa för återbud på plats.",
        paragraph2:
          "I år sprider sig festivalen bredare över Helsingfors. På måndagen och tisdagen visas filmerna på Kino Regina i Ode, på onsdagen ordnas en stämningsfull utomhusvisning på Glaspalatsets plats och på torstagen, under Konstens natt, bjuds det på mångkonstprogram på Lapinlahden Lähde. Under veckoslutet samlas vi som traditionen bjuder i Lappviksområdet: på dagarna filmvisningar i den historiska byggnaden och när solen går ner en utomhusvisning på stora duken på stengården.",
        paragraph3:
          "I år är filmkurateringen uppbyggd kring temat arv och tabun. I programmet ingår dessutom kortfilmsserien Nordic Frames. I Lapinlahden Lähdes historiska miljö finns också ett gemenskapsbyggande mångkonstprogram där lokala konstnärers och aktörers egensinniga röst framhävs.",
      },
    },
  ],
  areaSection: [
    {
      fields: {
        ...en.areaSection[0].fields,
        title: "Området",
        secondaryTitle: "Lapinlahden Lähde, Helsingfors",
      },
    },
  ],
  buttons: [
    {
      fields: {
        ticketButton: "Biljetter",
        ticketNote: null,
        open: "Öppna",
        closed: "Stängd",
      },
    },
  ],
  navBar: [
    {
      fields: {
        title: "Navigation",
        logo: null,
        ticketButton: "Biljetter",
      },
    },
  ],
  footer: [
    {
      fields: {
        ...en.footer[0].fields,
        privacyNotice: "Dataskyddsbeskrivning",
        copyright: "© Lappvikens Filmfestival 2026",
      },
    },
  ],
};

fi.programSection = buildProgramSection("fi");
en.programSection = buildProgramSection("en-US");
sv.programSection = buildProgramSection("sv");

fi.venuesSection = buildVenues("fi");
en.venuesSection = buildVenues("en-US");
sv.venuesSection = buildVenues("sv");

// Ohjelmiston kortit (elokuvat, lyhärit, musiikki, työpajat, taide)
// täydennetään catalogSection-kenttiin — otsikkokentät säilyvät yllä
fi.catalogSection[0].fields = {
  ...fi.catalogSection[0].fields,
  ...buildCatalog("fi"),
};
en.catalogSection[0].fields = {
  ...en.catalogSection[0].fields,
  ...buildCatalog("en-US"),
};
sv.catalogSection[0].fields = {
  ...sv.catalogSection[0].fields,
  ...buildCatalog("sv"),
};

const content = {
  fi,
  "en-US": en,
  sv,
};

// Hae sisältö valitulle kielelle. Tuntematon kieli palauttaa suomenkielisen
// version oletuksena.
export function getContent(language) {
  return content[language] ?? content.fi;
}

// Yleisesti käytetyt placeholder-tekstit kun sektion data on tyhjä
export const placeholders = {
  fi: {
    schedule: "Aikataulu julkaistaan pian.",
    catalog: "Elokuvien ja työpajojen esittelyt julkaistaan pian. Aikataulu löytyy jo yltä.",
    event: "Lisätietoja julkaistaan pian.",
    area: "Sisältöä päivitetään pian.",
  },
  "en-US": {
    schedule: "The schedule will be published soon.",
    catalog:
      "Descriptions of the films and workshops will be published soon. The schedule is already available above.",
    event: "More information will be published soon.",
    area: "Content will be updated soon.",
  },
  sv: {
    schedule: "Tidtabellen publiceras snart.",
    catalog:
      "Beskrivningarna av filmerna och workshopparna publiceras snart. Tidtabellen finns redan ovan.",
    event: "Mer information publiceras snart.",
    area: "Innehållet uppdateras snart.",
  },
};

export function getPlaceholders(language) {
  return placeholders[language] ?? placeholders.fi;
}

export default content;
