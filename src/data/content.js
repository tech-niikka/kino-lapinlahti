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

const fi = {
  landingPage: [
    {
      fields: {
        title: "Lapinlahden elokuvajuhlat",
        date: "Tulossa elokuussa 2026",
        secondaryTitle: "Elokuvia tekee iloa",
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
        workshopSectionTitle: "Workshopit",
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
  eventSection: [
    {
      fields: {
        title: "Tapahtumasta",
        secondaryTitle: "",
        paragraph: "",
        paragraph2: "",
        paragraph3: "",
        paragraph4: "",
        images: [],
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
        ticketButton: "Liput tulossa",
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
        ticketButton: "Liput tulossa",
      },
    },
  ],
  footer: [
    {
      fields: {
        // Sponsoreita ei näytetä ennen kuin 2026 partnerit on vahvistettu.
        // Footer.jsx käyttää data?.logos[0] festivaalin omana logona,
        // mutta jos logos-array on tyhjä, fallback on paikallinen logo.
        logos: [],
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
        date: "Coming in August 2026",
        secondaryTitle: "Films Bring Joy",
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
  eventSection: [
    {
      fields: {
        title: "About",
        secondaryTitle: "",
        paragraph: "",
        paragraph2: "",
        paragraph3: "",
        paragraph4: "",
        images: [],
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
        ticketButton: "Tickets coming soon",
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
        ticketButton: "Tickets coming soon",
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

const content = {
  fi,
  "en-US": en,
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
    catalog: "Ohjelmisto julkaistaan pian.",
    event: "Lisätietoja tulossa pian.",
    area: "Sisältöä päivitetään lähiaikoina.",
  },
  "en-US": {
    schedule: "The schedule will be published soon.",
    catalog: "The programme will be published soon.",
    event: "More information coming soon.",
    area: "Content will be updated soon.",
  },
};

export function getPlaceholders(language) {
  return placeholders[language] ?? placeholders.fi;
}

export default content;
