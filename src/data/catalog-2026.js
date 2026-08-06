// 2026-festivaalin ohjelmistodata (Ohjelmisto-osion kortit).
// Koottu julkaisuteksteistä (kansio "LLFF - nettisivujen ohjelmistot",
// heinäkuu 2026). Rakenne vastaa korttikomponenttien (Film, ShortFilm,
// Music, Workshops, Art) odottamia Contentful-tyylisiä kenttiä.
//
// Jokaisella kortilla on `id`, jota aikataulu (ProgramTimeline) käyttää
// linkittämiseen: aikataulurivin klikkaus avaa oikean välilehden ja
// vierittää korttiin.

// Julisteet ja kuvat — web-optimoidut versiot src/assets/catalog/
import imgLeftHandedGirl from "../assets/catalog/films/left-handed-girl.jpg";
import imgHaxan from "../assets/catalog/films/haxan.jpg";
import imgMiehenTyo from "../assets/catalog/films/miehen-tyo.jpg";
import imgHairiotekija from "../assets/catalog/films/hairiotekija.jpg";
import imgShoplifters from "../assets/catalog/films/shoplifters.jpg";
import imgKapina from "../assets/catalog/films/kapina-elaman-puolesta.jpg";
import imgTyhjio from "../assets/catalog/films/tyhjio.jpg";
import imgTasteOfCherry from "../assets/catalog/films/taste-of-cherry.jpg";
import imgIsanpaiva from "../assets/catalog/films/isanpaiva.jpg";
import imgLoveLiesBleeding from "../assets/catalog/films/love-lies-bleeding.jpg";
import imgMustaOrfeus from "../assets/catalog/films/musta-orfeus.jpg";
import imgBirita from "../assets/catalog/films/birita.jpg";
import imgEmbrace from "../assets/catalog/films/embrace-of-the-serpent.jpg";
import imgTuristi from "../assets/catalog/films/turisti.jpg";
import imgUglyStepsister from "../assets/catalog/films/the-ugly-stepsister.jpg";
import imgTaistelu from "../assets/catalog/films/taistelu-lapinlahdesta.jpg";
import imgChristiania from "../assets/catalog/films/christiania.jpg";
import imgAndThenWeDanced from "../assets/catalog/films/and-then-we-danced.jpg";
import imgAftersun from "../assets/catalog/films/aftersun.jpg";

import imgColdPlunge from "../assets/catalog/shorts/cold-plunge.jpg";
import imgVesselViews from "../assets/catalog/shorts/vessel-views.jpg";
import imgILoveMyCar from "../assets/catalog/shorts/i-love-my-car.jpg";
import imgBorderland from "../assets/catalog/shorts/borderland.jpg";
import imgMothersFigures from "../assets/catalog/shorts/mothers-figures.jpg";
import imgGenerationZeitgeist from "../assets/catalog/shorts/generation-zeitgeist.jpg";
import imgWeirdlyWorking from "../assets/catalog/shorts/weirdly-working.jpg";

import imgJoniEkman from "../assets/catalog/music/joni-ekman.jpg";
import imgLyyti from "../assets/catalog/music/lyyti.jpg";
import imgOrvokki from "../assets/catalog/music/orvokki.jpg";
import imgLosPanPan from "../assets/catalog/music/los-pan-pan.jpg";

import imgSafaSolati from "../assets/catalog/workshops/safa-solati.jpg";
import imgGiuliaLepori from "../assets/catalog/workshops/giulia-lepori.jpg";
import imgJosephHallam from "../assets/catalog/workshops/joseph-hallam.jpg";
import imgKajaMatura from "../assets/catalog/workshops/kaja-matura.jpg";
import imgAngelicaLewis from "../assets/catalog/workshops/angelica-lewis.jpg";
import imgOscarZemarti from "../assets/catalog/workshops/oscar-zemarti.jpg";
import imgAnniPellikka from "../assets/catalog/workshops/anni-pellikka.jpg";
import imgKatriHeiskala from "../assets/catalog/workshops/katri-heiskala.jpg";
import imgCraftCorner from "../assets/catalog/workshops/craft-corner.jpg";
import imgOlennot from "../assets/catalog/workshops/olennolliset-olennot.jpg";

import imgKenTastaKay from "../assets/catalog/art/ken-tasta-kay.jpg";
import imgStopTheHustle from "../assets/catalog/art/stop-the-hustle.jpg";
import imgDialogueWithNature from "../assets/catalog/art/dialogue-with-nature.jpg";
import imgSeitsemasAalto from "../assets/catalog/art/seitsemas-aalto.jpg";
import imgMadonsyojat from "../assets/catalog/art/madonsyojat.jpg";
import imgTaiteilijanTalo from "../assets/catalog/art/taiteilijan-talo.jpg";
import imgRuumiillistumia from "../assets/catalog/art/ruumiillistumia.jpg";
import imgAwithA from "../assets/catalog/art/awitha-body-shop.jpg";
import imgKaksiVaria from "../assets/catalog/art/kaksi-varia.jpg";
import imgLeffakaraoke from "../assets/catalog/art/leffakaraoke.jpg";
import imgElephant from "../assets/catalog/art/elephant-in-the-room.jpg";

// Festivaalijuliste — fallback ohjelmille, joilla ei vielä ole omaa kuvaa
import imgFestivalPoster from "../assets/catalog/festival-poster.jpg";

// Ohjelmat ilman omaa kuvaa saavat festivaalijulisteen
import { SV_DESCRIPTIONS } from "./catalog-sv.js";

const artwork = (url) => ({ fields: { file: { url: url ?? imgFestivalPoster } } });

// Fienta-osoitteet: fi-versio /fi/-polulla, en ilman
const fienta = (slug, locale) => {
  const prefix = locale === "en-US" ? "" : locale === "sv" ? "sv/" : "fi/";
  return `https://fienta.com/${prefix}${slug}`;
};

export const buildCatalog = (locale) => {
  const isEn = locale === "en-US";
  const isSv = locale === "sv";
  // Ruotsi käyttää englanninkielistä tekstiä kun sv-käännöstä ei ole annettu
  const t = (fi, en, sv) => (isSv ? sv ?? en ?? fi : isEn ? en : fi);

  // Ruotsinkielinen kuvaus kortille, jos sellainen on julkaisuteksteissä
  const desc = (id, fallback) => (isSv && SV_DESCRIPTIONS[id]) || fallback;

  // Yhteiset otsikkokentät
  const LANG = t("Kieli:", "Language:", "Språk:");
  const TEXT = t("Tekstitys:", "Subtitles:", "Textning:");
  const AGE = t("Ikäraja:", "Age limit:", "Åldersgräns:");
  const WS_LANG = t("Työpajan kieli:", "Workshop language:", "Workshopens språk:");
  const FIENTA_LABEL = t("Varaa paikka (Fienta)", "Reserve a seat (Fienta)", "Boka plats (Fienta)");
  const DIRECTED = t("Ohjaus", "Directed by", "Regissör");
  const TRAILER = t("Katso traileri", "Watch the trailer", "Se trailern");

  // Elokuvakortti
  const film = (o) => ({
    id: o.id,
    fields: {
      title: o.title,
      originalTitle: o.originalTitle ?? "",
      screening: o.screening,
      fientaUrl: o.fienta ?? null,
      fientaLabel: FIENTA_LABEL,
      artwork: artwork(o.img),
      // Juliste linkittyy traileriin kun trailer on tiedossa
      trailerUrl: o.trailer ?? null,
      trailerLabel: TRAILER,
      length: o.length,
      languageTitle: LANG,
      filmlanguage: o.lang,
      textTitle: TEXT,
      textlanguage: o.subs,
      ageLimitTitle: AGE,
      ageLimit: o.age,
      filmDescription: desc(o.id, o.desc),
      productionCompany: `${DIRECTED}: ${o.director}`,
      country: o.country ? `${o.country} ${o.year}` : `${o.year}`,
    },
  });

  const films = [
    film({
      id: "left-handed-girl",
      trailer: "https://www.youtube.com/watch?v=0rXnpfzpk8s",
      title: t("Vasenkätinen tyttö", "Left-Handed Girl"),
      originalTitle: t("Left-Handed Girl", ""),
      screening: t(
        "Ma 17.8. klo 16.30–18.28 · Kino Regina, Oodi",
        "Mon 17 Aug 16.30–18.28 · Kino Regina, Oodi",
        "Mån 17 aug 16.30–18.28 · Kino Regina, Ode"
      ),
      fienta: fienta("lefthandedgirl-lapinlahti-film-festival", locale),
      img: imgLeftHandedGirl,
      length: "108 min",
      lang: t("mandariinikiina, min nan", "Mandarin, Min Nan", "mandarin, min nan"),
      subs: t("suomi, ruotsi", "Finnish, Swedish", "finska, svenska"),
      age: "12",
      director: "Shih-Ching Tsou",
      country: t(
        "Taiwan, Ranska, Yhdysvallat, Iso-Britannia",
        "Taiwan, France, USA, UK"
      ),
      year: "2025",
      desc: t(
        "Äiti ja kaksi tytärtä muuttavat väkeä kuhisevaan Taipeihin. Sisukas kolmikko ryhtyy pitämään nuudelikojua vilkkaalla yötorilla. Koju ei ehkä ole suurmenestys, mutta kolmikko pitää yhtä. Suurkaupungin vauhti ja vilinä lumoaa kolmikon nuorimmaisen.\n\nIsoisä moittii tyttöä vasemman käden käyttämisestä, se kun on vanhojen uskomusten mukaan \"paholaisen käsi\". Tyttö uskoo isoisää kirjaimellisesti. Perheen pitkään vaietut salaisuudet alkavat paljastua.\n\nVasenkätisen tytön tuottaja, leikkaaja ja toinen käsikirjoittaja Sean Baker muistetaan Oscar-magneetti Anoran ohjauksesta. Tuottajana (mm. Florida Project) mainetta niittäneen Shih-Ching Tsoun esikoisohjaus tavoittaa Taipein neonvalojen kaleidoskoopin, elämän sirkuksen ja seikkailun.",
        "A mother and her two daughters move to bustling Taipei. The determined trio starts running a noodle stand at a lively night market. The stall may not become a great success, but the three remain united. The youngest daughter is enchanted by the energy and excitement of the big city.\n\nThe girl's grandfather scolds her for using her left hand, as according to old beliefs it is \"the devil's hand.\" The girl takes his words literally. Long-kept family secrets begin to come to light.\n\nThe producer, editor and co-screenwriter of Left-Handed Girl, Sean Baker, is best known for directing the Oscar-winning sensation Anora. The debut feature by Shih-Ching Tsou, who has earned acclaim as a producer (including The Florida Project), captures the kaleidoscope of Taipei's neon lights, the circus of life, and the sense of adventure."
      ),
    }),
    film({
      id: "haxan",
      trailer: "https://www.youtube.com/watch?v=0er-CiMqfFg",
      title: t("Europa + Noita (Häxan)", "Europa + Häxan"),
      originalTitle: t(
        "Alkukuvana Europa (1931)",
        "Preceded by Europa (1931)",
        "Med Europa (1931) som förfilm"
      ),
      screening: t(
        "Ma 17.8. klo 18.50–20.39 · Kino Regina, Oodi",
        "Mon 17 Aug 18.50–20.39 · Kino Regina, Oodi",
        "Mån 17 aug 18.50–20.39 · Kino Regina, Ode"
      ),
      fienta: fienta("haxan-lapinlahti-film-festival", locale),
      img: imgHaxan,
      length: "77 min",
      lang: t(
        "ruotsi (mykkäelokuva, tallennettu säestys)",
        "Swedish (silent, synchronized score)", "svenska (stumfilm med inspelad musik)"
      ),
      subs: t("suomi", "Finnish", "finska"),
      age: "12",
      director: "Benjamin Christensen",
      country: t("Ruotsi, Tanska", "Sweden, Denmark"),
      year: "1922",
      desc: t(
        "ALKUKUVANA EUROPA (1931), ohjaus Stefan & Franciszka Themerson, S\n\nEuropa on surrealistipariskunta Stefan ja Franciszka Themersonin ohjaama antifasistinen elokuvaruno, joka oli lähes 80 vuotta kateissa sen jälkeen, kun Saksan armeija varasti sen filmikopiot toisen maailmansodan syttyessä. Lapinlahden elokuvajuhlilla Europan säestää runoilija-elokuvatutkija Aatos Ketvel kokeellisella live-äänikollaasilla. Ketvel tahtoo esityksellään nostaa teoksen arvoonsa paitsi avantgarde-elokuvan unohdettuna merkkiteoksena, myös hyytävän ajankohtaisena kuvauksena fasismin noususta Euroopassa.\n\nNOITA (HÄXAN)\n\nNoita (Häxan) on kauhuelokuvien aikainen merkkiteos, jota yleisesti katsotaan ainutlaatuisena ja vaikutusvaltaisena genreteoksena.\n\nVuoden 1922 Benjamin Christensenin mykkäelokuvan katsottiin sisältävän satanistista ja seksuaalista kuvastoa, ja kiellettiin aikoinaan Suomessa. Nykyään teos on kulttiklassikko, joka hämmästyttää tehosteillaan ja yhteiskunnallisella kritiikillään.",
        "PRECEDED BY EUROPA (1931), directed by Stefan & Franciszka Themerson, rated S\n\nEuropa is an anti-fascist cine-poem by the surrealist couple Stefan and Franciszka Themerson. It was lost for nearly 80 years after the German army seized its prints at the outbreak of the Second World War. At Lapinlahti Film Festival, Europa is accompanied by poet and film scholar Aatos Ketvel with an experimental live sound collage. With his performance, Ketvel wants to restore the film to its rightful place — not only as a forgotten landmark of avant-garde cinema, but as a chillingly topical portrayal of the rise of fascism in Europe.\n\nHÄXAN\n\nHäxan (Witchcraft Through the Ages) is a landmark early horror film, widely regarded as a unique and influential genre masterpiece.\n\nBenjamin Christensen's 1922 silent film was considered to contain satanic and sexual imagery and was banned in Finland at the time. Today, it is regarded as a cult classic that continues to amaze audiences with its special effects and social criticism."
      ),
    }),
    film({
      id: "miehen-tyo",
      trailer: "https://www.youtube.com/watch?v=OVZFIIr43Go",
      title: t("Miehen työ", "Miehen työ (Man's Job)"),
      originalTitle: "",
      screening: t(
        "Ti 18.8. klo 16.00–18.23 · Kino Regina, Oodi",
        "Tue 18 Aug 16.00–18.23 · Kino Regina, Oodi",
        "Tis 18 aug 16.00–18.23 · Kino Regina, Ode"
      ),
      fienta: fienta("miehentyo-lapinlahti-film-festival", locale),
      img: imgMiehenTyo,
      length: "103 min",
      lang: t("suomi", "Finnish", "finska"),
      subs: t("suomi", "Finnish", "finska"),
      age: "12",
      director: "Aleksi Salmenperä",
      country: t("Suomi", "Finland"),
      year: "2007",
      desc: t(
        "Miehen työ kertoo tarinan Juhasta (Tommi Korpela), joka on irtisanottu työpaikastaan betonitehtaalta. Hän häpeää epäonnistumistaan ja kantaa huolta perheen taloudellisesta tilanteesta. Hän ei myöskään halua järkyttää vaimonsa, Katjan (Maria Heiskanen), mielenterveyttä ja siksi päättää olla kertomatta potkuista vaimolleen. Juha laittaa huoltoaseman ilmoitustaululle ilmoituksen, jossa hakee remonttimiehentöitä. Hänen ilmoitukseensa vastaa nainen, ja yllättäen Juha löytää itsensä harjaamassa alastoman, täysin tuntemattoman naisen hiuksia. Hän huomaa ansaitsevansa tunnissa saman verran kuin entisessä työssään kahdessa päivässä. Ystävänsä Ollin (Jani Volanen) avustuksella Juha päättää vaihtaa \"alaa\" toistaiseksi.\n\nNäytöksen jälkeen on luvassa 30 minuutin Q&A-keskustelu ohjaaja Aleksi Salmenperän kanssa.",
        "Man's Job tells the story of Juha (Tommi Korpela), who has been laid off from his job at a concrete factory. Ashamed of his failure and worried about his family's financial situation, he also fears upsetting the fragile mental health of his wife, Katja (Maria Heiskanen). For that reason, he decides not to tell her that he has lost his job. One day, Juha posts a notice on a service station bulletin board offering his services as a handyman. A woman responds, and unexpectedly, Juha soon finds himself brushing the hair of a completely naked stranger. He realizes that he earns as much in one hour as he used to make in two days at his old job. With the help of his friend Olli (Jani Volanen), Juha decides to change careers, at least for the time being.\n\nThe screening is followed by a 30 minute Q&A session with director Aleksi Salmenperä."
      ),
    }),
    film({
      id: "hairiotekija",
      trailer: "https://www.youtube.com/watch?v=CfQ1CncwByU",
      title: t("Häiriötekijä", "Häiriötekijä (Distractions)"),
      originalTitle: "",
      screening: t(
        "Ti 18.8. klo 18.35–20.40 · Kino Regina, Oodi",
        "Tue 18 Aug 18.35–20.40 · Kino Regina, Oodi",
        "Tis 18 aug 18.35–20.40 · Kino Regina, Ode"
      ),
      fienta: fienta("hairiotekija-lapinlahti-film-festival", locale),
      img: imgHairiotekija,
      length: "85 min",
      lang: t("suomi", "Finnish", "finska"),
      subs: t("varmistuu pian", "confirmed soon", "bekräftas snart"),
      age: "12",
      director: "Aleksi Salmenperä",
      country: t("Suomi", "Finland"),
      year: "2015",
      desc: t(
        "Häiriötekijä on pirullisen hauska ja rohkea komedia, joka hakee vertaistaan. Elokuva koostuu kymmenestä tarinasta, joissa kaikissa jokin on vinksahtanut paikoiltaan. Se yllättää katsojan ja saa nauramaan myös synkemmille kohtaloille. Mitä tapahtuu, kun aatelisperheen äidin häveliäisyys unohtuu elämän viime metreillä? Minkälaisin menoin haudataan mielikuvitusystävä? Entä miten IT-nörtin itsetunto kestää testosteronia uhkuvan metsämiehen kohtaamisen tai miten sujuu asuntonäyttö, jossa asiakas alkaa kuulla häiritseviä ääniä?\n\nNäytöksen jälkeen on luvassa 30 minuutin Q&A-keskustelu ohjaaja Aleksi Salmenperän kanssa.",
        "Distractions is a wickedly funny and boldly original comedy unlike any other. The film consists of ten stories, each featuring a world that has somehow slipped out of balance. It surprises audiences and finds humor even in life's darker twists and fates. What happens when the matriarch of an aristocratic family forgets all sense of propriety in the final moments of her life? How do you hold a funeral for an imaginary friend? Can an IT geek's self-confidence survive an encounter with a hyper-masculine lumberjack? And what happens during an apartment viewing when the prospective buyer starts hearing disturbing voices?\n\nThe screening is followed by a 30 minute Q&A session with director Aleksi Salmenperä."
      ),
    }),
    film({
      id: "shoplifters",
      trailer: "https://www.youtube.com/watch?v=9382rwoMiRc",
      title: t("Shoplifters – perhesalaisuuksia", "Shoplifters"),
      originalTitle: "Manbiki Kazoku",
      screening: t(
        "Ke 19.8. klo 21.00–23.11 · Lasipalatsin aukio",
        "Wed 19 Aug 21.00–23.11 · Lasipalatsi Square",
        "Ons 19 aug 21.00–23.11 · Lasipalatset"
      ),
      fienta: null,
      img: imgShoplifters,
      length: "121 min",
      lang: t("japani", "Japanese", "japanska"),
      subs: t("suomi, ruotsi", "Finnish, Swedish", "finska, svenska"),
      age: "12",
      director: "Hirokazu Kore-eda",
      country: t("Japani", "Japan"),
      year: "2018",
      desc: t(
        "Hirokazu Kore-eda on Japanin arvostetuimpia nykyohjaajia. Shoplifters – perhesalaisuuksia palkittiin keväällä 2018 Cannesin elokuvajuhlien pääpalkinnolla Kultaisella palmulla ja se oli Japanin virallinen Oscar-ehdokas.\n\nOsamu on poikansa kanssa tavanomaisella näpistelyreissulla kun he sattumalta kohtaavat kylmässä värisevän, hylätyn tytön. He huolehtivat tästä ja ottavat tytön osaksi perhettään – kunnes odottamaton tapahtuma paljastaa perheen salaisuudet ja laittaa heidän yhteiselonsa koetukselle.\n\nPääsy on ilmainen, eikä paikkaa tarvitse varata. Noin 100 istumapaikkaa menee ensimmäisille paikalla oleville, ja muuten saa vapaasti tuoda oman viltin tai muun alustan.",
        "Hirokazu Kore-eda is one of Japan's most acclaimed contemporary filmmakers. Shoplifters won the Palme d'Or, the top prize at the Cannes Film Festival, in the spring of 2018 and was Japan's official Academy Awards submission.\n\nOsamu and his son are on one of their routine shoplifting trips when they happen to come across an abandoned young girl shivering in the cold. They take her in and welcome her into their family. When an unexpected incident reveals the family's secrets, their life together is put to the test.\n\nEntry is free, and no reservation is needed. Around 100 chair seats will go to the first in line, after which you are free to bring a blanket or other seating."
      ),
    }),
    film({
      id: "kapina-elaman-puolesta",
      trailer: "https://www.youtube.com/watch?v=k5z-BzQLJAo",
      title: "Kapina elämän puolesta",
      originalTitle: "",
      screening: t(
        "Pe 21.8. klo 15.00–17.00 · Puutarhapiha",
        "Fri 21 Aug 15.00–17.00 · Garden yard",
        "Fre 21 aug 15.00–17.00 · Trädgården"
      ),
      fienta: fienta("kapinaelamanpuolesta-lapinlahti-film-festival", locale),
      img: imgKapina,
      length: "80 min",
      lang: t("suomi, englanti", "Finnish, English", "finska, engelska"),
      subs: t("suomi, englanti", "Finnish, English", "finska, engelska"),
      age: "7",
      director: "Saku Soukka",
      country: t("Suomi", "Finland"),
      year: "2025",
      desc: t(
        "Kapinallisilla on vaikeuksia yhteensovittaa omaa moraaliaan ja lakipykäliä ilmastokriisin ja luontokadon kiihtyessä uhkaavasti. Pyrkiessään saavuttamaan tavoitteensa Elokapinalla on yhtenä keinona väkivallaton kansalaistottelemattomuus. He käyttävät omia kehojaan, joilla he blokkaavat tehtaita, tuotantovälineitä ja katuja. Elokapina saa elokuvassa osakseen kritiikkiä, ja raivokkaitakin reaktioita tulee esiin. Katsoja pääsee arvioimaan erilaisia kannanottoja. Virkavalta asettaa rajat mielenosoituksille paikoin koviin otteisiin turvautuen.\n\nNäytöksen jälkeen on luvassa 30 minuutin Q&A-keskustelu.",
        "Rebels struggle to reconcile their own moral convictions with the rule of law as the climate crisis and biodiversity loss accelerate at an alarming pace. In pursuing its goals, the Extinction Rebellion Finland (Elokapina) movement employs nonviolent civil disobedience as one of its key methods. Activists use their own bodies to block factories, industrial operations and streets. The film also presents criticism directed at Elokapina, including angry and confrontational reactions, inviting viewers to weigh the different perspectives for themselves. The authorities set the limits for demonstrations, at times resorting to heavy-handed policing.\n\nThe screening is followed by a 30 minute Q&A session."
      ),
    }),
    film({
      id: "tyhjio",
      trailer: "https://www.youtube.com/watch?v=GY9OTJqahiE",
      title: t("Tyhjiö", "Tyhjiö (Void)"),
      originalTitle: "",
      screening: t(
        "Pe 21.8. klo 17.20–19.37 · Puutarhapiha",
        "Fri 21 Aug 17.20–19.37 · Garden yard",
        "Fre 21 aug 17.20–19.37 · Trädgården"
      ),
      fienta: fienta("tyhjio-lapinlahti-film-festival", locale),
      img: imgTyhjio,
      length: "97 min",
      lang: t("suomi, englanti, venäjä", "Finnish, English, Russian", "finska, engelska, ryska"),
      subs: t("tekstitys vahvistuu pian", "subtitles confirmed soon", "textningen bekräftas snart"),
      age: "12",
      director: "Aleksi Salmenperä",
      country: t("Suomi", "Finland", "Finland"),
      year: "2018",
      desc: t(
        "Eeron (Tommi Korpela) kirjailijanura on tukevassa laskussa, ja uuden romaanin kirjoittaminen sakkaa pahasti. Pihla (Laura Birn) on kunnianhimoinen näyttelijä kansainvälisen läpimurron kynnyksellä. Kumpikaan ei ole valmis tinkimään urastaan, vaikka parisuhde voi huonommin kuin koskaan.\n\nEero päätyy erikoisiin ja epätoivoisiinkin ratkaisuihin saattaakseen uransa uudelleen lentoon. Määrätietoinen Pihla päättää sovittaa yhteen näyttelijäntyön ja uuden roolinsa tuoreena äitinä. Mutta mahtuvatko suuret suunnitelmat samaan suhteeseen?\n\nTyhjiö on Aleksi Salmenperän kipeällä tavalla riemukas elokuva onnistumisen hinnasta ja epäonnistumisen tuskasta. Se nauraa lämmöllä työnteon ja taiteen totisuudelle sekä hetkille, jolloin toinen ei vain tajua.",
        "Writer Eero (Tommi Korpela) is watching his literary career steadily decline, and his latest novel has ground to a frustrating halt. Pihla (Laura Birn) is an ambitious actress on the verge of an international breakthrough. Neither is willing to compromise on their career, even though their relationship is in worse shape than ever.\n\nDesperate to revive his career, Eero resorts to increasingly unusual measures. Determined to have it all, Pihla sets out to balance her acting career with her new role as a mother. But can two ambitious dreams coexist in the same relationship?\n\nVoid, directed by Aleksi Salmenperä, is a bittersweet and darkly humorous film about the price of success and the pain of failure."
      ),
    }),
    film({
      id: "taste-of-cherry",
      trailer: "https://www.youtube.com/watch?v=ukmYdGwVqPg",
      title: t("Kirsikan maku", "Taste of Cherry"),
      originalTitle: t("Taste of Cherry", "Ta'm e guilass"),
      screening: t(
        "Pe 21.8. klo 20.00–21.45 · Puutarhapiha",
        "Fri 21 Aug 20.00–21.45 · Garden yard",
        "Fre 21 aug 20.00–21.45 · Trädgården"
      ),
      fienta: fienta("tasteofcherry-lapinlahti-film-festival", locale),
      img: imgTasteOfCherry,
      length: "99 min",
      lang: t("persia (farsi)", "Persian (Farsi)", "persiska (farsi)"),
      subs: t("englanti", "English", "engelska"),
      age: "S",
      director: "Abbas Kiarostami",
      country: "Iran",
      year: "1997",
      desc: t(
        "Kuka herra Badii oikeastaan on – epätoivoinen mies vai viisas mies? Maastoautollaan hän kiertää Teheranin ympäristön vaikuttavissa iranilaisissa maisemissa etsien ihmistä, joka suostuisi auttamaan häntä eräässä erityisessä tehtävässä palkkiota vastaan. Jokainen hänen kohtaamansa ihminen suhtautuu ehdotukseen omalla tavallaan.",
        "Who is Mr Badii, really? A desperate man, a wise man? In his 4x4, he roams the majestic Iranian landscapes around Tehran in search of someone willing to lend him a hand in a particular mission, in exchange for a reward. Each person he meets reacts to his proposal in a different way."
      ),
    }),
    film({
      id: "isanpaiva",
      trailer: "https://www.youtube.com/watch?v=JnjDq8QIDu8",
      title: t("Isänpäivä", "Isänpäivä (Father's Day)"),
      originalTitle: "",
      screening: t(
        "Pe 21.8. klo 21.00–23.19 · Kivipiha, ulkoilmanäytös",
        "Fri 21 Aug 21.00–23.19 · Stone yard, open-air screening",
        "Fre 21 aug 21.00–23.19 · Stengården, utomhusvisning"
      ),
      fienta: fienta("isanpaiva-lapinlahti-film-festival", locale),
      img: imgIsanpaiva,
      length: "99 min",
      lang: t("suomi", "Finnish", "finska"),
      subs: t("tekstitys vahvistuu pian", "subtitles confirmed soon", "textningen bekräftas snart"),
      age: "7",
      director: "Aleksi Salmenperä",
      country: t("Suomi", "Finland", "Finland"),
      year: "2026",
      desc: t(
        "Moninkertaisesti palkitun Aleksi Salmenperän (mm. Miehen työ, Jättiläinen, Tyhjiö) Isänpäivä on rehti tragikomedia elämässä pärjäämisen mittareista.\n\nElokuvassa Veikko (Tommi Korpela) auttaa ystäväänsä Tinkeä (Tomi Lindfors) selviämään arjesta palveluyksikössä. Tinke on juonut terveytensä, ja elämää pitää kasassa sen nurjasta puolesta kumpuava huumori. Kun ystävysten bändimenneisyydestä tutun Saimin (Laura Birn) teini-ikäiset kaksoset päättävät ottaa selvää isästään, etsintä johtaa heidät Tinken jäljille. Saimi aikoo estää kaksosia tapaamasta Tinkeä, mutta sotkun keskelle tempautunut Veikko on eri mieltä.\n\nAleksi Salmenperän alustus ennen näytöstä klo 21.10.",
        "From the multi-award-winning director Aleksi Salmenperä, Isänpäivä (Father's Day) is an honest tragicomedy about the measures by which we judge success in life.\n\nVeikko (Tommi Korpela) helps his friend Tinke (Tomi Lindfors) navigate everyday life in a supported housing unit. Tinke has drunk himself into poor health, and what keeps him going is a dark sense of humour born from life's hardships. When Saimi's (Laura Birn) teenage twin daughters, who know Tinke from the friends' former days in a band, decide to find out who their father is, their search leads them to Tinke. Saimi is determined to prevent the twins from meeting him, but Veikko, who finds himself caught in the middle, believes otherwise.\n\nIntroduction by director Aleksi Salmenperä before the screening at 21.10."
      ),
    }),
    film({
      id: "love-lies-bleeding",
      trailer: "https://www.youtube.com/watch?v=AULR_GPteNQ",
      title: "Love Lies Bleeding",
      originalTitle: "",
      screening: t(
        "Pe 21.8. klo 22.00–23.54 · Puutarhapiha",
        "Fri 21 Aug 22.00–23.54 · Garden yard",
        "Fre 21 aug 22.00–23.54 · Trädgården"
      ),
      fienta: fienta("loveliesbleeding-lapinlahti-film-festival", locale),
      img: imgLoveLiesBleeding,
      length: "103 min",
      lang: t("englanti", "English", "engelska"),
      subs: t("ei tekstityksiä", "no subtitles", "ingen textning"),
      age: "16",
      director: "Rose Glass",
      country: t("Yhdysvallat, Iso-Britannia", "USA, UK"),
      year: "2024",
      desc: t(
        "A24-studion ilmiöksi noussut Love Lies Bleeding on äärimmäisen latautunut ja toiminnantäyteinen rakkaustarina, joka sijoittuu nuhjuiseen New Mexicon pikkukaupunkiin vuonna 1989. Vastentahtoinen kuntosalinpyörittäjä Lou (Kristen Stewart) tapaa Las Vegasin neon-valoista haaveilevan kehonrakentaja Jackien (Katy O'Brian) kämäisellä kuntosalilla kasarimusan lyödessä tahtia taustalla. Verkko alkaa kiristyä Loun rikollisen perheen toimien ympärillä, ja pinnan alla kytenyt konflikti Loun rikollispomoisän (Ed Harris) kanssa eskaloituu täysin odottamattomilla tavoilla, sotkien Loun ja Jackien lupaavasti alkaneen yhteisen tulevaisuuden.",
        "The breakout hit from A24, Love Lies Bleeding is a highly charged, action-packed love story set in a rundown small town in New Mexico in 1989. Reluctant gym manager Lou (Kristen Stewart) meets Jackie (Katy O'Brian), an ambitious bodybuilder dreaming of the neon lights of Las Vegas, at a shabby gym pulsing with the soundtrack of the late '80s. As the net tightens around the criminal dealings of Lou's family, the long-simmering conflict with her crime boss father (Ed Harris) escalates in utterly unexpected ways, threatening the promising future Lou and Jackie have begun to build together."
      ),
    }),
    film({
      id: "musta-orfeus",
      trailer: "https://www.youtube.com/watch?v=FbcxQRuOa4o",
      title: t("Musta Orfeus", "Black Orpheus"),
      originalTitle: "Orfeu Negro",
      screening: t(
        "La 22.8. klo 14.45–16.40 · Puutarhapiha",
        "Sat 22 Aug 14.45–16.40 · Garden yard",
        "Lör 22 aug 14.45–16.40 · Trädgården"
      ),
      fienta: fienta("blackorpheus-lapinlahti-film-festival", locale),
      img: imgMustaOrfeus,
      length: "107 min",
      lang: t("portugali", "Portuguese", "portugisiska"),
      subs: t("suomi", "Finnish", "finska"),
      age: "12",
      director: "Marcel Camus",
      country: t("Brasilia, Ranska, Italia", "Brazil, France, Italy"),
      year: "1959",
      desc: t(
        "Cannesin Kultaisen palmun, ulkomaisen elokuvan Oscarin sekä Golden Globe -voittaja Musta Orfeus on jättänyt jälkensä elokuvan historiaan.\n\nNuori kitarataituri Orfeo (Breno Mello) on solminut avioliiton Miran (Lourdes de Oliveira) kanssa. Orfeo kohtaa kuitenkin Rio de Janeiron karnevaaleissa Eurydicen (Marpessa Dawn), todellisen rakkautensa. Esteenä Orfeon ja Eurydicen onnelle ovat kuitenkin moraalisäännöt sekä väkijoukossa vaaniva Kuolema.\n\nMarcel Camus'n Musta Orfeus (1959) on uudelleentulkinta antiikin Orfeus-myytistä. Elokuva perustuu Vinicius de Moraesin näytelmään Orfeo do Carnaval ja tunnetaan erityisesti tunteikkaasta musiikistaan, joka kuljettaa vahvasti elokuvaa.",
        "Marcel Camus's Black Orpheus (1959) is a reinterpretation of the ancient Greek myth of Orpheus. The film is based on Vinicius de Moraes's play Orfeu da Conceição (also known in adaptation as Orfeo do Carnaval). It is especially renowned for its emotionally rich soundtrack, which plays a central role in driving the story forward.\n\nWinner of the Palme d'Or at Cannes, the Academy Award for Best Foreign Language Film, and the Golden Globe for Best Foreign Film, Black Orpheus has secured its place in cinema history."
      ),
    }),
    film({
      id: "birita",
      title: "Birita",
      originalTitle: t("Suomen ensi-ilta", "Finnish premiere"),
      screening: t(
        "La 22.8. klo 17.00–19.10 · Puutarhapiha",
        "Sat 22 Aug 17.00–19.10 · Garden yard",
        "Lör 22 aug 17.00–19.10 · Trädgården"
      ),
      fienta: fienta("birita-lapinlahti-film-festival", locale),
      img: imgBirita,
      length: "90 min",
      lang: t("fääri", "Faroese", "färöiska"),
      subs: t("englanti", "English", "engelska"),
      age: "S",
      director: "Búi Dam",
      country: t("Färsaaret", "Faroe Islands"),
      year: "2026",
      desc: t(
        "Thorshavnissa kokonainen teatterialan perhe valmistautuu William Shakespearen Kuningas Learin esitykseen. Tällä kertaa kaikki on kuitenkin toisin. Kaikki ovat kokoontuneet ympyräksi Birita Mohrin ympärille. Rakastettu näyttelijä ja äiti kärsii nyt vaikeasta Alzheimerin taudista. Kaikki valmistautuvat siihen, joka todennäköisesti tulee olemaan hänen viimeinen roolinsa – hänen poikansa Búi Damin toimiessa ohjaajana.\n\nBúi Dam on myös elokuvan tekijä. Hän kuvaa vaikeaa prosessia läsnä olevalla ja rakastavalla otteella. Hän on onnistunut luomaan elokuvan, joka on yhtä aikaa syvästi koskettava ja täysin vailla sentimentaalisuutta. Birita on elokuva, joka menee suoraan sydämeen – ja jää sinne asumaan.\n\nNäytöksen jälkeen on luvassa 30 minuutin Q&A-keskustelu.",
        "In Thorshavn, an entire family of theatre people are preparing to stage Shakespeare's 'King Lear'. But this time, everything is different. Everyone is gathered in a circle around Birita Mohr. The beloved actress and mother is now suffering from severe Alzheimer's. Everyone is preparing for what will probably be her last role – with her son Búi Dam as director.\n\nBúi Dam is also behind the film, which depicts the difficult process in a present and loving way. And he has succeeded in creating a film that is both deeply moving and completely unsentimental. 'Birita' is a film that goes straight to the heart and stays there.\n\nThe screening is followed by a 30 minute Q&A session."
      ),
    }),
    film({
      id: "embrace-of-the-serpent",
      trailer: "https://www.youtube.com/watch?v=uymNkBuR-SY",
      title: "Embrace of the Serpent",
      originalTitle: "El abrazo de la serpiente",
      screening: t(
        "La 22.8. klo 19.30–21.45 · Puutarhapiha",
        "Sat 22 Aug 19.30–21.45 · Garden yard",
        "Lör 22 aug 19.30–21.45 · Trädgården"
      ),
      fienta: fienta("embraceoftheserpent-lapinlahti-film-festival", locale),
      img: imgEmbrace,
      length: "125 min",
      lang: t("espanja", "Spanish", "spanska"),
      subs: t("englanti", "English", "engelska"),
      age: "16",
      director: "Ciro Guerra",
      country: t(
        "Kolumbia, Venezuela, Argentiina",
        "Colombia, Venezuela, Argentina"
      ),
      year: "2015",
      desc: t(
        "Embrace of the Serpent kertoo eeppisen tarinan ensimmäisestä kontaktista, kohtaamisesta, lähentymisestä, petoksesta ja lopulta elämän rajat ylittävästä ystävyydestä Karamakaten, amazonialaisen shamaanin ja kansansa viimeisen eloonjääneen, sekä kahden tiedemiehen välillä. Neljän vuosikymmenen aikana näistä tutkijoista tulee ensimmäiset ihmiset, jotka matkustavat Luoteis-Amazonin halki etsiessään esi-isien tietoa.\n\nElokuva on saanut inspiraationsa Kolumbian Amazonin ensimmäisten tutkimusmatkailijoiden päiväkirjoista: saksalaisen etnologin Theodor Koch-Grünbergin ja yhdysvaltalaisen kasvitieteilijän Richard Evans Schultesin kirjoituksista.",
        "Embrace of the Serpent tells the epic story of the first contact, encounter, approach, betrayal and, eventually, life-transcending friendship, between Karamakate, an Amazonian shaman, last survivor of his people, and two scientists that, over the course of 40 years, become the first men to travel the Northwest Amazon in search of ancestral knowledge. Inspired by the journals of the first explorers of the Colombian Amazon, German ethnologist Theodor Koch-Grunberg and American botanist Richard Evans Schultes."
      ),
    }),
    film({
      id: "turisti",
      trailer: "https://www.youtube.com/watch?v=skQk2nVaAsI",
      title: t("Turisti", "Force Majeure"),
      originalTitle: t("Force Majeure", "Turist"),
      screening: t(
        "La 22.8. klo 21.00–23.25 · Kivipiha, ulkoilmanäytös",
        "Sat 22 Aug 21.00–23.25 · Stone yard, open-air screening",
        "Lör 22 aug 21.00–23.25 · Stengården, utomhusvisning"
      ),
      fienta: fienta("forcemajeure-lapinlahti-film-festival", locale),
      img: imgTuristi,
      length: "120 min",
      lang: t(
        "ruotsi, norja, englanti, ranska",
        "Swedish, Norwegian, English, French", "svenska, norska, engelska, franska"
      ),
      subs: t("englanti", "English", "engelska"),
      age: "12",
      director: "Ruben Östlund",
      country: t(
        "Ruotsi, Ranska, Tanska, Norja",
        "Sweden, France, Denmark, Norway"
      ),
      year: "2014",
      desc: t(
        "Onnellinen perhe, Ebba, Tomas ja heidän lapsensa Vera ja Harry, ovat hiihtomatkalla Alpeilla. Yllättäen lumivyöry iskee ravintolaan, jossa he ovat syömässä. Ihmiset pakenevat joka suuntaan, ja Tomas juoksee henkensä edestä. Ebba seisoo lasten kanssa ja huutaa hänelle paniikissa.\n\nTapahtuman jälkeen perheen sisäinen jännite on äärimmillään. Vaikka Tomas yrittää pyytää anteeksi pelkurimaista käytöstään, Ebba torjuu hänet. Kun Tomas ymmärtää, miten tilanne vaikuttaa Veraan ja Harryyn, hän saa mahdollisuuden palauttaa asemansa vastuullisena isänä. Vaikka kaikki näyttävät helpottuneilta, jää epäselväksi, onko ristiriita todella ratkaistu ja mitä muita haasteita perhe vielä kohtaa.",
        "A happy family, Ebba, Tomas and their children Vera and Harry are on a skiing trip in the Alps. Unexpectedly, an avalanche hits the restaurant where they are eating. People flee in all directions, Tomas runs for his life. Ebba screams at him in panic as she stands by the children.\n\nAfter the incident, the tension in the family is extreme. Despite Tomas efforts to apologize for his cowardice, Ebba rejects him. When she realizes the effect this is having on Vera and Harry, Tomas gets a chance to restore his role as the responsible father. While everyone seems relieved, it remains unclear whether the dilemma has actually been resolved, and which other challenges await."
      ),
    }),
    film({
      id: "the-ugly-stepsister",
      trailer: "https://www.youtube.com/watch?v=5vZ1_Yxjwzs",
      title: "The Ugly Stepsister",
      originalTitle: "Den stygge stesøsteren",
      screening: t(
        "La 22.8. klo 22.00–23.59 · Puutarhapiha",
        "Sat 22 Aug 22.00–23.59 · Garden yard",
        "Lör 22 aug 22.00–23.59 · Trädgården"
      ),
      fienta: fienta("theuglystepsister-lapinlahti-film-festival", locale),
      img: imgUglyStepsister,
      length: "109 min",
      lang: t("norja", "Norwegian", "norska"),
      subs: t("englanti", "English", "engelska"),
      age: "16",
      director: "Emilie Blichfeldt",
      country: t(
        "Norja, Ruotsi, Tanska, Puola",
        "Norway, Sweden, Denmark, Poland"
      ),
      year: "2025",
      desc: t(
        "The Ugly Stepsister on synkkä ja kieroutunut versio klassisesta Tuhkimo-tarinasta. Elokuva seuraa Elviraa, joka valmistautuu voittamaan prinssin suosion hinnalla millä hyvänsä. Valtakunnassa, jossa kauneus on armotonta kilpailua, Elvira kilpailee hurmaavan Agnesin kanssa päästäkseen tanssiaisten kuningattareksi.",
        "A sinister twist on the classic Cinderella story, The Ugly Stepsister follows Elvira as she prepares to earn the prince's affection at any cost. In a kingdom where beauty is a brutal business, Elvira will compete with the beautiful and enchanting Agnes to become the belle of the ball."
      ),
    }),
    film({
      id: "taistelu-lapinlahdesta",
      trailer: "https://www.youtube.com/watch?v=pLELSwS3I7k",
      title: t("Taistelu Lapinlahdesta", "The Battle for Lapinlahti"),
      originalTitle: t("", "Taistelu Lapinlahdesta"),
      screening: t(
        "Su 23.8. klo 14.30–16.25 · Puutarhapiha",
        "Sun 23 Aug 14.30–16.25 · Garden yard",
        "Sön 23 aug 14.30–16.25 · Trädgården"
      ),
      fienta: fienta("taistelulapinlahdesta-lapinlahti-film-festival", locale),
      img: imgTaistelu,
      length: "75 min",
      lang: t("suomi", "Finnish", "finska"),
      subs: t("englanti", "English", "engelska"),
      age: "7",
      director: "Klaus Welp",
      country: t("Suomi", "Finland"),
      year: "2026",
      desc: t(
        "Taistelu Lapinlahdesta paljastaa, millaisia käänteitä historiallisen Lapinlahden sairaala-alueen puolustustaistelussa on koettu. Dokumenttiohjaaja Klaus Welp seurasi kameransa takaa kymmenen vuoden ajan Lapinlahti-liikkeen ponnisteluja, pettymyksiä, onnistumisia ja juhlan aiheita sekä ennen kaikkea yhteisön sinnikästä yhteishenkeä ja voimaa. Itsekin Lapinlahti-yhteisöön kuuluva Welp pääsi seuraamaan tapahtumia sisältäpäin harvinaiselta aitiopaikalta.\n\nDokumentti saa tragikoomisia sävyjä, kun henkilögalleriaan marssii kuivakkaita virkahenkilöitä ja aluetta havittelevia kiinteistöbisneksen edustajia. Voittavatko grynderit vai Lapinlahti, raha vai inhimillisyys, vallanhalu vai demokratia? Ja kuinka pormestari liittyy asiaan – tai muumit?\n\nNäytöksen jälkeen on luvassa 30 minuutin Q&A-keskustelu.",
        "The Battle for Lapinlahti reveals one of Helsinki's most significant civic movements, and the dramatic twists and turns in the struggle to protect the historic Lapinlahti area. The film follows how a neglected former psychiatric hospital is transformed by its new tenants into a flourishing center for arts, culture, and mental well-being. Documentary filmmaker Klaus Welp spent ten years behind the lens, capturing the efforts, disappointments, triumphs, and celebrations of the Lapinlahti movement.\n\nThe documentary takes on tragicomic tones as dry officials and corporate developers enter the scene. Will the developers or Lapinlahti prevail? Money or humanity? Lust for power or democracy? And what is the Mayor's role – or the Moomins'?\n\nThe screening is followed by a 30 minute Q&A session."
      ),
    }),
    film({
      id: "christiania",
      trailer: "https://www.youtube.com/watch?v=vvAi0qO0qiE",
      title: "Christiania",
      originalTitle: t("Suomen ensi-ilta", "Finnish premiere"),
      screening: t(
        "Su 23.8. klo 16.45–18.27 · Puutarhapiha",
        "Sun 23 Aug 16.45–18.27 · Garden yard",
        "Sön 23 aug 16.45–18.27 · Trädgården"
      ),
      fienta: fienta("christiania-lapinlahti-film-festival", locale),
      img: imgChristiania,
      length: "94 min",
      lang: t("tanska", "Danish", "danska"),
      subs: t("englanti", "English", "engelska"),
      age: "12",
      director: "Karl Friis Forchhammer",
      country: t("Tanska", "Denmark"),
      year: "2026",
      desc: t(
        "Vuonna 1971 sadat nuoret valtasivat hylätyt sotilaskasarmit Bådsmandsstrædellä Kööpenhaminan sydämessä. Hetkessä syntyi Christiania: radikaali vapauden ja yhteisöllisyyden kokeilu, josta muodostui todellinen vaihtoehto valtavirran yhteiskunnalle.\n\nChristiania on yksi maailman villeimmistä yhteiskunnallisista kokeiluista. Yli 50 vuoden suurten unelmien, vahvan tupakan ja anarkististen ihanteiden jälkeen värikäs kaupunginosa saa viimein elokuvan, jonka sen myrskyisä historia ansaitsee. Christiania on rehellinen, omalaatuinen ja humoristinen dokumenttielokuva, joka elävän ja ainutlaatuisen arkistomateriaalin kautta jäljittää tarinan sen alkuvaiheista nykypäivään ja maalaa muotokuvan jatkuvassa muutoksessa olevasta pienoismaailmasta.",
        "In 1971, hundreds of young people occupied the abandoned military barracks on Bådsmandsstræde in the heart of Copenhagen. In an instant, Christiania was born: a radical experiment in freedom and community that became a genuine alternative to mainstream society.\n\nChristiania is one of the world's wildest social experiments. After more than 50 years of big dreams, strong tobacco and anarchic ideals, the colourful neighbourhood finally gets the film its turbulent history deserves. Christiania is an honest, offbeat and humorous documentary that, through vivid and extraordinary archival material, traces the story from its origins to the present day, painting a portrait of a microcosm in constant transformation."
      ),
    }),
    film({
      id: "and-then-we-danced",
      trailer: "https://www.youtube.com/watch?v=n25XEhQ6764",
      title: "And Then We Danced",
      originalTitle: "",
      screening: t(
        "Su 23.8. klo 18.45–20.43 · Puutarhapiha",
        "Sun 23 Aug 18.45–20.43 · Garden yard",
        "Sön 23 aug 18.45–20.43 · Trädgården"
      ),
      fienta: fienta("andthenwedanced-lapinlahti-film-festival", locale),
      img: imgAndThenWeDanced,
      length: "113 min",
      lang: t("georgia", "Georgian", "georgiska"),
      subs: t("suomi, ruotsi", "Finnish, Swedish", "finska, svenska"),
      age: "12",
      director: "Levan Akin",
      country: t("Georgia, Ruotsi, Ranska", "Georgia, Sweden, France"),
      year: "2019",
      desc: t(
        "Merab tanssii Georgian kansallisessa tanssiryhmässä partnerinsa Maryn kanssa ja unelmoi paikasta pääryhmässä. Hänen elämänsä mullistuu, kun karismaattinen Irakli liittyy ryhmään ja alkaa kilpailla samasta paikasta, herättäen myös uusia tunteita Merabissa. Merab on ennen pitkää päätöksen edessä: seuratako sydäntänsä ja lähteä vanhoillisesta maailmasta jossa hän on kasvanut ja samalla riskeerata kaikki minkä vuoksi hän on taistellut.",
        "Merab dances in a Georgian national dance ensemble alongside his partner, Mary, and dreams of earning a place in the company's leading troupe. His life is turned upside down when the charismatic Irakli joins the ensemble, competing for the same coveted spot while also awakening unexpected feelings in Merab. Before long, Merab faces the life-changing decision to follow his heart and leave behind the conservative world in which he was raised, risking everything he has worked so hard to achieve."
      ),
    }),
    film({
      id: "aftersun",
      trailer: "https://www.youtube.com/watch?v=vXKcWRu8K_U",
      title: "Aftersun",
      originalTitle: t("Aftersun – päivämme auringossa", ""),
      screening: t(
        "Su 23.8. klo 21.00–23.00 · Kivipiha, ulkoilmanäytös",
        "Sun 23 Aug 21.00–23.00 · Stone yard, open-air screening",
        "Sön 23 aug 21.00–23.00 · Stengården, utomhusvisning"
      ),
      fienta: fienta("aftersun-lapinlahti-film-festival", locale),
      img: imgAftersun,
      length: "102 min",
      lang: t("englanti", "English", "engelska"),
      subs: t("suomi, ruotsi", "Finnish, Swedish", "finska, svenska"),
      age: "7",
      director: "Charlotte Wells",
      country: t("Iso-Britannia, Yhdysvallat", "UK, USA"),
      year: "2023",
      desc: t(
        "Aftersun – päivämme auringossa on kriitikoiden ylistämä Charlotte Wellsin debyyttielokuva vanhemmuudesta, muistojen ohimenevyydestä ja aikuiseksi kasvamisesta. Cannesin elokuvajuhlilla huomiota herättäneen elokuvan päärooleissa loistavat Paul Mescal ja Francesca Corio, joiden kemia nuorena isänä ja tyttärenä on käsinkosketeltavan aitoa. Paul Mescal huomioitiin roolistaan parhaan miespääosan Oscar-ehdokkuudella.\n\nEronnut isä (Paul Mescal) lähtee pienen tyttärensä kanssa vaatimattomalle pakettimatkalle, jossa he jakavat ilon auringosta, uima-altaasta ja yhdessäolosta. Muistikuvia kuitenkin värittää selittämätön melankolia, kun Sophie kaksikymmentä vuotta myöhemmin ajattelee yhteistä lomaa. Kuka olikaan se isä, jonka Sophie luuli tuntevansa?",
        "Aftersun is Charlotte Wells' critically acclaimed debut feature about parenthood, the fleeting nature of memories, and the journey to adulthood. The film, which drew widespread attention at the Cannes Film Festival, stars Paul Mescal and Francesca Corio, whose chemistry as a young father and daughter feels deeply authentic. Paul Mescal received an Academy Award nomination for Best Actor for his performance.\n\nA divorced father (Paul Mescal) takes his young daughter on a modest holiday, where they share the simple joys of sunshine, the swimming pool, and spending time together. These memories are tinged with an unexplained melancholy as Sophie looks back on the vacation twenty years later. Who was the father Sophie thought she knew?"
      ),
    }),
  ];

  // Lyhäriblokki (Nordic Frames) — ShortFilm-kortin kentät
  // Lyhäriblokin yksittäisten elokuvien maat ja sisältövaroitukset
  const CO = {
    FI: t("Suomi", "Finland", "Finland"),
    SE: t("Ruotsi", "Sweden", "Sverige"),
    DK: t("Tanska", "Denmark", "Danmark"),
    NO: t("Norja", "Norway", "Norge"),
    IS: t("Islanti", "Iceland", "Island"),
    FO: t("Färsaaret", "Faroe Islands", "Färöarna"),
    ZA: t("Etelä-Afrikka", "South Africa", "Sydafrika"),
  };
  const WARN = {
    seksi: t("seksi", "sex", "sex"),
    ahdistus: t("ahdistus", "anxiety", "ångest"),
    vakivalta: t("väkivalta", "violence", "våld"),
    paihteet: t("päihteiden käyttö", "substance use", "droganvändning"),
  };
  const rating = (age, warn) =>
    warn?.length ? `${age} (${warn.map((w) => WARN[w]).join(", ")})` : `${age}`;

  // Yksittäinen lyhytelokuva blokin sisällä
  const sf = (o) => ({
    title: o.title,
    originalTitle: o.orig ?? null,
    director: o.director,
    meta: `${o.co.map((c) => CO[c]).join(", ")} ${o.year} · ${o.len}`,
    ageLimit: rating(o.age, o.warn),
    synopsis: o.synopsis,
  });

  // Lyhäriblokkien tekstitys — kaikissa esityksissä englanninkielinen tekstitys
  const SHORTS_SUBS = t(
    "englanti (kaikki elokuvat)",
    "English (all films)",
    "engelska (alla filmer)"
  );
  const SHORTS_LIST_TITLE = t("Lyhytelokuvat", "Short films", "Kortfilmer");

  const shortBlock = (o) => ({
    id: o.id,
    fields: {
      title: o.title,
      originalTitle: o.subtitle ?? "",
      screening: o.screening,
      fientaUrl: o.fienta,
      fientaLabel: FIENTA_LABEL,
      artwork: artwork(o.img),
      length: o.films
        ? t(
            `${o.films} lyhytelokuvaa`,
            `${o.films} short films`,
            `${o.films} kortfilmer`
          )
        : "",
      textTitle: TEXT,
      textlanguage: SHORTS_SUBS,
      ageLimitTitle: AGE,
      ageLimit: o.age,
      filmDescription: desc(o.id, o.desc),
      // Blokin sisältämät elokuvat — ShortFilm.jsx renderöi listana
      shortsTitle: SHORTS_LIST_TITLE,
      shorts: o.list ?? [],
      ageLimitLabel: AGE,
      directedLabel: DIRECTED,
      productionCompany: "Nordic Frames",
      country: "",
    },
  });

  const qaShorts = t(
    "Näytöksen jälkeen on luvassa 30 minuutin Q&A-keskustelu.",
    "The short films are followed by a 30 minute Q&A session."
  );

  const shortFilms = [
    shortBlock({
      id: "cold-plunge",
      title: "Nordic Frames: Cold Plunge",
      screening: t(
        "Pe 21.8. klo 15.30–17.30 · Auditorio",
        "Fri 21 Aug 15.30–17.30 · Auditorium",
        "Fre 21 aug 15.30–17.30 · Auditoriet"
      ),
      fienta: fienta("nordic-frames-cold-plunge", locale),
      img: imgColdPlunge,
      films: 5,
      age: t("16 (seksi, ahdistus)", "16 (sex, anxiety)"),
      desc: t(
        "Kuumuus tasapainossa raikkaan ilman kanssa – kokoelma lyhytelokuvia, jotka yhdessä peilaavat saunomisen kokemusta.\n\n" +
          qaShorts,
        "Heat bursts smoothed out into breaths of fresh air – a selection of short films emulating the sauna experience.\n\n" +
          qaShorts
      ),
      list: [
        sf({ title: "Mixed Sauna",
          orig: "Sekasauna",
          co: ["FI"], year: "2026", len: "15 min", age: "S",
          director: "Juuso Timonen",
          synopsis: "Introvert Mikko is anxious that he won't be able to come out of his shell during the weekend at his relatively new spouse's cottage. His spouse Hanna is certain that Mikko will make a great first impression on her chosen family. When it's time for the sauna, Mikko has not figured out the sauna dress code of this new social bubble — and realizes he's the only one wearing swimwear." }),
        sf({ title: "No One Owns You",
          orig: "Dig Äger Ingen",
          co: ["FI"], year: "2025", len: "20 min", age: "S",
          director: "Agnes Koskinen",
          synopsis: "18-year-old Alicia, a competitive swimmer, spends a day at her summer house during the peak of summer. She swims over to another island and finds Mira, a charming and confusing girl. The meeting ignites a crisis inside Alicia's mind, and now she has to figure out in what direction she wants her life to go." }),
        sf({ title: "Sauna Sickness",
          co: ["SE"], year: "2026", len: "15 min", age: "16",
          warn: ["seksi"],
          director: "Malin Barr",
          synopsis: "Struggling to maintain the peace she mistakes for love, Cleo's steamy New Year's Eve plans fissure into a chilling nightmare." }),
        sf({ title: "Maybe in March",
          orig: "Måske i Marts",
          co: ["DK"], year: "2025", len: "25 min", age: "12",
          warn: ["ahdistus"],
          director: "Mikkel Bjørn Kehlert",
          synopsis: "Somewhere in rural Denmark, a house awaits its farewell. A family holds its breath. And something is slipping away." }),
        sf({ title: "Sauna People",
          orig: "Saunojat",
          co: ["FI"], year: "2025", len: "5 min", age: "S",
          director: "Sanna Taikina",
          synopsis: "In this hand-drawn 2D pencil animation, the First Sauna arrives on Earth to give birth to the Sauna People. Clashing customs spark conflict in the birthing sauna — but who, in the end, has the right to be a real sauna person?" }),
      ],
    }),
    shortBlock({
      id: "vessel-views",
      title: "Nordic Frames: Vessel Views",
      screening: t(
        "Pe 21.8. klo 18.00–20.00 · Auditorio",
        "Fri 21 Aug 18.00–20.00 · Auditorium",
        "Fre 21 aug 18.00–20.00 · Auditoriet"
      ),
      fienta: fienta("nordic-frames-vessel-views", locale),
      img: imgVesselViews,
      films: 6,
      age: t("16 (väkivalta, ahdistus, seksi)", "16 (violence, anxiety, sex)"),
      desc: t(
        "Tutkimusmatkoja kehollisuuteen ja yhteyksiin – siihen, mikä meitä kaikkia yhdistää: kehoon, jossa elämme. Kehon ja mielen, tutun ja vieraan rajapinnoilla liikkuvat elokuvalliset tutkimusretket kysyvät, millaisia näkökulmia aistiva kehomme voi meille avata.\n\n" +
          qaShorts,
        "Experiments on corporeality and connections, what we all have in common — the vessel we live in. Somewhere between the body and mind, familiar and unfamiliar, cinematic explorations of what perspectives are possible through our sensing bodies.\n\n" +
          qaShorts
      ),
      list: [
        sf({ title: "Awooga!",
          co: ["FI"], year: "2025", len: "4 min", age: "16",
          warn: ["seksi"],
          director: "Sofia Liukonen",
          synopsis: "Popette is about to perform a striptease on the pole." }),
        sf({ title: "Flashback – Monstrous Memories",
          orig: "Flashback – Monstrøse minder",
          co: ["NO", "DK"], year: "2025", len: "17 min", age: "12",
          warn: ["ahdistus"],
          director: "Momo Mentha",
          synopsis: "A hybrid documentary about dehumanising patients in Danish psychiatry. The film recreates a real experience where what should be a normal part of caring for someone admitted to a psychiatric hospital becomes an act of violence." }),
        sf({ title: "Bodyrave",
          co: ["FI"], year: "2025", len: "4 min", age: "16",
          warn: ["ahdistus"],
          director: "Harri Connell, Felix Järvenpää, Leo Lindgren",
          synopsis: "A body wakes up in a mysterious room and begins experiencing processes that have always been present but never noticed – until now." }),
        sf({ title: "Mother Creature",
          co: ["FO", "SE"], year: "2025", len: "30 min", age: "12",
          warn: ["ahdistus"],
          director: "Maria Tórgarð",
          synopsis: "A daughter attempts to pull the monster of her childhood out from under the bed in an original, deeply personal and creative film about her mother's mental illness." }),
        sf({ title: "Limerence",
          orig: "Limerenssi",
          co: ["FI"], year: "2026", len: "23 min", age: "16",
          warn: ["vakivalta"],
          director: "Jasmin Gummerus",
          synopsis: "Fresh out of a relationship, Lotta develops a one-sided crush on body modification artist Lennart." }),
        sf({ title: "Out of Order",
          co: ["FI"], year: "2025", len: "2 min", age: "12",
          warn: ["seksi"],
          director: "Antti Tuomikoski",
          synopsis: "The male gaze turns around." }),
      ],
    }),
    shortBlock({
      id: "i-love-my-car",
      title: "Nordic Frames: I Love My Car",
      screening: t(
        "La 22.8. klo 14.00–15.45 · Auditorio",
        "Sat 22 Aug 14.00–15.45 · Auditorium",
        "Lör 22 aug 14.00–15.45 · Auditoriet"
      ),
      fienta: fienta("nordic-frames-i-love-my-car", locale),
      img: imgILoveMyCar,
      films: 7,
      age: t("12 (seksi, ahdistus)", "12 (sex, anxiety)"),
      desc: t(
        "Hyvän tuulen tarinoita ihmisistä autoissa: vauhdilla eteenpäin, hidastellen, joskus jumissa, joskus vailla huolta siitä, minne tie vie. Tärkeintä on itse matka.\n\n" +
          qaShorts,
        "Lighthearted tales of people in cars: moving fast, moving slow, sometimes stuck, sometimes without a worry in the world where one's going. It truly is the journey that matters.\n\n" +
          qaShorts
      ),
      list: [
        sf({ title: "Puolanka Pussy Rally",
          co: ["FI"], year: "2026", len: "5 min", age: "12",
          warn: ["seksi"],
          director: "Inka Achté, Einari Paakkanen",
          synopsis: "Puolanka, a tiny village in Northern Finland, is famous for its population decline — and for its dark sense of humor about it. Teenage boys celebrate their new driver's licences by endlessly circling the same few streets, while an older generation of local gents has parked itself permanently at the petrol station café. The only mystery that seems unsolved: where have all the women gone?" }),
        sf({ title: "Broken Down",
          orig: "De Nedbrutna",
          co: ["SE", "DK"], year: "2025", len: "15 min", age: "12",
          warn: ["ahdistus"],
          director: "Victor Cornelius",
          synopsis: "On a ridiculously long and straight road in the middle of nowhere, a couple's car breaks down. As they wait for roadside assistance, their true selves are unmasked, leading to a breakdown of an entirely different kind." }),
        sf({ title: "Gravity Racer",
          co: ["NO"], year: "2025", len: "5 min", age: "S",
          director: "Finn Walther",
          synopsis: "A fearless four-year-old sets out to conquer the steepest hill in town with his homemade Gravity Racer, but as bravery meets gravity, he's faced with the consequences of his decision." }),
        sf({ title: "Fiddler's Green",
          orig: "Matkalla sukulaisten luo Haminaan",
          co: ["FI"], year: "2025", len: "11 min", age: "S",
          director: "Juha Koiranen",
          synopsis: "A couple travelling to visit relatives — like we all, sooner or later." }),
        sf({ title: "Respite",
          co: ["NO"], year: "2026", len: "17 min", age: "7",
          warn: ["ahdistus"],
          director: "Mads Toft Hansen, Alma-Oline Weitling",
          synopsis: "A young Danish man travels to Norway to clear out the house of his late mother, confronting the remains and the place. As he moves through unfamiliar surroundings, the film unfolds a story about family tensions, loss and belonging." }),
        sf({ title: "I should be there, but I'm here",
          orig: "Mun pitää olla tuol ja mä oon tässä",
          co: ["FI"], year: "2025", len: "7 min", age: "S",
          director: "Oona Julia Pennanen",
          synopsis: "Voice messages about being late. The hurrying figures battle against time. Some make it, while others must accept the closed gates." }),
        sf({ title: "The Beauty of Automobiles",
          orig: "Puskee veemäiseen paikkaan",
          co: ["FI"], year: "2026", len: "6 min", age: "S",
          director: "Jukka Kärkkäinen",
          synopsis: "Intimate moment between a father and son — one night, one car ride, one problem." }),
      ],
    }),
    shortBlock({
      id: "borderland",
      title: "Nordic Frames: Borderland",
      screening: t(
        "La 22.8. klo 16.00–18.03 · Auditorio",
        "Sat 22 Aug 16.00–18.03 · Auditorium",
        "Lör 22 aug 16.00–18.03 · Auditoriet"
      ),
      fienta: fienta("nordic-frames-borderland", locale),
      img: imgBorderland,
      films: 6,
      age: t("16 (ahdistus, väkivalta)", "16 (anxiety, violence)"),
      desc: t(
        "Jonkin kynnyksellä, katse menneessä ja tulevassa – tiedämmekö, missä olemme? Elokuvia rajojen tältä ja tuolta puolen, kurkistuksia erilaisiin elämiin, toiveisiin ja pelkoihin. Häikäiseviä näkökulmia ajankohtaisiin aiheisiin ja ihmisyyden perimmäisiin kysymyksiin.\n\n" +
          qaShorts,
        "On the brink of something, looking back and forth, are we aware where we are? Films on this and the other side of borders, offering insights into different lives, hopes and fears. Dazzling takes on topical matters, dealing with fundamental questions of humanity.\n\n" +
          qaShorts
      ),
      list: [
        sf({ title: "Ritardando",
          co: ["DK"], year: "2025", len: "11 min", age: "16",
          warn: ["ahdistus"],
          director: "Selma Sunniva",
          synopsis: "While the bombs are falling in a war-torn Copenhagen, the harpist David is practicing scales in his barricaded apartment. He believes in art, not war." }),
        sf({ title: "28 Days Left",
          orig: "Tj28",
          co: ["FI"], year: "2026", len: "20 min", age: "16",
          warn: ["ahdistus", "vakivalta"],
          director: "Yasmin Najjar",
          synopsis: "A Finnish-Palestinian woman, Amani Lillak, is completing her voluntary military service in the Finnish Army's medical corps. During a final combat exercise, she learns that the crisis in her father's homeland has further escalated, while tensions within the medical corps reach breaking point." }),
        sf({ title: "Equal Dust",
          orig: "Elämä ja yö",
          co: ["FI"], year: "2025", len: "14 min", age: "12",
          warn: ["ahdistus"],
          director: "Jani Peltonen",
          synopsis: "In November 1983, a camera test was filmed in Helsinki: a 12-minute uninterrupted tracking shot through a nocturnal cityscape. At the same time, NATO's Able Archer 83 exercise is underway in Europe — a scenario of how a nuclear war is believed to begin. The film intervenes in that scenario and turns the camera test into a cinematic land survey of the imagined destruction." }),
        sf({ title: "175",
          co: ["SE"], year: "2025", len: "11 min", age: "16",
          warn: ["ahdistus", "vakivalta"],
          director: "Sepehr Nosrati",
          synopsis: "Two revolutionaries kidnap the child of a Swedish politician to prevent a vote on a draconian law that would allow the state to strip people of their citizenship. When the police arrive at the Persian restaurant where the kid is being held, the situation begins to spiral out of control." }),
        sf({ title: "Fear Fokol",
          co: ["ZA", "SE"], year: "2025", len: "15 min", age: "12",
          warn: ["vakivalta"],
          director: "Tuva Björk",
          synopsis: "A nightly ride into the fears and anxieties of Johannesburg's wealthy inhabitants, following the work of the private security guards hired to protect them. The illusion of security slowly dissolves as we dig into a fragile climate of inequality, paranoia and masculinity in crisis." }),
        sf({ title: "Borderline",
          orig: "På Grensa",
          co: ["FI", "NO", "SE"], year: "2025", len: "12 min", age: "7",
          warn: ["vakivalta"],
          director: "Johannes Vang",
          synopsis: "A Norwegian customs officer, a Finnish poacher and a mysterious Swedish woman meet at the border between their homelands, becoming entangled in a conflict over laws, language and prejudice." }),
      ],
    }),
    shortBlock({
      id: "mothers-figures",
      title: "Nordic Frames: Mothers' Figures",
      screening: t(
        "La 22.8. klo 18.20–20.21 · Auditorio",
        "Sat 22 Aug 18.20–20.21 · Auditorium",
        "Lör 22 aug 18.20–20.21 · Auditoriet"
      ),
      fienta: fienta("nordic-frames-mothers-figures", locale),
      img: imgMothersFigures,
      films: 6,
      age: t("16 (seksi, ahdistus, väkivalta)", "16 (sex, anxiety, violence)"),
      desc: t(
        "Äitihahmot ottavat muotoaan ja etsivät tapoja toimia vanhempina suunnannäyttäjinä. Rakkautta, kipua ja naurua tulvillaan oleva kokonaisuus on kunnianosoitus äitihahmoille kaikista elämän kolkista.\n\n" +
          qaShorts,
        "Motherly figures taking shape, figuring out ways to act as elders. Full of love, pain and laughter, this is a homage to mother figures from all walks of life.\n\n" +
          qaShorts
      ),
      list: [
        sf({ title: "Family",
          orig: "Familj",
          co: ["SE"], year: "2025", len: "14 min", age: "12",
          warn: ["ahdistus"],
          director: "Clara Vida",
          synopsis: "A man living in a caravan, a woman in social services, and a boy without kidneys. Three fragmented individuals, once a unit, reunite in a beautiful, melancholic and raw confrontation with a family that no longer exists." }),
        sf({ title: "Baby Blues",
          co: ["NO"], year: "2025", len: "10 min", age: "S",
          director: "Helen Komini Knudsen",
          synopsis: "Sleep-deprived new mom Marte embarks on her very first walk alone with her three-week-old daughter. The goal seems simple — a latte at a café and a brief moment of feeling normal. But along the way, small and large incidents turn into potential threats she must avoid to keep the baby asleep." }),
        sf({ title: "Without Kelly",
          co: ["SE"], year: "2025", len: "15 min", age: "16",
          warn: ["seksi"],
          director: "Lovisa Sirén",
          synopsis: "Forced to leave her baby daughter with the child's father, young mother Esther is caught in desperation and longing. Through the night she chases touch and comfort, seeking ways to hold on to who she loves the most." }),
        sf({ title: "A Part Unwritten",
          orig: "Vuorosanat",
          co: ["FI"], year: "2025", len: "18 min", age: "7",
          warn: ["ahdistus"],
          director: "Arman Zafari",
          synopsis: "Niina, a struggling drama teacher, receives an unusual request from her boss: to deliver a eulogy at his father's funeral in his place. Desperate for an opportunity to perform, she finds herself considering the absurd proposition." }),
        sf({ title: "SON",
          co: ["SE"], year: "2025", len: "13 min", age: "12",
          warn: ["ahdistus"],
          director: "Leona Cauklija",
          synopsis: "A mother sees her homeless son's tags wherever she goes. She interprets his signatures as signals to her and wants to respond. She starts writing SON under his tags. One day, she suddenly gets a reply." }),
        sf({ title: "Overtime",
          co: ["FI"], year: "2025", len: "11 min", age: "12",
          warn: ["vakivalta"],
          director: "Siiri Halko",
          synopsis: "Finland prospers, but with a strict rule: citizens must leave at 70. Annastiina Kankaanrinta, a once-powerful politician, played a key role in creating the Lex 70 law. Now at her own 70th birthday, she must face her own state-approved farewell." }),
      ],
    }),
    shortBlock({
      id: "generation-zeitgeist",
      title: "Nordic Frames: Generation Zeitgeist",
      screening: t(
        "Su 23.8. klo 15.00–17.00 · Auditorio",
        "Sun 23 Aug 15.00–17.00 · Auditorium",
        "Sön 23 aug 15.00–17.00 · Auditoriet"
      ),
      fienta: fienta("nordic-frames-generation-zeitgeist", locale),
      img: imgGenerationZeitgeist,
      films: 6,
      age: t("12 (ahdistus, väkivalta, päihteiden käyttö)", "12 (anxiety, violence, substance use)"),
      desc: t(
        "Sukupolvia yhdistäviä kysymyksiä ja nuoria maailmankuvia. Osa tuntuu ajattomilta, osa juuri tähän aikaan kuuluvilta. Zeitgeist – viimeisellä aakkoskirjaimella nimetyn sukupolven ääntä. Elokuvia siitä, mikä muovaa tapaamme katsoa maailmaa.\n\n" +
          qaShorts,
        "Generational questions and youthful worldviews. Some seem evergreen, some specific to this day and age. Zeitgeist, a generation marked by the last letter of the alphabet. Films diving into what forms our ways of looking at the world.\n\n" +
          qaShorts
      ),
      list: [
        sf({ title: "KIELO",
          co: ["FI"], year: "2025", len: "4 min", age: "S",
          director: "Janina Rajakangas, Sinem Kayacan",
          synopsis: "Kielo finds it hard to sit still in class. She takes a break venturing into the corridors of her imagination." }),
        sf({ title: "Major Bag Alert",
          co: ["FI"], year: "2026", len: "15 min", age: "12",
          warn: ["paihteet"],
          director: "Viljami Penttilä",
          synopsis: "2005. Gossip around the school is that 16-year-old Janina's family is having serious financial troubles. Janina and her group of friends plan to prove the rumours wrong by stealing an expensive handbag from the neighbourhood shopping centre." }),
        sf({ title: "Invisible",
          orig: "Det Osynliga",
          co: ["SE"], year: "2025", len: "10 min", age: "7",
          warn: ["ahdistus", "vakivalta"],
          director: "Malak Alamari",
          synopsis: "Adrian and Elias are teenage friends who drift around and live in their own world full of adventure and laughter. What starts as a playful friendship quickly changes when Adrian discovers that not everything is as it seems." }),
        sf({ title: "White Room",
          orig: "Valkoinen huone",
          co: ["FI"], year: "2026", len: "8 min", age: "7",
          warn: ["ahdistus", "vakivalta"],
          director: "Heikki Saikkonen",
          synopsis: "A person is thrown in a white room straight from birth and has to stay there for the rest of their life." }),
        sf({ title: "Signals",
          orig: "Merki",
          co: ["IS"], year: "2025", len: "14 min", age: "S",
          director: "Rúnar Ingi Einarsson",
          synopsis: "At her drama school audition, an aspiring young actress must face the emotional turmoil of her grief or else risk not fulfilling her dream." }),
        sf({ title: "Em assumes death",
          co: ["DK"], year: "2024", len: "30 min", age: "12",
          warn: ["ahdistus"],
          director: "Jacob Schill",
          synopsis: "Em is drowning in a river. This 18-year-old loner has watched hundreds of hours of content on the Law of Assumption: a popular belief of a new online spirituality that everything you assume will be manifested into reality. Em tries to realize this Law, but his confrontation with Death is unusual." }),
      ],
    }),
    shortBlock({
      id: "weirdly-working",
      title: "Nordic Frames: Weirdly Working",
      screening: t(
        "Su 23.8. klo 17.30–19.38 · Auditorio",
        "Sun 23 Aug 17.30–19.38 · Auditorium",
        "Sön 23 aug 17.30–19.38 · Auditoriet"
      ),
      fienta: fienta("nordic-frames-weirdly-working", locale),
      img: imgWeirdlyWorking,
      films: 5,
      age: t("16 (seksi, ahdistus, päihteiden käyttö, väkivalta)", "16 (sex, anxiety, substance use, violence)"),
      desc: t(
        "Työelämän oudot kohtaamiset ja erikoiset tunnelmat. Huijareita, puhelinmyyjiä ja uupuneita selviytyjiä, jotka pitävät kulisseja yllä elantonsa vuoksi.\n\n" +
          qaShorts,
        "Working through weird encounters and atmospheres in workplace settings. Con artists, telemarketers and the tired ones keeping up appearances to make a living.\n\n" +
          qaShorts
      ),
      list: [
        sf({ title: "Dancing Pigeons",
          co: ["SE"], year: "2025", len: "23 min", age: "7",
          warn: ["ahdistus"],
          director: "Christofer Nilsson",
          synopsis: "A psychic medium has his grand seance interrupted as an audience member refuses to let him end the show without getting to speak to her deceased ex-husband." }),
        sf({ title: "Astro TV",
          co: ["FI"], year: "2025", len: "29 min", age: "S",
          director: "Magdaleena Jakkila",
          synopsis: "TV astrologer Sigrid guides people through sleepless nights, but one caller seems worrying. Can Sigrid help them before Jupiter and Pluto align?" }),
        sf({ title: "Am I calling you at a bad time?",
          orig: "En kai huonoon aikaan soittele?",
          co: ["FI"], year: "2025", len: "15 min", age: "16",
          warn: ["seksi"],
          director: "Martta Tuomaala",
          synopsis: "X is growing up in the 1990s. As a child she makes prank calls and gets her first job in telemarketing as a teenager. Office smells, heavy breathers and meaningless greetings follow her from one workplace to another." }),
        sf({ title: "Smokebreak",
          orig: "Sígópása",
          co: ["IS"], year: "2026", len: "2 min", age: "12",
          warn: ["paihteet"],
          director: "Rakel Andrésdóttir",
          synopsis: "A woman working at a fish and chips stand meets a fish during her smoke break and decides to go on an adventure with him." }),
        sf({ title: "Spermatheca",
          orig: "Spermateket",
          co: ["NO"], year: "2025", len: "19 min", age: "7",
          warn: ["vakivalta"],
          director: "Silje Baer",
          synopsis: "The workers at the Spermatheca are struggling with their motivation, and when Pontius makes an unusual discovery, everyday life at the station begins to shift. All the while, department head Morten is daydreaming about far away." }),
      ],
    }),
  ];

  // Musiikki — Music-kortin kentät
  const musicEntry = (o) => ({
    id: o.id,
    fields: {
      artist: o.artist,
      artwork: artwork(o.img),
      photoCredit: o.photoCredit ?? null,
      handle: o.handle ?? null,
      handle2: null,
      location: o.venue,
      day: o.day,
      date: o.date,
      time: o.time,
      description: desc(o.id, o.desc ?? ""),
    },
  });

  const music = [
    musicEntry({
      id: "leffakaraoke",
      artist: t("Vinyylikaraoke — DJ Valoantti", "Vinyl Karaoke — DJ Valoantti"),
      img: imgLeffakaraoke,
      venue: t("Kivipiha", "Stone yard", "Stengården"),
      day: t("pe", "Fri"),
      date: "21.8.",
      time: t("klo 18–20", "18–20"),
      desc: t(
        "Vinyylikaraokessa pääset laulamaan tuttuja kappaleita alkuperäisten artistien kanssa. Valitse kappale listalta, niin DJ laittaa vinyylisinglen soimaan ja voit tarttua mikrofoniin ystävien kannustaessa vieressä. Tarvittaessa sanat löytyvät mukaan laulamista varten.\n\nVinyylikaraoke tarjoaa ainutlaatuisen karaoke-elämyksen, jossa vinyylilevyjen lämmin soundi tekee tunnelmasta tavallista erityisemmän.",
        "Vinyl Karaoke gives you the chance to sing along with your favourite songs performed by the original artists. Choose a song from the playlist, and the DJ will put the vinyl single on the turntable while you take the microphone and perform as your friends cheer you on. Lyrics are available if you need them.\n\nVinyl Karaoke offers a one-of-a-kind karaoke experience, where the warm sound of vinyl records creates a truly special atmosphere."
      ),
    }),
    // Orvokki piilotettu ohjelmistosta 31.7.2026 (tiimin pyyntö).
    // Palauta poistamalla kommenttimerkit ja lisäämällä cm("orvokki")
    // takaisin perjantain aikatauluriville content.js:ssä.
    // musicEntry({
    //   id: "orvokki",
    //   artist: "Orvokki",
    //   img: imgOrvokki,
    //   venue: t("Kivipiha", "Stone yard"),
    //   day: t("pe", "Fri"),
    //   date: "21.8.",
    //   time: t("klo 20.00", "20.00"),
    //   desc: t(
    //     "Orvokki on helsinkiläinen artisti, jonka musiikissa yhdistyvät elektroninen musiikki, indiepop ja lo-fi-estetiikka tavanomaisia poprakenteita kaihtaen. Hän tuottaa, säveltää, sanoittaa ja miksaa musiikkinsa itse. Esikoisalbumi Kasvotusten (2023) oli ehdolla Teosto-palkinnon saajaksi, ja toinen albumi Malus ilmestyi 2025.",
    //     "Orvokki is a Helsinki-based artist blending electronic music, indie pop and lo-fi aesthetics while sidestepping conventional pop structures. Orvokki produces, composes, writes and mixes all the music independently. The debut album Kasvotusten (2023) was nominated for the Teosto Prize, and the second album Malus was released in 2025."
    //   ),
    // }),
    musicEntry({
      id: "joni-ekman",
      artist: "Joni Ekman",
      img: imgJoniEkman,
      venue: t("Kivipiha", "Stone yard"),
      day: t("la", "Sat"),
      date: "22.8.",
      time: t("klo 20.00", "20.00"),
      desc: t(
        "Joni Ekman on tamperelaistunut rokkari Somerolta. Hänen musiikissaan kuuluu kaikuja menneiden vuosikymmenten musiikista mutta hän tuo samalla siihen jotain ainutlaatuista ja omaa. Soolokeikoilla kuullaan lähinnä soolotuotantoa mutta myös lisäksi otteita Joni Ekman Group ja Joni Ekman & Koira -yhtyeiden materiaalista.",
        "Joni Ekman is a Tampere-based rocker originally from Somero. His music echoes past decades while bringing something unique and personal to the mix. His solo shows feature mainly solo material, along with selections from the Joni Ekman Group and Joni Ekman & Koira."
      ),
    }),
    musicEntry({
      id: "los-pan-pan",
      artist: "Los Pan Pan",
      img: imgLosPanPan,
      venue: t("Kivipiha", "Stone yard", "Stengården"),
      day: t("su", "Sun", "sön"),
      date: "23.8.",
      time: t("klo 14.00", "14.00", "kl. 14.00"),
      desc: t(
        "Pannut kuumina – Los Pan Pan, johtajana Satu Jämsä. Kirkkonummen Steel Band ry täyttää tänä vuonna komeat 30 vuotta!\n\nSteel panit eli \"pannut\" ovat Trinidad & Tobagosta kotoisin olevia melodisia lyömäsoittimia, jotka taipuvat moneen musatyyliin. Jokainen soitin taotaan käsityönä kierrätetyistä 200 litran tynnyreistä. Los Pan Panin soittimet ovat kuljettaneet entisessä elämässään mm. öljyä ja omenamehua. Kirkkonummelainen Los Pan Pan on yksi harvoista Suomessa toimivista steelbändeistä. Tällä kertaa soi Lapinlahden elokuvajuhlilla Kivipihalla – luvassa leffabiisejä ja lattareita.",
        "Los Pan Pan, led by Satu Jämsä. The Kirkkonummi Steel Band celebrates its 30th anniversary this year!\n\nSteel pans are melodic percussion instruments originating from Trinidad & Tobago, each hand-hammered from recycled 200-litre barrels. In their former lives, Los Pan Pan's instruments carried oil and apple juice. Los Pan Pan is one of the few steel bands active in Finland. At Lapinlahti Film Festival they play the Stone yard with movie tunes and Latin rhythms."
      ),
    }),
    musicEntry({
      id: "lyyti",
      artist: "Lyyti",
      img: imgLyyti,
      venue: t("Kivipiha", "Stone yard"),
      day: t("su", "Sun"),
      date: "23.8.",
      time: t("klo 20.00", "20.00"),
      desc: t(
        "Lyyti on neljä albumia julkaissut lauluntekijä, joka tunnetaan sukupolvia yhdistävistä kappaleistaan ja eläväisestä esiintymisestään. Puhuttelevat tekstit yhdistyvät värikkäisiin sävellyksiin ja tuotantoon. Lyytin albumit ovat saaneet Emma-ehdokkuuksia, ja syyskuussa 2025 ilmestynyt neljäs albumi Pidän sulle paikkaa on ehdolla vuoden 2026 Teosto-palkinnon saajaksi.",
        "Lyyti is a songwriter with four albums, known for songs that bring generations together and for a vivid live presence. Thought-provoking lyrics meet colourful compositions and production. Lyyti's albums have earned Emma nominations, and the fourth album Pidän sulle paikkaa (September 2025) is nominated for the 2026 Teosto Prize."
      ),
    }),
  ];

  // Työpajat — Workshops-kortin kentät
  // Työpajat joiden esittelyteksti ei ole vielä valmis
  const COMING_SOON = t(
    "Lisää tietoa tulossa pian.",
    "More information coming soon.",
    "Mer information kommer snart."
  );

  const workshopEntry = (o) => ({
    id: o.id,
    fields: {
      workshopName: o.name,
      artwork: artwork(o.img),
      photoCredit: o.photoCredit ?? null,
      handle: o.handle ?? null,
      handle2: null,
      day: o.day,
      date: o.date,
      time: o.time,
      workshopLanguageTitle: WS_LANG,
      workshopLanguage: o.lang,
      description: desc(o.id, o.desc),
      fientaUrl: o.fienta ?? null,
      fientaLabel: FIENTA_LABEL,
    },
  });

  const workshops = [
    workshopEntry({
      id: "whirl-to-feel",
      fienta: fienta("whirltofeel-lapinlahti-film-festival", locale),
      name: t("Whirl to Feel — Safa Solati", "Whirl to Feel by Safa Solati"),
      img: imgSafaSolati,
      handle: "whirling_lifedance",
      day: t("pe", "Fri"),
      date: "21.8.",
      time: t("klo 15–17 · Omenapuutalon nurmikko", "15–17 · Omenapuutalon nurmikko"),
      lang: t("englanti", "English", "engelska"),
      desc: t(
        "Whirl to Feel on kahden tunnin mittainen pyörimiseen keskittyvä työpaja, joka kutsuu tutkimaan ikiaikaista pyörimisen taidetta kehollisen muistin, tunteiden vapauttamisen ja ilon kokemisen väylänä.\n\nTyöpajassa palataan pyörimisen luontaiseen vapauteen – kokemukseen, jonka moni meistä muistaa lapsuudesta, jolloin pyöriminen tapahtui spontaanisti ja leikkisästi. Nyt tätä liikettä lähestytään tietoisesta ja meditatiivisesta näkökulmasta. Aiempaa kokemusta ei tarvita – riittää, että saavut paikalle avoimin mielin, uteliaana ja valmiina liikkumaan. Osallistujille tarjotaan pyörähdyshameet kokeiltaviksi.\n\nSafa Solati on koulutettu psykologi, joka on erikoistunut musiikkipsykoterapiaan. Hän on opiskellut persialaisia tansseja useiden vuosien ajan ja omistautunut viimeisen kymmenen vuoden aikana suufilaisen pyörimisperinteen sekä nykytanssin elementtejä yhdistävän harjoituksen tutkimiselle ja opettamiselle.",
        "Whirl to Feel is an immersive 2-hour workshop exploring the ancient art of whirling as a path to embodied memory, emotional release, and joyful celebration. We'll reconnect with the innate freedom of spinning, something most of us experienced spontaneously in childhood, now held within a conscious, meditative container.\n\nNo prior experience is needed, just your presence, curiosity, and willingness to move. Participants will be provided with whirling skirts.\n\nSafa is a trained psychologist specializing in music psychotherapy, with a deep passion for dance as a path of healing and spiritual exploration. She has studied Persian dances for many years and, over the past 10 years, has devoted herself to the study and practice of Sufi whirling combined with contemporary elements."
      ),
    }),
    workshopEntry({
      id: "trauma-release-exercise",
      fienta: fienta("tensionreleasingexercises-lapinlahti-film-festival", locale),
      name: t(
        "TRE® — Tension Releasing Exercises · Katri Heiskala",
        "TRE® — Tension Releasing Exercises by Katri Heiskala",
        "TRE® — Tension Releasing Exercises med Katri Heiskala"
      ),
      img: imgKatriHeiskala,
      handle: "katriheiskala",
      day: t("pe", "Fri", "fre"),
      date: "21.8.",
      time: t("klo 17–18.30 · Wanha Labra", "17–18.30 · Wanha Labra", "kl. 17–18.30 · Wanha Labra"),
      lang: t("suomi", "Finnish", "finska"),
      desc: t(
        "Tässä työpajassa tutustutaan TRE®-menetelmään (Tension, Stress & Trauma Releasing Exercises). Menetelmä hyödyntää kehon luonnollista palautumisjärjestelmää ja auttaa vapauttamaan kehoon kertyneitä jännityksiä ja kuormitusta.\n\nYksinkertaiset TRE®-alkuliikkeet aktivoivat kehon sisäsyntyisen stressin säätelyjärjestelmän: neurogeenisen tärinän. Tämän sisäisen värinän aktivoimisen ja harjoittamisen positiivisena vaikutuksena voi olla esimerkiksi kroonisten syväjännitysten väheneminen, parempi uni ja rentoutuminen. Työpaja sisältää kevyen johdatuksen teorian kautta menetelmään ja lyhyen harjoitusosuuden. Et tarvitse aiempaa kokemusta tai erityistä fyysistä kuntoa osallistumiseen.\n\nTyöpajan ohjaa Katri Heiskala, joka on Lapinlahden Lähteellä toimiva tanssi-liiketerapeutti (Master's degree in Dance Movement Therapy), sertifioitu TRE®-ohjaaja, FM.\n\nKesto: 1,5 tuntia. Ennakkoilmoittautuminen.",
        "In this workshop, you will be introduced to the TRE® (Tension, Stress & Trauma Releasing Exercises) method. TRE® utilizes the body's natural recovery mechanism and helps release accumulated tension and stress stored in the body.\n\nSimple introductory TRE® exercises activate the body's innate stress-regulation mechanism through neurogenic tremors. Activating and practicing this natural shaking response may help reduce chronic muscular tension, improve sleep, and promote deep relaxation. The workshop includes a brief introduction to the theory behind the method, followed by a guided practice session. No previous experience or special level of physical fitness is required.\n\nThe workshop is led by Katri Heiskala, a Dance Movement Therapist (Master's Degree in Dance Movement Therapy), certified TRE® provider and Master of Arts, based at Lapinlahden Lähde.\n\nDuration: 1.5 hours. Advance registration required.",
        "Under den här workshopen får du bekanta dig med TRE®-metoden (Tension, Stress & Trauma Releasing Exercises). Metoden använder kroppens naturliga återhämtningssystem och hjälper till att frigöra spänningar och belastningar som har samlats i kroppen.\n\nDe enkla inledande TRE®-övningarna aktiverar kroppens medfödda system för stressreglering genom neurogena skakningar. Att aktivera och träna denna naturliga skakrespons kan bidra till att minska kroniska muskelspänningar, förbättra sömnen och främja avslappning. Workshopen innehåller en kort introduktion till metodens teori samt en guidad övningsdel. Du behöver inga tidigare erfarenheter eller någon särskild fysisk kondition för att delta.\n\nWorkshopen leds av Katri Heiskala, dans- och rörelseterapeut (Master's Degree in Dance Movement Therapy), certifierad TRE®-handledare och filosofie magister, verksam vid Lapinlahden Lähde.\n\nLängd: 1,5 timme. Förhandsanmälan krävs."
      ),
    }),
    workshopEntry({
      id: "inherited-and-silent-stories",
      fienta: fienta("inheritedandsilentstories-lapinlahti-film-festival", locale),
      name: t(
        "Inherited and Silent Stories — Giulia Lepori",
        "Inherited and Silent Stories by Giulia Lepori"
      ),
      img: imgGiuliaLepori,
      handle: "Giulialepori2",
      day: t("pe", "Fri"),
      date: "21.8.",
      time: t("klo 17–19 · Sininen Huone", "17–19 · Sininen Huone"),
      lang: t("englanti", "English", "engelska"),
      desc: t(
        "Inherited and Silent Stories on kahden tunnin mittainen osallistava työpaja, jossa tutkitaan perintöä ja tabuja leikin, kuvallisen ilmaisun ja yhteisen luovan työskentelyn kautta.\n\nTyöpajassa osallistujia kutsutaan tutkimaan perinnön näkyviä ja näkymättömiä ulottuvuuksia teatteriharjoitteiden, luovan ilmaisun ja yhteisen reflektion avulla. Liikkeen, kollaasin, piirtämisen ja tarinankerronnan keinoin pohditaan niitä perinteitä, arvoja ja tarinoita, joita olemme perineet, sekä hiljaisuutta ja tabuja, jotka muovaavat identiteettiämme ja yhteisöämme. Aiempaa kokemusta taiteesta tai teatterista ei tarvita.\n\nGiulia Lepori on italialainen sosiologi, jonka työ sijoittuu mielenterveyden, taiteen ja luovan tutkimisen rajapintaan.",
        "Inherited stories, silence stories: exploring heritage and taboo through play, images and collective creation.\n\nThis interactive 2-hour workshop invites participants to explore the visible and invisible aspects of heritage through theatre games, creative expressions and collective reflection. Using movement, collage, drawing and storytelling, participants will reflect on the tradition, values and stories we inherit as well as the silence and taboos that shape our identities and community. No artistic or theatre experience is required.\n\nGiulia Lepori is an Italian sociologist whose work lives at the intersection of mental health, art, and creative exploration."
      ),
    }),
    workshopEntry({
      id: "release-and-relax",
      name: t(
        "Release & Relax — Minna Mustapää",
        "Release & Relax by Minna Mustapää"
      ),
      img: null,
      day: t("la", "Sat"),
      date: "22.8.",
      time: t(
        "klo 13–13.55 · Omenapuutalon nurmikko",
        "13–13.55 · Omenapuutalon nurmikko"
      ),
      lang: t("suomi", "Finnish", "finska"),
      desc: COMING_SOON,
    }),
    workshopEntry({
      id: "stinging-nettle",
      fienta: fienta("stingingnettlefibreprocessing-lapinlahti-film-festival", locale),
      name: t(
        "Stinging Nettle Fibre Processing — Joseph Hallam",
        "Stinging Nettle Fibre Processing by Joseph Hallam"
      ),
      img: imgJosephHallam,
      handle: "designs_by_kick_",
      day: t("la", "Sat"),
      date: "22.8.",
      time: t("klo 14–16 · Puisto", "14–16 · Puisto"),
      lang: t("englanti", "English", "engelska"),
      desc: t(
        "Nokkonen on ollut käytössä kuitukasvina jo tuhansien vuosien ajan köysien ja tekstiilien valmistuksessa. Nykypäivänä sen merkitys on kuitenkin pitkälti unohtunut, ja hyödyllisen sekä lääkinnällisistä ominaisuuksistaan tunnetun kasvin sijaan nokkonen mielletään usein vain ikäväksi rikkaruohoksi.\n\nTässä työpajassa osallistujat oppivat, miten nokkosta valitaan, kerätään ja käsitellään kuitukäyttöön esimerkiksi narujen ja tekstiilien valmistusta varten. Osallistujat käsittelevät itse nokkoskuitua ja valmistavat siitä rannekorun, jonka saavat mukaansa.\n\nJoseph Hallam opiskelee tekstiilisuunnittelun maisteriohjelmassa Aalto-yliopistossa ja on työskennellyt luonnonmateriaalien parissa jo useiden vuosien ajan.",
        "Stinging nettle has been used for thousands of years as a fibre plant for rope and textiles but has largely been forgotten in the modern world, maligned as a painful weed, rather than the useful and even medicinal plant it is. In this workshop, the participants are taught the steps for choosing, collecting and processing nettle fibre for use in cordage or textiles. The participants will process the nettle and then make themselves a nettle cordage bracelet to take away with them.\n\nJoseph Hallam is a textile design Masters student at Aalto University and has been working with natural materials for many years."
      ),
    }),
    workshopEntry({
      id: "come-back-to-your-body",
      fienta: fienta("comebacktoyourbody-lapinlahti-film-festival", locale),
      name: t(
        "Palaa kehoosi, palaa ääneesi — Anni Pellikka",
        "Come Back to Your Body, Come Back to Your Voice by Anni Pellikka"
      ),
      img: imgAnniPellikka,
      photoCredit: t("Kuva: Aino Luukkanen", "Photo: Aino Luukkanen"),
      day: t("la", "Sat"),
      date: "22.8.",
      time: t("klo 14–15.15 · Wanha Labra", "14–15.15 · Wanha Labra"),
      lang: t("suomi tai englanti", "Finnish or English", "finska eller engelska"),
      desc: t(
        "Palaa kehoosi, palaa ääneesi on lempeä, kehollinen työpaja naisille, jotka haluavat hidastaa tahtia, päästää irti kesän intensiteetistä ja löytää uudelleen yhteyden omaan sisäiseen selkeyteensä.\n\nKiinalaisen lääketieteen periaatteisiin pohjautuvassa työpajassa tarkastellaan elokuun loppua siirtymävaiheena – hetkenä, jolloin yin ja yang tasapainottuvat, energiaa voidaan lempeästi palauttaa takaisin itseensä ja oma ääni alkaa jälleen kuulua. Aiempaa kokemusta ei tarvita. Tule juuri sellaisena kuin olet.\n\nTyöpaja on avoin kaikille naisiksi identifioituville. Kesto 75 min. Saavuthan ajoissa – työpajaan ei voi liittyä sen alettua.",
        "Come Back to Your Body, Come Back to Your Voice is a gentle body-based workshop for women who want to slow down, release summer's intensity and reconnect with their inner clarity.\n\nRooted in Chinese medicine, we will explore late August as a threshold: a time to harmonize yin and yang, gather your energy back to yourself and gently return to your voice. You don't need any previous experience. Come as you are.\n\nOpen to all who identify as women. Duration 75 minutes. Please arrive on time, no entry once the session has started."
      ),
    }),
    workshopEntry({
      id: "re-membering",
      name: t(
        "[Re]membering: A Writing Workshop — Hanan Mahbouba",
        "[Re]membering: A Writing Workshop by Hanan Mahbouba"
      ),
      img: null,
      day: t("la", "Sat"),
      date: "22.8.",
      time: t("klo 15–17 · Sininen Huone", "15–17 · Sininen Huone"),
      lang: t("englanti", "English", "engelska"),
      desc: t(
        COMING_SOON + "\n\nKesto: 2 tuntia.",
        COMING_SOON + "\n\nDuration: 2 hours."
      ),
    }),
    workshopEntry({
      id: "diy-die",
      fienta: fienta("diydie-lapinlahti-film-festival", locale),
      name: t(
        "DIY DIE (Putting the Fun in Funeral Planning) — Kaja Matura",
        "DIY DIE (Putting the Fun in Funeral Planning) by Kaja Matura"
      ),
      img: imgKajaMatura,
      handle: "relanoita",
      day: t("la", "Sat"),
      date: "22.8.",
      time: t("klo 16–17.30 · Wanha Labra", "16–17.30 · Wanha Labra"),
      lang: t("englanti", "English", "engelska"),
      desc: t(
        "\"Kuolema on vain ovi, aika on vain ikkuna.\" – Vigo Karpaattinen, Ghostbusters (1989)\n\nMitä tapahtuisi, jos suhtautuisimme oman kuolemamme väistämättömyyteen huumorilla ja leikillisyydellä? Voiko luovuus auttaa meitä hyväksymään kuolevaisuutemme? Voisivatko hautajaiset olla tila, jossa suru ja ilo kulkevat rinnakkain?\n\nTule mukaan hyväntuuliseen kuolematyöpajaan, joka kutsuu sinut ajattelemaan laatikon ulkopuolelta – tai pikemminkin mäntyarkun ulkopuolelta – ja pohtimaan, millaisen lähdön haluaisit tehdä tästä kuolevaisesta elämästä.\n\nKaja Matura on Havaijilla kasvanut utelias ja tutkiva taiteilija, joka tasapainoilee ikiaikaisen viisauden ja kehittyvän teknologian rajalla. Mytologian rakkaus ja kiinnostus kasvimaailmaan näkyvät hänen taiteessaan. Ammatiltaan holistinen hierojana hän pyrkii ohjaamaan jokaisen käsiensä alle päätyvän kohti syvempää rentoutta.\n\nKesto: 1,5 tuntia.",
        "\"Death is but a door, time is but a window.\" - Vigo the Carpathian, Ghostbusters (1989)\n\nWhat might it mean for us to approach the inevitability of our demise with a sense of humor and play? Can creativity be a catalyst for acceptance? Could a funeral be a space for grief and joy? Join us for this lighthearted death workshop that encourages you to think outside the (pine) box and consider how you want to make your exit from this mortal coil!\n\nKaja Matura is a creature raised in the lush jungles of the Hawaiian islands; a curious, queer, explorative witch balancing on the razor's edge of ancient wisdom and emerging technology. Drawing from her love of mythology and affinity for the botanical world, she weaves art that seeks to mimic the vibrancy of her terrestrial experience. A Holistic Massage Therapist by profession, she seeks to lead each person under her hands to a state of deeper ease.\n\nDuration: 1.5 hours."
      ),
    }),
    workshopEntry({
      id: "hoitava-liike",
      fienta: fienta("hoitavaliike-lapinlahti-film-festival", locale),
      name: t(
        "Hoitava liike — Katri Heiskala",
        "Healing Movement by Katri Heiskala",
        "Helande rörelse med Katri Heiskala"
      ),
      img: imgKatriHeiskala,
      handle: "katriheiskala",
      day: t("su", "Sun", "sön"),
      date: "23.8.",
      time: t("klo 13–14 · Wanha Labra", "13–14 · Wanha Labra", "kl. 13–14 · Wanha Labra"),
      lang: t("suomi", "Finnish", "finska"),
      desc: t(
        "Hoitavan liikkeen työpajassa palataan lempeästi tuntemaan ja aistimaan oma keho ja sen liikkeet. Liikekieli toimii ennen kaikkea väylänä lepoon, yhteyteen, rauhaan ja sisäiseen kokemukseen. Ei ole oikeaa eikä väärää, jokainen liikkuu omaa kehoaan ja tarpeitaan kuunnellen. Harjoitteet ovat saaneet innoitetta modernin tanssin liikeimprovisaatiosta ja tanssi-liiketerapian menetelmistä.\n\nTyöpajan ohjaa Katri Heiskala, joka on Lapinlahden Lähteellä toimiva tanssi-liiketerapeutti (Master's degree in Dance Movement Therapy), sertifioitu TRE®-ohjaaja, FM.\n\nKesto: 1 tunti. Ennakkoilmoittautuminen.",
        "In the Healing Movement workshop, participants are gently guided back to sensing and connecting with their own bodies through movement. Movement becomes a pathway to rest, connection, inner peace and embodied experience. There is no right or wrong way to move — everyone is encouraged to listen to their own body and move according to their own needs. The exercises draw inspiration from modern dance improvisation and Dance Movement Therapy methods.\n\nThe workshop is led by Katri Heiskala, a Dance Movement Therapist (Master's Degree in Dance Movement Therapy), certified TRE® provider and Master of Arts, based at Lapinlahden Lähde.\n\nDuration: 1 hour. Advance registration required.",
        "I workshopen Helande rörelse får deltagarna varsamt återknyta kontakten med sin kropp och dess rörelser. Rörelsen fungerar framför allt som en väg till vila, närvaro, inre ro och en djupare kroppslig upplevelse. Det finns inget rätt eller fel sätt att röra sig – var och en uppmuntras att lyssna på sin egen kropp och röra sig utifrån sina egna behov. Övningarna har inspirerats av modern dansimprovisation och metoder från dans- och rörelseterapi.\n\nWorkshopen leds av Katri Heiskala, dans- och rörelseterapeut (Master's Degree in Dance Movement Therapy), certifierad TRE®-handledare och filosofie magister, verksam vid Lapinlahden Lähde.\n\nLängd: 1 timme. Förhandsanmälan krävs."
      ),
    }),
    workshopEntry({
      id: "craft-corner",
      fienta: fienta("craftcorner-lapinlahti-film-festival", locale),
      name: t(
        "Craft Corner — Ilya & Emma",
        "Craft Corner with Ilya and Emma"
      ),
      img: imgCraftCorner,
      day: t("su", "Sun"),
      date: "23.8.",
      time: t("klo 13–17 · Omenapuutalon nurmikko",
        "13–17 · Omenapuutalo lawn",
        "13–17 · Omenapuutalos gräsmatta"),
      lang: t(
        "suomi, englanti ja ruotsi",
        "Finnish, English and Swedish", "finska, engelska och svenska"
      ),
      desc: t(
        "Lämpimästi tervetuloa tekstiilikäsityöpajaamme, jossa hidastamme hetkeksi, työstämme käsillä ja tutkimme luonnonmateriaaleja sekä perinteisiä käsityötekniikoita. Festivaalin teemojen PERINTÖ ja TABUT hengessä haluamme tuoda esiin luonnonmateriaalien kauneutta ja herättää uutta arvostusta perinteisiä käsityötaitoja kohtaan, kuten huovutusta, neulomista ja virkkausta.\n\nTyöpajassa saat luoda vapaasti ja antaa mielikuvituksesi johdattaa. Aiempaa kokemusta ei tarvita – kaikki ovat tervetulleita kokeilemaan, oppimaan ja nauttimaan käsillä tekemisen ilosta. Kaikki tarvittavat materiaalit ja työvälineet löytyvät paikan päältä.",
        "Warmly welcome to our textile craft workshop, where we take a moment to slow down, create with our hands and explore natural materials and traditional craft techniques. As part of the festival's themes HERITAGE and TABOO, we want to highlight the beauty of natural materials and bring new appreciation to traditional practices such as felting, knitting and crocheting.\n\nDuring the workshop, you are invited to create freely and let your imagination guide you. No previous experience is needed! Materials and tools will be available on site."
      ),
    }),
    workshopEntry({
      id: "sitting-with-grief",
      fienta: fienta("sittingwithgrief-lapinlahti-film-festival", locale),
      name: t(
        "Surun keskellä — Angelica Lewis",
        "Sitting with Grief by Angelica Lewis"
      ),
      img: imgAngelicaLewis,
      handle: "angelicalewis.illustrates",
      day: t("su", "Sun"),
      date: "23.8.",
      time: t("klo 14–16 · Osasto 5", "14–16 · Osasto 5"),
      lang: t("suomi tai englanti", "Finnish or English", "finska eller engelska"),
      desc: t(
        "Surun keskellä -työpajan tarkoituksena on luoda tila, jossa osallistujat voivat rauhassa ja harkiten kokea teemaa suru (kuolema, ihmissuhteet, luonto). Pohditaan mitkä ja ketkä saavat kodin tuntumaan kodilta sekä kodin tärkeyttä ja merkitystä itselle.\n\nTyöpajan aikana keskustellaan teemasta, kirjoitetaan blackout-runoja ja tehdään zinejä teemoihin liittyen.\n\nKesto: 2 tuntia.",
        "Sitting with Grief is a workshop where participants can deliberately and in peace explore the theme of GRIEF (death, relationships, nature). We'll reflect on the idea of home, its meaning and importance to you, and what or who turns a house into a home. The workshop includes discussing the theme with the help of prompts, writing blackout poetry and creating zines.\n\nDuration: 2 hours."
      ),
    }),
    workshopEntry({
      id: "the-end-of-the-word",
      fienta: fienta("theendoftheword-lapinlahti-film-festival", locale),
      name: t(
        "The End of the Word — Oscar Zemarti",
        "The End of the Word by Oscar Zemarti"
      ),
      img: imgOscarZemarti,
      day: t("su", "Sun"),
      date: "23.8.",
      time: t("klo 15–17 · Sininen Huone", "15–17 · Sininen Huone"),
      lang: t(
        "englanti (kaikki kielet tervetulleita)",
        "English-facilitated, all languages welcome", "leds på engelska, alla språk välkomna"
      ),
      desc: t(
        "Maailma on loppumassa, ja samalla kieli katoaa. Sanoja unohdetaan nopeammin kuin niitä ehditään lausua.\n\nJokainen osallistuja toimii pienen sanajoukon vartijana. Nämä sanat valitaan pelastettaviksi unohdukselta: perheeltä perityt, äidinkielestä valitut, lapsuudesta tutut sekä sanat, jotka kuiskattiin, kiellettiin tai joita ei koskaan lausuttu ääneen – tai yksinkertaisesti sanat, jotka merkitsevät meille niin paljon, ettemme voi päästää niistä irti.\n\nOscar Zemarti on perulainen elokuvantekijä ja poikkitaiteellinen taiteilija, jonka työskentely kiertyy muistojen, perinnön ja niiden tarinoiden ympärille, joita yhteisöt kertovat selviytyäkseen.\n\nKesto: noin 90–120 min.",
        "The world is ending, and language is dying with it. Words are being forgotten faster than anyone can speak them.\n\nEach guest becomes the Gatekeeper of a handful of words, chosen to be rescued from oblivion: words inherited from family, from a mother tongue, from a childhood, and words that were whispered, forbidden, or never said aloud — or just words that mean so much we cannot let go.\n\nOscar Zemarti is a Peruvian filmmaker and transdisciplinary artist working across film, photography, poetry, theatre and participatory formats. His practice circles the same fire: memory, heritage, and the stories communities tell to survive.\n\nDuration: approx. 90–120 min."
      ),
    }),
    workshopEntry({
      id: "olennolliset-olennot",
      name: t(
        "Olennolliset olennot — stop motion -animaatiotyöpaja",
        "Essential Creatures — stop motion animation workshop",
        "Väsentliga varelser — workshop i stop motion-animation"
      ),
      img: imgOlennot,
      day: t("la", "Sat", "lör"),
      date: "22.8.",
      time: t("klo 13–15 · Tilajakamon puutarhapiha", "13–15 · Tilajakamo garden courtyard", "kl. 13–15 · Tilajakamos trädgårdsgård"),
      lang: t("suomi", "Finnish", "finska"),
      desc: t(
        "Työpajassa luomme omia mielikuvitusolentoja ja herätämme ne eloon stop motion -animaation avulla itse rakennetuissa pienoisympäristöissä.\n\nOlentoja ja niiden ympäristöjä tehdään piirtäen, maalaten ja kollaasitekniikalla. Tarjolla on paperia, piirustus- ja maalaustarvikkeita, kangastilkkuja, liimaa sekä muuta askartelumateriaalia. Voit halutessasi tuoda myös omia materiaalejasi, kuten kangastilkkuja tai muita elementtejä, joita haluat käyttää työskentelyssä. Jos mahdollista, ota mukaasi älypuhelin, johon on asennettu Stop Motion Studio -sovellus.\n\nTyöpajan ohjaajina toimivat animaatiotaiteilija Leena Jääskeläinen ja monitaiteilija Hanna Toiviainen-Conteh.\n\nTyöpaja järjestetään Tilajakamon puutarhapihan perällä sijaitsevan Päämaja-installaation luona.\n\nKesto: 2 tuntia. Ei ennakkoilmoittautumista.",
        "In this workshop, we will create our own imaginary creatures and bring them to life through stop motion animation in self-made miniature environments.\n\nThe creatures and their surroundings will be created using drawing, painting and collage techniques. Paper, drawing and painting materials, fabric scraps, glue and other craft supplies will be provided. You are also welcome to bring your own materials, such as fabric scraps or other items you would like to incorporate into your creations. If possible, please bring a smartphone with the Stop Motion Studio app installed.\n\nThe workshop is led by animation artist Leena Jääskeläinen and multidisciplinary artist Hanna Toiviainen-Conteh.\n\nThe workshop takes place at the Päämaja installation, located at the back of the Tilajakamo garden courtyard.\n\nDuration: 2 hours. No registration required.",
        "Under workshopen skapar vi våra egna fantasivarelser och väcker dem till liv med hjälp av stop motion-animation i egenbyggda miljöer.\n\nVarelserna och deras miljöer skapas genom teckning, målning och collageteknik. Papper, rit- och målningsmaterial, tygbitar, lim och annat pysselmaterial finns på plats. Du är också välkommen att ta med egna material, till exempel tygbitar eller annat som du vill använda i ditt skapande. Om möjligt, ta gärna med en smartphone med appen Stop Motion Studio installerad.\n\nWorkshopen leds av animationskonstnären Leena Jääskeläinen och den mångkonstnärliga konstnären Hanna Toiviainen-Conteh.\n\nWorkshopen hålls vid installationen Päämaja, längst in på Tilajakamos trädgårdsgård.\n\nLängd: 2 timmar. Ingen förhandsanmälan krävs."
      ),
    }),
  ];

  // Taide — Art-kortin kentät (title, originalTitle = taiteilija, location, description)
  const artEntry = (o) => ({
    id: o.id,
    fields: {
      title: o.title,
      originalTitle: o.artist,
      artwork: artwork(o.img),
      photoCredit: o.photoCredit ?? null,
      location: o.location,
      description: desc(o.id, o.desc),
      // Instagram-tunnus ja/tai taiteilijan nettisivu (Art.jsx renderöi linkit)
      handle: o.handle ?? null,
      website: o.website ?? null,
      websiteLabel: o.websiteLabel ?? null,
      fientaUrl: o.fienta ?? null,
      fientaLabel: FIENTA_LABEL,
    },
  });

  const art = [
    artEntry({
      id: "ken-tasta-kay",
      fienta: fienta("ken-tasta-kay-blind-cinema-naytos", locale),
      title: t(
        "KEN TÄSTÄ KÄY... blind cinema -näytös",
        "KEN TÄSTÄ KÄY... blind cinema screening"
      ),
      artist: "Pauliina Kauppila",
      handle: "px3kauppila",
      img: imgKenTastaKay,
      photoCredit: t("Grafiikka: Matti Sampela", "Artwork: Matti Sampela"),
      location: t(
        "Valo-tila, 2. krs · Näytökset (47 min): pe klo 15, 18 ja 20 · la–su klo 13, 15, 18 ja 20 · Fienta-ilmoittautuminen",
        "Valo-tila, 2nd floor · Screenings (47 min): Fri 15, 18 and 20 · Sat–Sun 13, 15, 18 and 20 · Registration via Fienta"
      ),
      desc: t(
        "KEN TÄSTÄ KÄY... on Pauliina Kauppilan toinen sooloalbumi, joka ammentaa suomalaisen psykiatrian historiasta, erityisesti Seilin saaren naishospitaalin vaiheista (1889–1962), sekä naisen asemasta 1800–1900-lukujen taitteessa ja näiden ilmiöiden jatkumoista nykypäivään. Teos käsittelee rakenteellista epätasa-arvoa, psykiatrian stigmaa ja kehollisuuteen liittyviä uskomuksia sekä kutsuu pohtimaan, miten menneisyyden ajattelutavat näkyvät yhä nyky-yhteiskunnassa. Erityisen tärkeänä tausta-aineistona levyntekoprosessissa ovat olleet dosentti Jutta Ahlbeckin julkaisut sekä professori Petteri Pietikäisen kirjat.\n\nMusiikillisesti albumi on kokeellinen ja tarinallinen kokonaisuus, jossa laulun, lyömäsoitinten ja improvisaation rinnalla kuullaan kenttänauhoituksia arkisista ja yllättävistä äänimaisemista – magneettikuvauslaitteesta junan kolkkeeseen ja Seilin ruokakelloon.\n\nPauliina Kauppila on näyttämöllinen lyömäsoittaja, säveltäjä ja nuorisopsykiatri. KEN TÄSTÄ KÄY... kutsuu pysähtymään mielensisäiselle näyttämölle ja tarkastelemaan niitä tarinoita, joista yhteiskunnassa on liian usein vaiettu.",
        "KEN TÄSTÄ KÄY... is Pauliina Kauppila's second solo album, drawing on the history of Finnish psychiatry, especially the women's hospital on the island of Seili (1889–1962), and on the position of women at the turn of the 20th century and the continuation of these phenomena into the present day. The work deals with structural inequality, the stigma of psychiatry and beliefs about the body, inviting the audience to consider how the mindsets of the past still appear in today's society.\n\nMusically the album is an experimental, narrative whole where song, percussion and improvisation are joined by field recordings of everyday and surprising soundscapes – from an MRI machine to the clatter of a train and the Seili dinner bell.\n\nPauliina Kauppila is a performing percussionist, composer and adolescent psychiatrist. KEN TÄSTÄ KÄY... invites you to pause on the stage of the mind and examine the stories our society has too often silenced."
      ),
    }),
    artEntry({
      id: "seitsemas-aalto",
      title: t("Seitsemäs aalto", "Seitsemäs aalto (The Seventh Wave)"),
      artist: "Jukka Rapo",
      website: "https://www.jukkarapo.com",
      websiteLabel: "jukkarapo.com",
      img: imgSeitsemasAalto,
      location: t(
        "Valokuvanäyttely: Käytävägalleria 1.–31.8. · Avajaiset pe 21.8. klo 19 · Elokuva: Venetsia-talo, 1. krs (pe 15–18, la–su 13–21) · Ulkoinstallaatio: Lapinlahden laituri pe–la klo 21–23",
        "Photo exhibition: Käytävägalleria 1–31 Aug · Opening Fri 21 Aug at 19 · Film: Venetsia building, 1st floor (Fri 15–18, Sat–Sun 13–21) · Outdoor installation: Lapinlahden laituri Fri–Sat 21–23"
      ),
      desc: t(
        "Seitsemäs aalto on matka Itämeren pinnan alle – meren rytmiin ja sen hengitykseen. Pinnan alla maailma muuttuu: valo siivilöityy veden läpi, värit katoavat ja palaavat, aallot ja virtaukset muovaavat maisemaa lakkaamatta.\n\nKaikki näyttelyn kuvat ja Seitsemäs aalto -elokuvan vedenalaiset kohtaukset on kuvattu henkeä pidättäen vapaasukeltaen. \"En kuvaa sitä, miltä meri näyttää. Kuvaan sitä, miltä meri tuntuu.\"\n\nJukka Rapo on helsinkiläinen valokuvaaja, mediataiteilija ja vedenalaiskuvaaja. Hän on työskennellyt ammattivalokuvaajana vuodesta 1995 lähtien ja kuvannut Itämerta veden alla vuodesta 1993.",
        "The Seventh Wave is a journey beneath the surface of the Baltic Sea – into the rhythm of the sea and its breath. Beneath the surface, the world transforms: light filters through the water, colours disappear and return, while waves and currents continuously reshape the landscape.\n\nAll photographs in the exhibition, as well as the underwater scenes in The Seventh Wave film, were captured while freediving on a single breath. \"I do not photograph what the sea looks like. I photograph what the sea feels like.\"\n\nJukka Rapo is a Helsinki-based photographer, media artist and underwater photographer. He has worked as a professional photographer since 1995 and has been photographing the Baltic Sea underwater since 1993."
      ),
    }),
    artEntry({
      id: "madonsyojat",
      title: t("Madonsyöjät", "Madonsyöjät (Worm Eaters)"),
      artist: "Joona Möttö",
      handle: "triljoona",
      website: "https://www.triljoona.com",
      websiteLabel: "triljoona.com",
      img: imgMadonsyojat,
      location: t(
        "Kahvila Lähde · 1.–31.8. · ma–la 11–17, su 12–17 · Avajaiset la 22.8. klo 18–20",
        "Café Lähde · 1–31 Aug · Mon–Sat 11–17, Sun 12–17 · Opening Sat 22 Aug 18–20"
      ),
      desc: t(
        "\"Minulla on sukulainen, joka katosi 50-luvulla jättämättä jälkeäkään. Hänen tavaroidensa seassa oli salkku, jonka sisällä oli negatiiveja, päiväkirjoja sekä erinäisiä pieniä esineitä. Kukaan ei raaskinut heittää salkkua pois, mutta kukaan ei myöskään vaivautunut tutkimaan sen sisältöä, kunnes salkku päätyi minun käsiini. Tässä näyttelyssä tuon esille ensimmäisen otoksen kuvamateriaalia ja todistusaineistoa kadonneen sukulaiseni löytämästä maanalaisesta yhteisöstä.\"\n\nMadonsyöjät rakentaa immersiivisen narratiivin, joka ammentaa taiteilijan mielikuvituksesta sekä lapsuudessa mieleenpainuneista tarinoista. Osa kuvista on toteutettu Lapinlahden ullakoilla ja vanhalla ruumishuoneella.\n\nJoona Möttö (s. 1995) on valokuvataiteilija ja ohjaaja, joka suhtautuu intohimoisesti surrealismiin, fiktiiviseen tarinankerrontaan ja analogisiin tekniikoihin.",
        "\"I have a relative who disappeared without a trace in the 1950s. Among his belongings was a briefcase containing negatives, diaries, and various small objects. No one bothered to throw the briefcase away, but no one bothered to examine its contents either, until the briefcase ended up in my hands. In this exhibition, I present the first part of footage and evidence of an underground community discovered by my missing relative.\"\n\nWorm Eaters builds an immersive photographic narrative drawing from the artist's imagination and stories from his childhood. Some of the images have been shot in the attics and the old morgue in Lapinlahti.\n\nJoona Möttö (b. 1995) is a photographic artist and director with a passion for surrealism, fictional storytelling and analogue techniques."
      ),
    }),
    artEntry({
      id: "taiteilijan-talo",
      title: t(
        "Taiteilijan talo – Maisemamaalarin talo",
        "The Artist's House – The Landscape Painter's House"
      ),
      artist: "Kasper Muttonen",
      img: imgTaiteilijanTalo,
      location: t(
        "Venetsian niemi · 20.–30.8. · Avajaiset Taiteiden yönä to 20.8. klo 19–21",
        "Venetsia Peninsula · 20–30 Aug · Opening on the Night of the Arts, Thu 20 Aug 19–21"
      ),
      desc: t(
        "Kasper Muttosen Taiteilijan talo on monivuotinen taideprojekti, jossa taiteilija tavoittelee sitä, mitä hänen taiteilijan talonsa voisi olla. Hankkeessa taiteilija tutkii, miten taiteilija voisi olla myös arkkitehti – kuten tapahtui muinoin historiassa, kun taiteilijan ja arkkitehdin ammattia ei eroteltu niin tarkasti kuin nykyaikana – sekä millä logiikalla ja tarpeilla taiteilija loisi oman talonsa muodot ja toiminnot.\n\nHanke toteutetaan sarjana erilaisia näyttelyitä, joissa taiteilijan talon mallit kasvattavat kokoaan. Nyt esitetään maisemamaalarin talo osana kaupunkimerimaisemaa Lapinlahden Venetsia-talon merenpuoleisella kalliolla.\n\nHanke toteutetaan Suomen Kulttuurirahaston kolmivuotisen apurahan turvin.",
        "The Artist's House by Kasper Muttonen is a multi-year art project in which the artist explores what his own artist's house could be. Through this project, Muttonen investigates how an artist might also take on the role of an architect, as was often the case throughout history when the professions of artist and architect were not as clearly separated as they are today.\n\nThe project unfolds as a series of exhibitions in which different models of the Artist's House gradually increase in scale. The current exhibition presents The Landscape Painter's House, situated as part of the urban seascape on the seaside cliffs beside the Venetsia House in Lapinlahti.\n\nThe project is supported by a three-year grant from the Finnish Cultural Foundation."
      ),
    }),
    artEntry({
      id: "ruumiillistumia",
      title: t("Ruumiillistumia", "Ruumiillistumia (Embodiments)"),
      artist: "Mikko Kelloniemi",
      img: imgRuumiillistumia,
      location: t(
        "Osasto 5 · 6.8.–11.9. · ma–la 11–17, su 12–17",
        "Osasto 5 · 6 Aug–11 Sep · Mon–Sat 11–17, Sun 12–17"
      ),
      desc: t(
        "Ilmassa leijaileva aalto. Huokoisuus. Ohikiitävä selkeyden hetki. Jokin syntyy. Kaunis vahinko, uusi suunta. Tunne siitä, kun yhdestä tulee kaksi.\n\nRuumiillistumia tarkastelee identiteettiä, kehollista intuitiota ja taiteellisen työskentelyn somatiikkaa. Keraamiset veistokset ovat syntyneet intuitiivisessa prosessissa, jossa ilman tarkkaa suunnitelmaa toistuvat muodot syntyvät käden ja saven rytmisestä vuorovaikutuksesta. Musteilla värjätyt kankaat ja puulevyt ovat pitkäkestoisen prosessoinnin, omanlaisensa järjestelmällisen satunnaisuuden tulosta.\n\nMikko Kelloniemi on luovien alojen ammattilainen ja monialainen taiteilija. Hän on työskennellyt kuvaajana ja valokuvaajana kohta 20 vuotta, keskittyen dokumentaariseen sisältöön ja erityisesti luovaan dokumenttielokuvaan.",
        "A wave drifting through the air. Porosity. A fleeting moment of clarity. Something comes into being. A beautiful accident, a new direction. The feeling of one becoming two.\n\nRuumiillistumia explores identity, bodily intuition, and the somatics of artistic practice. The ceramic sculptures have emerged through an intuitive process in which recurring forms take shape through the rhythmic interaction of hand and clay, without a predetermined plan. The ink-dyed textiles and wooden panels are the result of a long-term process – a kind of methodical randomness.\n\nMikko Kelloniemi is a multidisciplinary artist and creative professional. He has worked as a cinematographer and photographer for nearly twenty years, focusing on documentary work, particularly creative documentary filmmaking."
      ),
    }),
    artEntry({
      id: "stop-the-hustle",
      title: "Stop the Hustle",
      artist: "Julia Sand",
      website: "https://www.juliasand.com/experimental",
      websiteLabel: "juliasand.com/experimental",
      img: imgStopTheHustle,
      location: t(
        "Omenapuutalo · pe–su klo 15–19",
        "Omenapuutalo · Fri–Sun 15–19"
      ),
      desc: t(
        "Paine kehittyä jatkuvasti, ansaita enemmän, edetä uralla ja päivittää itseään vaanii meitä kaikkia suorituskeskeisessä järjestelmässä. Pelkkä oleminen – ei minkään tekeminen – on lähes radikaali teko kulttuurissa, jossa ahkeruus on istutettu meihin lapsuudesta asti. Levosta on tullut tabu. Samaan aikaan juuri sitä meidän tulisi tehdä, jos haluamme elää kestävästi.\n\nTämä installaatio kapinoi suorituskulttuuria vastaan ja palkitsee sinut hitaasta liikkeestä ja paikallaan pysymisestä. Vain siten pysyt sopusoinnussa sen herkän, valoon perustuvan ekosysteemin kanssa. Ryömi verhoteltan sisään ja rentoudu niin pitkäksi aikaa kuin haluat.\n\nJulia Sand on monialainen taiteilija ja muotoilija pääkaupunkiseudulta. Hän kokeilee uusia medioita ja interaktiivisia teknologioita leikkisällä ja tutkivalla otteella.",
        "The pressure to constantly level up, earn more money, advance one's career and continuously improve oneself is preying on all of us living in this profit-driven, performative system. To just be — do nothing, take it easy — is a controversial, almost radical act in a system rooted in a cultural heritage of diligence and hard work instilled from childhood. Against this backdrop, rest has become taboo. At the same time, if we want to live sustainably, that is exactly what we should do.\n\nThis installation rebels against hustle culture and rewards you for moving slowly and staying still. Only in this way can you remain in harmony with its delicate, light-based ecosystem. Crawl into the tent of curtains and relax for as long as you like.\n\nJulia Sand is a multidisciplinary artist and designer based in the Helsinki region, experimenting with new media and interactive technologies through a playful and exploratory approach."
      ),
    }),
    artEntry({
      id: "awitha-body-shop",
      title: "AwithA Body Shop",
      artist: "Agita Maračkovska & Andris Maračkovskis",
      handle: "a_with_a_workshop",
      website: "https://awitha.art/",
      websiteLabel: "awitha.art",
      img: imgAwithA,
      location: t(
        "Omenapuutalon nurmikko · pe klo 15–21, la–su klo 14–21",
        "Omenapuutalo lawn · Fri 15–21, Sat–Sun 14–21"
      ),
      desc: t(
        "AwithA Body Shop ei ole vain valmiiden teosten näyttely, vaan jatkuvasti muotoutuva ympäristö – samanaikaisesti työpaja, laboratorio, kauppa ja installaatio. Kehot ja kehon osat ovat eri valmistumisen ja muodonmuutoksen vaiheissa, hämärtäen tekemisen prosessin ja näyttelyn välistä rajaa.\n\nAwithA on latvialainen taiteilijaduo, jonka muodostavat Agita Maračkovska ja Andris Maračkovskis. Heidän työskentelynsä yhdistää nykytaidetta, kuvanveistoa, materiaalikokeiluja ja elokuva-alan kokemusta. Silikonin, muottien ja valujen sekä hyperrealististen kehon esitysten parissa työskennellessään he tutkivat ihmiskehoa, sen esittämistä ja muodonmuutosta materiaalin kautta.",
        "AwithA Body Shop is not simply an exhibition of finished objects, but an evolving environment — simultaneously a workshop, laboratory, shop, and installation. Bodies and body fragments exist at different stages of creation and transformation, blurring the boundary between the process of making and the exhibition itself.\n\nAwithA is a Latvian artist duo formed by Agita Maračkovska and Andris Maračkovskis. Their practice brings together contemporary art, sculpture, material experimentation, and experience within the film industry. Working with silicone, moulds, casting, and hyperrealistic representations of the body, they explore the human body, its representation, and its transformation through material."
      ),
    }),
    artEntry({
      id: "kaksi-varia",
      title: t("KAKSI VÄRIÄ", "TWO COLORS"),
      artist: "Ella Männikkö",
      handle: "ellamannikko",
      img: imgKaksiVaria,
      location: t(
        "Ulkoinstallaatio, Lapinlahden laituri · su 23.8. klo 21–22",
        "Outdoor installation, Lapinlahden laituri · Sun 23 Aug 21–22",
        "Utomhusinstallation, Lappvikens brygga · sön 23.8. kl. 21–22"
      ),
      desc: t(
        "Ella Männikkö on audiovisuaalinen runoilija, jonka koulutus ja juuret kumpuavat länsimaisesta taidemusiikista. Teoskokonaisuus KAKSI VÄRIÄ koostuu kahdesta klassisen musiikin kulttuuria ja sen epäkohtia kommentoivasta, runoa ja sooloalttoviulua yhdistelevästä videoinstallaatiosta: PERHOSET ja ORANSSI. Teokset näyttäytyvät taiteilijalle itselleen nimenomaan värien kautta ja symboloivat hänelle värien palautumista elämään.\n\nMännikkö pyrkii teosten myötä räjäyttämään kokemuksen eri genrejen tai taiteenlajien kahlitsevuudesta niin, että jäljelle jää paljas, humaani ilmaisu. Teos tuo vaihtoehdon alan koville ja kilpailullisille arvoille, joissa suoritus menee henkilökohtaisen hyvinvoinnin edelle.",
        "Ella Männikkö is an audiovisual poet whose training and roots lie in western classical music. Her work TWO COLORS comprises two video installations combining poetry and solo viola, BUTTERFLIES and ORANGE, which comment on classical music culture and its shortcomings. To the artist herself, the works manifest primarily through color, symbolizing the return of color to life.\n\nThrough these works, she seeks to shatter the experience of being constrained by specific genres or art forms, leaving behind only raw, human expression. The work offers an alternative to the field's harsh, competitive values, where performance often takes over personal well-being."
      ),
    }),
    artEntry({
      id: "dialogue-with-nature",
      title: "Pinngortitarlu Oqaloqatigiinneq (Dialogue With Nature)",
      artist: "Dennis Tulugaq",
      website: "https://film.gl/portfolio-item/dennis-moller/",
      websiteLabel: "film.gl",
      img: imgDialogueWithNature,
      location: t(
        "Ulkoinstallaatio, Lapinlahden laituri · su 23.8. klo 22–23",
        "Outdoor installation, Lapinlahden laituri · Sun 23 Aug 22–23",
        "Utomhusinstallation, Lappvikens brygga · sön 23.8. kl. 22–23"
      ),
      desc: t(
        "Super 8 -filmille kuvattua visuaalista runoutta – kutsu toimintaan luonnon suojelemiseksi. Nostalgian tuntua, aitouden makua keinotekoisuuden maailmassa. Unenomainen tunnelma, leijuva olo ja kaipaus kahden maailman – kaupungin ja maaseudun – välissä. Kerrottu kalaallisutiksi (grönlanniksi), englanninkielisellä tekstityksellä.\n\nDennis Tulugaq on grönlantilainen elokuvaohjaaja, kuvaaja ja tuottaja, joka asuu Nesoddenissa Norjassa. Tuotantoyhtiönsä Tulugaq Filmsin kautta hän kehittää dokumentti- ja fiktioprojekteja, joiden juuret ovat alkuperäiskansojen ja arktisen alueen tarinankerronnassa. Häntä ohjaa motto: \"Strengthening Indigenous stories, one story at a time.\"",
        "Visual poetry shot on super 8, a call for action on preservation of nature. A sense of nostalgia, a taste of realness in a world of artificiality. Dreamlike atmosphere, floaty feeling and longing in between two worlds, urban and rural. Narrated in Kalaallisut (Greenlandic) with English subtitles.\n\nDennis Tulugaq is a Greenlandic film director, cinematographer and producer based in Nesodden, Norway. Through his production company Tulugaq Films, he develops documentary and fiction projects rooted in Indigenous and Arctic storytelling. He is guided by his personal motto: \"Strengthening Indigenous stories, one story at a time.\""
      ),
    }),
    artEntry({
      id: "elephant-in-the-room",
      title: "The Elephant in the Room",
      artist: "Maria Teplykh",
      handle: "maria_teplykh_art",
      img: imgElephant,
      location: t(
        "Lapinlahden Lähteen eteläinen puistoalue · pe–su",
        "Southern park area of Lapinlahden Lähde · Fri–Sun",
        "Södra parkområdet vid Lappvikskällan · fre–sön"
      ),
      desc: t(
        "Viisi tuolia seisoo nurmikolla. Jokainen niistä on merkitty vuosiluvulla: 1910, 1940, 1970, 2000 ja 2026. Ne edustavat eri sukupolvia, eri aikakausia sekä hiljaista perintöä siitä, mistä puhutaan – ja mistä vaietaan.\n\nTuolit ovat pehmeitä, pehmustettuja ja tuttuja. Niiden istuimissa näkyy kuitenkin kuivuneen kuukautisveren jälkiä: tavallinen ja luonnollinen ruumiillinen ilmiö, jonka sukupolvet naisiksi ja kuukautisia kokeviksi ihmisiksi identifioituvia ovat kokeneet, mutta joka on pitkään pysynyt suljettujen ovien takana, kiertoilmaisujen, häpeän ja hiljaisuuden peitossa.\n\nInstallaatio tuo tämän hiljaisuuden näkyväksi. Tuolien tahrat muuttuvat fyysisiksi jäljiksi sukupolvelta toiselle siirtyvästä perinnöstä – ei pelkästään biologisesta kokemuksesta, vaan myös siihen liittyvästä peritystä vaikenemisesta, epämukavuudesta ja häpeästä. Viimeinen tuoli, vuodelta 2026, makaa maassa. Ehkä hiljaisuus on jatkunut tarpeeksi kauan.\n\nMaria Teplykh (she/they) on kuvanveistäjä ja mielenterveystietoisuutta edistävä taiteilija. Hän toimii Helsinki International Artists' Association ry:n puheenjohtajana, jossa hän järjestää näyttelymahdollisuuksia Suomessa asuville kansainvälisille ja marginaaliasemassa oleville taiteilijoille.",
        "Five chairs stand on the grass, each marked with a year: 1910, 1940, 1970, 2000, 2026. They represent different generations, different moments in time, and the quiet inheritance of what is spoken about — and what is not.\n\nThe chairs are soft, cushioned and familiar. Yet their seats bear the traces of dried menstrual blood: an ordinary, natural bodily occurrence experienced by generations of women and people who menstruate, but one that has so often remained hidden behind closed doors, euphemisms, embarrassment and silence.\n\nThe installation brings this silence into the open. The stains on the chairs become physical traces of a heritage passed from one generation to another — not only the biological experience itself, but also the inherited discomfort, secrecy and silence surrounding it. The final chair, marked 2026, lies on the ground. Perhaps the silence has lasted long enough.\n\nMaria Teplykh (she/they) is a sculptor and mental health awareness artist. She is the chairperson of the Helsinki International Artists' Association ry, where she arranges exhibition opportunities for marginalised international artists living in Finland.",
        "Fem stolar står på gräset. Var och en är märkt med ett årtal: 1910, 1940, 1970, 2000 och 2026. De representerar olika generationer, olika tidsperioder och det tysta arv som handlar om vad vi talar om – och vad vi väljer att tiga om.\n\nStolarna är mjuka, stoppade och välbekanta. På sitsarna syns dock spår av torkat menstruationsblod – en vanlig och naturlig kroppslig erfarenhet som generationer av kvinnor och personer som menstruerar har delat, men som länge har dolts bakom stängda dörrar, omskrivningar, skam och tystnad.\n\nInstallationen gör denna tystnad synlig. Fläckarna på stolarna blir fysiska spår av ett arv som förs vidare mellan generationer – inte bara den biologiska erfarenheten, utan också den nedärvda tystnaden, skammen och obehaget. Den sista stolen, märkt 2026, ligger omkullvältd på marken. Kanske har tystnaden varat tillräckligt länge.\n\nMaria Teplykh (she/they) är skulptör och konstnär med fokus på psykisk hälsa. Hon är ordförande för Helsinki International Artists' Association rf, där hon arbetar för att skapa utställningsmöjligheter för internationella och marginaliserade konstnärer bosatta i Finland."
      ),
    }),
  ];

  return { films, shortFilms, music, workshops, art, now: null };
};

export default buildCatalog;
