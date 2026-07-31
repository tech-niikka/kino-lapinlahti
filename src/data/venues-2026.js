// Festivaalin näyttämöt ja niiden käytännön tiedot (saapuminen, esteettömyys,
// katsomon kapasiteetti). Tekstit tuotannolta 31.7.2026, kolmella kielellä.

import imgLasipalatsi from "../assets/venues/lasipalatsi.jpg";
import imgOodi from "../assets/venues/oodi.jpg";
import imgLahde from "../assets/venues/lahde.jpg";

const MAPS = {
  oodi: "https://www.google.com/maps/search/?api=1&query=Oodi+Helsingin+keskustakirjasto",
  lasipalatsi:
    "https://www.google.com/maps/search/?api=1&query=Lasipalatsin+aukio+Helsinki",
  lahde:
    "https://www.google.com/maps/search/?api=1&query=Lapinlahden+L%C3%A4hde+Helsinki",
};

// Esteettömyys- ja turvallisemman tilan ohjeet
const ACCESSIBILITY_GUIDE =
  "https://docs.google.com/document/d/18mhspc47rtUlAMXKDayj_F4Q89gykPB0-dy2PHDo1nQ/edit?usp=sharing";
const SAFER_SPACE =
  "https://docs.google.com/document/d/10dpNEoE-QhiHLJlxvdOWfAuNVkOw_jykU1H5D1sCh3w/edit?usp=sharing";

export const buildVenues = (locale) => {
  const isEn = locale === "en-US";
  const isSv = locale === "sv";
  const t = (fi, en, sv) => (isSv ? sv ?? en ?? fi : isEn ? en : fi);

  const mapLabel = t("Näytä kartalla", "View on map", "Visa på kartan");

  return {
    title: t("Paikat", "Venues", "Platser"),
    mapLabel,
    venues: [
      {
        id: "oodi",
        name: t(
          "Oodi – Kino Regina",
          "Oodi – Kino Regina",
          "Ode – Kino Regina"
        ),
        days: t("Ma–ti 17.–18.8.", "Mon–Tue 17–18 Aug", "Mån–tis 17–18.8."),
        address: t(
          "Töölönlahdenkatu 4, 00100 Helsinki",
          "Töölönlahdenkatu 4, 00100 Helsinki",
          "Tölöviksgatan 4, 00100 Helsingfors"
        ),
        mapsUrl: MAPS.oodi,
        photo: imgOodi,
        photoCredit: t(
          "Kuva: Johanna Pennanen",
          "Photo: Johanna Pennanen",
          "Foto: Johanna Pennanen"
        ),
        sections: [
          {
            heading: t("Sisäänkäynti", "Entrance", "Ingång"),
            body: t(
              "Kino Regina sijaitsee Helsingin keskustakirjasto Oodin tiloissa. Sisäänkäynnit teatteriin ovat Oodin sisäänkäyntejä, jotka ovat kaikki esteettömiä, kynnyksettömiä ja varustettu sähköisesti avautuvilla ovilla sekä äänimajakoin. Oodin sisäänkäynnit sijaitsevat Kansalaistorilla, Eero Erkon kadulla sekä Töölönlahdenkadulla.\n\nKirjaston ollessa suljettuna Kino Reginan sisäänkäyntinä toimii rakennuksen pohjoispäädyn ovi (Töölönlahdenkatu 4).",
              "Kino Regina is located inside the Helsinki Central Library Oodi. The entrances to the cinema are the same as the entrances to Oodi, all of which are accessible, step-free, equipped with automatic doors, and fitted with audio beacons. Oodi can be entered from Kansalaistori Square, Eero Erko Street, and Töölönlahdenkatu.\n\nWhen the library is closed, Kino Regina can be accessed through the entrance at the northern end of the building (Töölönlahdenkatu 4).",
              "Kino Regina ligger i Helsingfors centrumbibliotek Ode. Ingångarna till biografen är desamma som till Ode. Samtliga är tillgängliga, tröskelfria, utrustade med automatiska dörrar och ljudfyrar. Ingångar finns från Medborgartorget, Eero Erkos gata och Tölöviksgatan.\n\nNär biblioteket är stängt sker entrén till Kino Regina via ingången vid byggnadens norra gavel (Tölöviksgatan 4)."
            ),
          },
          {
            heading: t(
              "Sisätilat ja kulkeminen",
              "Indoor spaces and access",
              "Inomhusmiljö och tillgänglighet"
            ),
            body: t(
              "Kino Regina sijaitsee Oodin ensimmäisessä kerroksessa. Kulku saliin tapahtuu leveitä käytäviä pitkin. Kansalaistorilta sisälle tullessa käännytään vasemmalle ja kuljetaan kahvilan ohi, kunnes vasemmalla eteen tulevat Kino Reginan lipunmyyntitiski sekä sisäänkäynti. Esteetön reitti Reginalle on opastettu myös kohoraitaopasteella lattiassa.\n\nSalissa on kaksi pyörätuolipaikkaa, yksi kummassakin päässä eturiviä. Lisäksi eturivin edustalla on reilusti vapaata tilaa, johon voidaan ottaa myös pyörätuolia käyttäviä asiakkaita. Saliin on leveät ovet, ja ne avataan 10 minuuttia ennen esitystä.",
              "Kino Regina is located on the first floor of Oodi. The auditorium is reached via wide corridors. When entering from Kansalaistori Square, turn left and continue past the café until you reach the Kino Regina ticket desk and entrance on your left. An accessible route to Kino Regina is also marked with tactile floor guidance strips.\n\nThe auditorium has two wheelchair spaces, located at each end of the front row. There is also ample open space in front of the first row, allowing additional wheelchair users to be accommodated if needed. The auditorium doors are wide and open 10 minutes before each screening.",
              "Kino Regina ligger på första våningen i Ode. Salongen nås via breda korridorer. Om du kommer in från Medborgartorget svänger du vänster och går förbi caféet tills du ser Kino Reginas biljettkassa och entré på vänster sida. Den tillgängliga rutten till Kino Regina är också markerad med taktila ledstråk i golvet.\n\nSalongen har två rullstolsplatser, placerade längst ut på vardera sidan av främsta raden. Dessutom finns gott om fritt utrymme framför första raden, där fler besökare som använder rullstol kan tas emot vid behov. Dörrarna till salongen är breda och öppnas 10 minuter före föreställningen."
            ),
          },
          {
            heading: t("WC-tilat", "Restrooms", "Toaletter"),
            body: t(
              "Oodin esteettömät wc-tilat sijaitsevat K-kerroksessa. Kulku sinne tapahtuu kahvion ja Kino Reginan välissä sijaitsevalla hissillä. Hissin painikkeiden alle on sijoitettu roskakoreja.\n\nK-kerroksessa on kolme esteetöntä wc-tilaa. Kunkin ovissa on vaakavetimet, tiloissa on reilusti tilaa liikkua ja wc-istuimen vieressä olevat tukikahvat on kiinnitetty seinään.\n\nLähin yksittäinen esteetön wc sijaitsee elokuvasalin lämpiössä lipunmyyntipisteen vieressä. Ovi ei ole yleisessä asiakaskäytössä ja siitä puuttuu opastekyltti. WC on lukittu, ja oven saa auki pyytämällä henkilökunnan apua.",
              "Accessible restrooms in Oodi are located on level K. They can be reached by the elevator situated between the café and Kino Regina. Please note that waste bins are located beneath the elevator buttons.\n\nThere are three accessible restrooms on level K. Each has a horizontal pull handle on the door, generous turning space, and wall-mounted support rails next to the toilet.\n\nThe nearest individual accessible restroom is located in the cinema foyer next to the ticket desk. This restroom is not part of the general public facilities and is not marked with signage. It remains locked and can be accessed by asking a member of staff for assistance.",
              "Odes tillgängliga toaletter finns på K-våningen. De nås med hissen mellan caféet och Kino Regina. Observera att det finns papperskorgar placerade under hissknapparna.\n\nPå K-våningen finns tre tillgängliga toaletter. Varje toalett har horisontella draghandtag på dörren, gott om svängutrymme och väggmonterade stödhandtag vid toalettstolen.\n\nDen närmaste enskilda tillgängliga toaletten ligger i biografens foajé intill biljettkassan. Den är inte en del av de allmänna kundtoaletterna och saknar skyltning. Toaletten är låst och öppnas av personalen på begäran."
            ),
          },
          {
            heading: t("Induktiosilmukka", "Hearing loop", "Hörslinga"),
            body: t(
              "Salissa ja palvelupisteessä on induktiosilmukka. Lipuntarkastusväliköstä löytyy induktiosilmukan kuuluvuuskartta, josta selviää, että eturivi ja takarivi ovat kuuluvuusalueen ulkopuolella.",
              "An induction loop is available both in the auditorium and at the service desk. A hearing loop coverage map is displayed at the ticket checkpoint, showing that the front and back rows are outside the induction loop coverage area.",
              "Salongen och servicepunkten är utrustade med hörslinga. Vid biljettkontrollen finns en karta som visar hörslingans täckningsområde. Observera att den främsta och den bakersta raden ligger utanför hörslingans täckning."
            ),
          },
        ],
        links: [],
      },
      {
        id: "lasipalatsi",
        name: t(
          "Lasipalatsin aukio",
          "Lasipalatsi Square",
          "Glaspalatsets plats"
        ),
        days: t("Ke 19.8.", "Wed 19 Aug", "Ons 19.8."),
        address: t(
          "Narinkka 2, 00100 Helsinki",
          "Narinkka 2, 00100 Helsinki",
          "Narinken 2, 00100 Helsingfors"
        ),
        mapsUrl: MAPS.lasipalatsi,
        photo: imgLasipalatsi,
        photoCredit: t(
          "Kuva: Mika Huisman, Amos Rex",
          "Photo: Mika Huisman, Amos Rex",
          "Foto: Mika Huisman, Amos Rex"
        ),
        sections: [
          {
            heading: t("Katsomo", "Seating", "Läktaren"),
            body: t(
              "Lasipalatsin aukiolla on 100 istumapaikkaa, jotka täyttyvät saapumisjärjestyksessä. Ennakkovarauksia ei ole, joten tule ajoissa – tai ota mukaan viltti tai retkituoli ja rakenna oma täydellinen katsomopaikkasi.",
              "There are 100 seats available at Lasipalatsi Square, and they are allocated on a first come, first served basis. As advance reservations are not available, we recommend arriving early — or bringing along a blanket or a camping chair to create your own perfect spot for the screening.",
              "På Glaspalatstorget finns 100 sittplatser som fylls enligt principen först till kvarn. Det går inte att boka platser i förväg, så kom gärna i god tid – eller ta med en filt eller campingstol och skapa din egen perfekta plats för filmupplevelsen."
            ),
          },
          {
            heading: t("Sää", "Weather", "Vädret"),
            body: t(
              "Lasipalatsin aukion ulkoilmakatsomo elää sään mukana. Tarkistathan ennusteen ennen näytöstä ja pukeuduthan lämpimästi sekä sään mukaisesti.\n\nTämän kesän sää on ollut ailahteleva, joten sadeviitta saattaa pelastaa illan – ja mahdollistaa jopa romanttisen elokuvakokemuksen sateen ropistessa. Sateenvarjon voit sen sijaan jättää kotiin, jotta näkyvyys säilyy hyvänä kaikille.\n\nMuistathan, että ulkoilmakatsomossa ja koko festivaalialueella alkoholin tai muiden päihteiden käyttö on kielletty. Olethan lempeä sekä itsellesi että muille. Lämmin kiitos!",
              "The outdoor cinema at Lasipalatsi Square embraces the changing weather. Please check the forecast before the screening and dress warmly and appropriately for the conditions.\n\nThis summer's weather has been unpredictable, so a rain poncho might just save the evening – and even make for a wonderfully romantic cinematic experience as the rain gently falls. Please leave umbrellas at home, however, so that everyone can enjoy an unobstructed view.\n\nPlease note that the use of alcohol and other intoxicants is prohibited in the outdoor cinema and throughout the festival area. We kindly ask you to be gentle with yourself and with others. Thank you for helping us create a welcoming atmosphere.",
              "Utomhusbion på Glaspalats torget lever med vädret. Kontrollera gärna väderprognosen före visningen och klä dig varmt och efter väder.\n\nSommarens väder har varit omväxlande, så en regnponcho kan rädda kvällen – och kanske till och med göra filmupplevelsen extra stämningsfull när regnet stilla faller. Lämna däremot paraplyet hemma så att sikten förblir god för alla.\n\nObservera att användning av alkohol och andra berusningsmedel är förbjuden i utomhusbion och på hela festivalområdet. Vi ber dig att vara omtänksam både mot dig själv och mot andra. Stort tack!"
            ),
          },
          {
            heading: t("Saapuminen", "Arrival", "Ankomst"),
            body: t(
              "Lasipalatsikortteli sijaitsee aivan Helsingin ydinkeskustassa, jossa se rajautuu Simonkadun, Mannerheimintien, Salomonkadun ja Kampin Narinkkatorin keskelle.\n\nLähimmät metropysäkit ovat Kamppi ja Rautatientori, joista molemmista pääsee ylittämättä ruuhkaisia teitä. Lähimmät raitiovaunupysäkit ovat Lasipalatsi sekä Simonkatu.\n\nPyörätelineitä löydät Mannerheimintien varrelta, Simonkadun puolelta ja Lasipalatsin sisäpihalta. Lähin kaupunkipyöräteline on Narinkkatorilla.",
              "Located in the heart of Helsinki, Lasipalatsi block is bordered by Simonkatu, Mannerheimintie, Salomonkatu and Kamppi.\n\nThe closest metro stations are Kamppi and Central Railway Station, both of which can be reached without crossing busy roads. The nearest tram stops are Lasipalatsi and Simonkatu.\n\nBicycle racks are located along Mannerheimintie, on the Simonkatu side and at Lasipalatsi square. The nearest city bike rack is at Narinkkatori in Kamppi.",
              "Glaspalatskvarteret ligger mitt i hjärtat av Helsingfors och gränsar till Simonsgatan, Mannerheimvägen, Salomonsgatan och Narinken i Kampen.\n\nDe närmaste tunnelbanestationerna är Kampen och Järnvägstorget, som båda kan nås utan att korsa trafikerade vägar. De närmaste spårvagnshållplatserna är Glaspalatset och Simonsgatan.\n\nCykelställ finns längs Mannerheimvägen, på Simonsgatans sida och på Glaspalatstorget. Närmaste stadscykelställ finns på Narinken."
            ),
          },
        ],
        links: [],
      },
      {
        id: "lahde",
        name: t(
          "Lapinlahden Lähde",
          "Lapinlahden Lähde",
          "Lappviks Källan"
        ),
        days: t("To–su 20.–23.8.", "Thu–Sun 20–23 Aug", "Tors–sön 20–23.8."),
        address: t(
          "Lapinlahdenpolku 8, 00180 Helsinki",
          "Lapinlahdenpolku 8, 00180 Helsinki",
          "Lapinlahdenpolku 8, 00180 Helsingfors"
        ),
        mapsUrl: MAPS.lahde,
        // Upotettu kartta näytetään vain päänäyttämölle
        mapEmbed:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1584.4612808598185!2d24.911512298500625!3d60.16752629689014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920a37d09b33d7%3A0x80af25826e6d8cf6!2sLapinlahden%20L%C3%A4hde!5e0!3m2!1sen!2sse!4v1715858112461!5m2!1sen!2sse",
        photo: imgLahde,
        photoCredit: null,
        sections: [
          {
            heading: t("Sijainti", "Location", "Plats"),
            body: t(
              "Lapinlahden elokuvajuhlat järjestetään 20.–23.8.2026 Lapinlahden Lähteen sisätiloissa, Omenapuutalolla sekä ympäröivällä puistoalueella. Lapinlahden Lähde sijaitsee Helsingin Lapinlahdessa, Hietaniemen hautausmaan vieressä.",
              "The Lapinlahti Film Festival takes place from 20–23 August 2026 at Lapinlahden Lähde, including the main building, Omenapuutalo, and the surrounding park area. Lapinlahden Lähde is located in the Lapinlahti district of Helsinki, next to Hietaniemi Cemetery.",
              "Lappvikens filmfestival arrangeras 20–23 augusti 2026 i Lappviks Källans huvudbyggnad, Omenapuutalo samt i det omgivande parkområdet. Lappviks Källan ligger i Lappviken i Helsingfors, intill Sandudds begravningsplats."
            ),
          },
          {
            heading: t(
              "Festivaalialueen aukioloajat",
              "Festival opening hours",
              "Festivalens öppettider"
            ),
            body: t(
              "Torstai 20.8. klo 18–22\nPerjantai 21.8. klo 15–00\nLauantai 22.8. klo 13–00\nSunnuntai 23.8. klo 13–23.30",
              "Thursday 20 August 18.00–22.00\nFriday 21 August 15.00–00.00\nSaturday 22 August 13.00–00.00\nSunday 23 August 13.00–23.30",
              "Torsdag 20 augusti 18.00–22.00\nFredag 21 augusti 15.00–00.00\nLördag 22 augusti 13.00–00.00\nSöndag 23 augusti 13.00–23.30"
            ),
          },
          {
            heading: t("Ikäraja", "Age rating", "Åldersgräns"),
            body: t(
              "Tapahtuma on ikärajaton. Joidenkin elokuvien ikäraja on K16.",
              "The festival is open to all ages. Some film screenings are rated 16+.",
              "Festivalen är öppen för alla åldrar. Vissa filmer har åldersgränsen 16 år."
            ),
          },
          {
            heading: t(
              "Esteettömyys ja saavutettavuus",
              "Accessibility",
              "Tillgänglighet"
            ),
            body: t(
              "Lapinlahden Lähde sijaitsee noin kymmenen minuutin kävelymatkan päässä Ruoholahden metroasemalta. Pääset paikalle myös polkupyörällä, raitiovaunulla ja Lapinlahden elokuvajuhlien festivaalibussilla.\n\nTällä hetkellä esteettömin pääsy on päärakennuksen ensimmäiseen kerrokseen, jossa sijaitsevat muun muassa kahvila, Mental Museum, taidenäyttelytiloja ja inva-wc.",
              "Lapinlahden Lähde is approximately a ten-minute walk from Ruoholahti Metro Station. The venue can also be reached by bicycle, tram, and the Lapinlahti Film Festival shuttle bus.\n\nAt the moment, the most accessible entrance is located on the ground floor of the main building (Q-door, on the left side of the building), where you will find the café, the Mental Museum, exhibition spaces, and an accessible toilet.",
              "Lappvikskällan ligger cirka tio minuters promenad från Gräsvikens metrostation. Du kan också ta dig hit med cykel, spårvagn eller Lappvikens filmfestivals festivalbuss.\n\nFör närvarande finns den mest tillgängliga entrén till huvudbyggnadens första våning, där bland annat caféet, Mental Museum, konstutställningslokaler och en tillgänglig toalett finns."
            ),
          },
        ],
        links: [
          {
            href: ACCESSIBILITY_GUIDE,
            label: t(
              "Lapinlahden Lähteen esteettömyysopas",
              "Lapinlahden Lähde accessibility guide",
              "Lappvikskällans tillgänglighetsguide"
            ),
          },
          {
            href: SAFER_SPACE,
            label: t(
              "MYÖS:n turvallisemman tilan periaatteet",
              "Safer space principles by MYÖS",
              "Tryggare rum-principer av MYÖS"
            ),
          },
        ],
      },
    ],
  };
};

export default buildVenues;
