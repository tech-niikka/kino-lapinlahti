// Paikalliset kuvat — Vite resolvoi import-URL:t buildissa
import eventImage from "../assets/event-2026.jpg";

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
        date: "17.–23.8.2026",
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
        secondaryTitle: "Mitä teemme",
        paragraph:
          "Lapinlahden elokuvajuhlat on vapaan pääsyn tapahtuma. Festivaalin ohjelma on vierailijoille ilmainen, mutta elokuvanäytökset sekä työpajat vaativat ennakkoilmoittautumisen. Lipunvarausjärjestelmä aukeaa lähempänä festivaaliviikonloppua. Loppuunvaratuissa näytöksissä ja työpajoissa paikanpäälle voi tulla jonottamaan peruutuspaikkoja.",
        paragraph2:
          "Päivisin järjestämme elokuvanäytöksiä historiallisessa rakennuksessa. Auringon laskiessa kivipihalla järjestetään ulkoilmanäytös isolta valkokankaalta.",
        paragraph3:
          "Lapinlahden elokuvajuhlat on elokuvafestivaali, jossa jaettu elokuvakokemus on keskiössä. Festivaalilla elokuvat eivät kilpaile keskenään, vaan rakentuvat vuosittain vaihtuvan teeman ympärille. Ohjelmistossa on luvassa myös yhteisöllisyyttä rakentavia työpajoja, musiikkiesityksiä ja taidenäyttelyitä.",
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
        date: "17–23 August 2026",
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
        secondaryTitle: "What we do",
        paragraph:
          "Lapinlahti Film Festival is a free-admission event. The programme is free to visitors, but due to limited space films and workshops require enrollment in advance. The ticket reservation system opens up closer to the festival. In case of fully booked screenings and workshops you can come and queue for cancelled reservations.",
        paragraph2:
          "During the day, screenings are organised inside the historical building. As the sun sets, an open-air screening is organised in the stone yard.",
        paragraph3:
          "The Lapinlahti Film Festival is a film festival where the shared film experience is at the centre. At the festival, the films do not compete with each other, but are built around a theme that changes every year. The programme also includes a variety of art and mental wellbeing workshops, art exhibitions and live music performances.",
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
