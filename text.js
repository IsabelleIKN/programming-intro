// Every word of the game (index.html) and of the cards (cards.html), in each language.
//
// To change wording, change it here. To add a language, copy one whole block (from `nl: {`
// to its closing `},`), give it its own two-letter code, and translate what is between the
// quotes. The first language in this file is the one the switch offers first.
//
// What to leave alone while translating:
//   ${…}                is filled in by the game: a number, a name, an answer.
//   The lines of code   are written with a few marks that give them their colors:
//                       "text"   **keyword**   [a thing on the screen]   $variable
//                       and {name} for a yellow box. The word inside { } must stay as it is.
//   The order of lists: the answers to a question, the rumors, the ranks.

const TEXT = {

  // ══════════════════════════════════════════════
  // NEDERLANDS
  // ══════════════════════════════════════════════
  nl: {
    name: 'Nederlands',
    decimal: ',',                       // 2,7 seconden
    title: 'De Doodgewone Quiz',
    ok: 'Oké',
    correct: 'Goed! 🎉',
    wrong: 'Fout ✖',
    question: n => `Vraag ${n} van 4`,
    goto: 'ga naar de volgende vraag',  // a line of code that two questions share
    someone: 'iemand',                  // a player who never gave a name
    // how long the quiz took: "2 minuten en 7 seconden"
    took(m, s) {
      const some = (n, one, many) => `${n} ${n === 1 ? one : many}`;
      return m ? some(m, 'minuut', 'minuten') + (s ? ' en ' + some(s, 'seconde', 'seconden') : '') : some(s, 'seconde', 'seconden');
    },

    // ── the screen around the quiz ──
    hud: { title: 'Bugjacht', card: 'Kaart', cardTip: 'Je kaart', sound: 'Geluid', soundTip: 'Geluid aan / uit', jarTip: 'De bugs die je hebt gevangen', power: 'Aan / uit' },
    app: { player: 'Speler:', score: 'Score:', foot: 'QuizMaster 3000 · versie 0.4 (niet af)' },
    code: { behind: 'de code achter het scherm', run: '▶ Uitvoeren', up: 'Omhoog', down: 'Omlaag' },
    duck: { name: 'De eend', tip: 'De badeend van de programmeur' },
    hint: { first: 'Hint', n: (i, of) => `Hint ${i} van ${of}`, again: 'Zeg dat nog eens' },
    unlock: {
      ask: 'Typ de kaartcode. Vier tekens, op de voorkant.',
      ok: 'Ontgrendel', none: 'Ik heb geen kaart', got: 'Begrepen',
      unknown: 'Die kaart ken ik niet. Kijk nog eens naar de vier tekens onder “kaartcode”.',
      borrow: 'Geen kaart? Leen de mijne maar. Je hebt hem straks weer nodig: hij blijft bovenaan onder de knop Kaart staan.',
      flash: 'Programmeursmodus ontgrendeld',
    },
    caught: {
      tag: (n, of) => `Bug gevangen · ${n} van ${of}`, repeat: 'Opnieuw gevangen',
      call: idea => `Programmeurs noemen dit <b>${idea}</b>`,
      next: 'Verder', back: 'Terug naar de pot', again: 'Speel deze opnieuw',
    },
    secret: { tag: 'Geheime bug', caught: name => `Geheime bug gevangen: ${name}`, more: 'Kijk in de pot om er meer over te lezen.' },
    jar: {
      title: 'De pot met bugs', close: 'Sluiten', reset: 'Opnieuw beginnen',
      tag: 'In de pot', loose: 'Nog op vrije voeten', secrets: (n, of) => `Geheime bugs · ${n} van ${of}`,
    },
    // the power button: what the quiz says while it switches off and on again
    boot: left => ['QuizMaster 3000 wordt uitgeschakeld.', '', '…', '', 'Wordt weer ingeschakeld.', 'Geheugen controleren: in orde.',
      `Bugs tellen: nog ${left} op vrije voeten.`, 'Toch maar opstarten.'],
    // for whoever opens the browser's own developer tools
    console: {
      hello: 'Kwak.',
      note: 'Je hebt de echte ontwikkelaarstools geopend: hier zoeken echte programmeurs naar echte bugs.\nTyp eend() en druk op Enter.',
      done: 'Kwak. Geheime bug gevangen.',
    },
    chat: { title: 'QuizMaster 3000 · teamchat', ok: 'Verder', dev: 'programmeur', duck: 'eend' },
    idle: { title: 'Ben je er nog?', text: n => `Het spel begint opnieuw voor de volgende speler over ${n}…`, ok: 'Ik ben er nog' },
    staff: 'Nieuwe speler',

    // ── the bugs ──
    // `idea` is what programmers call the thing the player just used, `word` the same without
    // "een"; `text` goes on the card that shows when the bug is caught.
    bugs: {
      runaway: { name: 'De Wegloper', idea: 'een event', word: 'event',
        text: '“Als dit gebeurt, doe dan dat.” Achter elke knop op elk scherm dat je ooit hebt aangeraakt zit zo’n regel. Je hebt er net een gelezen. En daarna veranderd.' },
      undefined: { name: 'Meneer Undefined', idea: 'een variabele', word: 'variabele',
        text: 'Een doos met een naam erop. Je stopt er één keer iets in en het programma kan het overal gebruiken. Laat je de doos leeg, dan krijg je “Hallo, undefined”. Echte apps zeggen dat elke dag tegen echte mensen.' },
      scrambler: { name: 'De Husselaar', idea: 'een sequentie', word: 'sequentie',
        text: 'Een computer voert je regels één voor één uit, van boven naar beneden, precies zoals ze er staan. Hij denkt nooit: “dat zullen ze wel zo bedoeld hebben”. Dezelfde regels in een andere volgorde zijn een ander programma.' },
      yesbug: { name: 'De Jaknikker', idea: 'een voorwaarde', word: 'voorwaarde',
        text: '“Als dit zo is, doe dan dat. Anders doe je iets anders.” Zo neemt een programma een beslissing. Elke keer dat je “verkeerd wachtwoord” te zien kreeg, kwam dat door zo’n regel.' },
      clicker: { name: 'De Vingerbreker', idea: 'een loop', word: 'loop',
        text: 'Zeg tegen een computer dat hij iets moet herhalen en hij doet het: honderd keer of een miljard keer, zonder zich te vervelen, zonder moe te worden. Wordt een klus saai, dan gaat een programmeur op zoek naar de loop.' },
      cipher: { name: 'De Wartaal', idea: 'een algoritme', word: 'algoritme',
        text: 'Je nam iets wat je met de hand kon doen en schreef het op als stappen die een computer kan volgen. Dat recept ontcijfert nu elk bericht, met elke sleutel, in een oogwenk. Dat is de hele truc.' },

      // the secret ones
      duck: { name: 'De Pieper',
        text: 'Programmeurs hebben echt een badeend op hun bureau staan. Leg je probleem hardop uit aan de eend, en vaak hoor je het antwoord zelf al. Dat heet rubber duck debugging.' },
      cheater: { name: 'De Valsspeler',
        text: 'Je veranderde een getal waar niemand om had gevraagd, gewoon om te kijken wat er zou gebeuren. De helft van programmeren is precies dat.' },
      reboot: { name: 'Uit En Weer Aan',
        text: 'De oudste oplossing die er is. Het werkt omdat opnieuw opstarten de warboel wegveegt waar het programma zichzelf in had gewerkt.' },
      offbyone: { name: 'Eentje Ernaast',
        text: '99 in plaats van 100. Er eentje naast zitten, eentje te weinig of eentje te veel, overkomt programmeurs zo vaak dat het een naam heeft: een off-by-one-fout.' },
      overflow: { name: 'De Overflow',
        text: 'Je goot veel te veel kliks in een balk die voor honderd was gebouwd. Als een getal te groot wordt voor de ruimte die een programma ervoor heeft, gaat er iets stuk. In 1996 ging zo een gloednieuwe raket verloren.' },
      inspector: { name: 'De Inspecteur',
        text: 'Je hebt de echte ontwikkelaarstools geopend. Elke browser heeft ze, voor elke webpagina, en hier jagen echte programmeurs op echte bugs.' },
      hardway: { name: 'De Doorzetter',
        text: 'Honderd kliks, met de hand. Een loop doet dat sneller dan jij met je ogen kunt knipperen, maar weigeren om op te geven is ook een programmeursvaardigheid.' },
    },

    // The duck's hints: three per bug, from vague to literal.
    hints: {
      runaway: [
        'De knop doet niet expres moeilijk. Iets zegt hem dat hij moet bewegen, en dat staat opgeschreven in de code.',
        'Regel 2 licht op, elke keer dat de knop ontsnapt. Kijk naar het gele vakje op die regel.',
        'Klik op het gele vakje op regel 2 en kies “blijven staan”. Druk dan op Volgende.',
      ],
      undefined: [
        'De quiz bewaart wat hij weet in dozen met een naam erop. Eén van die dozen is leeg.',
        'Op regel 1 staat spelernaam = … en dan niets. Daar komt “undefined” vandaan.',
        'Klik op het gele vakje op regel 1 en typ je naam. Druk dan op de knop Verder.',
      ],
      scrambler: [
        'Een computer begint bij regel 1 en werkt naar beneden. Hij slaat nooit iets over en hij gokt nooit.',
        'Wat moet er op het scherm staan voordat de quiz op een klik kan wachten? Met de pijltjes schuif je een regel omhoog of omlaag.',
        'Van boven naar beneden: toon de vraag, toon de antwoordknoppen, wacht op een klik, toon “Goed!”. Druk dan op Uitvoeren.',
      ],
      yesbug: [
        'Nu ziet de quiz geen verschil tussen een goed en een fout antwoord. Ergens moet hij een beslissing nemen.',
        'Regel 4 bepaalt wat goed is. Op dit moment: wat dan ook.',
        'Zet het gele vakje op regel 4 op Python, druk op Uitvoeren en klik een antwoord aan.',
      ],
      clicker: [
        'Programmeurs zijn lui op de best mogelijke manier: ze doen nooit honderd keer hetzelfde met de hand.',
        'Regel 7 en 8 kunnen voor jou op de knop drukken. Hoe vaak, dat bepaalt het gele vakje.',
        'Typ 100 in het gele vakje op regel 7 en druk op Uitvoeren.',
      ],
      byhand: [
        'Op je kaart staan twee soorten rijen: donkere met de versleutelde letters, lichte met de echte letters.',
        'Zoek de eerste versleutelde letter op in een donkere rij op je kaart. De letter er recht onder is de echte. Typ die.',
        'Het eerste woord is VRAAG.',
      ],
      decoder: [
        'Het programma doet wat jij met de hand deed: een letter pakken, terugschuiven, opschrijven. Maar hoe ver terug? En voor hoeveel letters?',
        'Regel 1 wil het SLEUTEL-getal van je kaart. Regel 3 bepaalt hoeveel letters er worden gedaan.',
        'Zet sleutel op de SLEUTEL van je kaart, zet regel 3 op “elke letter” en druk op Uitvoeren.',
      ],
    },

    // ── the start ──
    start: {
      sub: '4 makkelijke vragen. Er kan echt helemaal niets misgaan.',
      go: 'Start de quiz',
      small: 'Ongeveer 10 minuten · Geen ervaring nodig · Houd je kaart bij de hand',
    },

    // ── bug 1: the button that runs away ──
    q1: {
      text: 'Wat is een computerprogramma?',
      answers: ['Magie', 'Een lijst instructies voor een heel snelle machine die alles heel letterlijk neemt', 'Iets wat alleen genieën kunnen maken', 'Een soort broodje'],
      next: 'Volgende',
    },
    runaway: {
      say1: 'Kwak. Die knop blijft nooit stilstaan. Het ligt niet aan jou: het is een bug. Deze quiz zit er vol mee. De programmeur is gaan lunchen voordat de quiz af was.',
      who: 'Wie zei dat?',
      say2: 'Hier beneden. Ik ben de badeend van de programmeur. Ik weet waar de bugs zitten, maar ik heb geen handen. Jij wel. Heb je een kaart gekregen?',
      yes: 'Ja, ik heb een kaart', no: 'Geen kaart',
      intro: 'Dit is de code: de instructies die dit scherm volgt. Een regel licht op als hij wordt uitgevoerd. Toe maar, jaag nog eens op die knop en kijk wat er gebeurt.',
      see: 'Zie je regel 2 oplichten, elke keer dat hij ontsnapt? Het gele vakje op die regel kun je veranderen.',
      file: 'vraag-1.code',
      near: '**wanneer** de muis of een vinger in de buurt komt van [Volgende]:',
      act: '[Volgende] moet {do}',
      click: '**wanneer** er op [Volgende] wordt geklikt:',
      // what the button can do, and what the duck says about each
      modes: { jump: 'wegspringen', stay: 'blijven staan', spin: 'ronddraaien', grow: 'groter worden', hide: 'zich verstoppen' },
      reply: {
        jump: 'En weg is hij weer.',
        stay: 'Eindelijk rust. Toe maar, druk erop.',
        spin: 'Stijlvol. Het telt nog steeds: druk erop.',
        grow: 'Subtiel. Nou, missen kun je hem nu niet meer.',
        hide: 'En… weg is hij. Zo loopt hij in elk geval niet meer weg. Iets anders proberen?',
      },
    },

    // ── bug 2: undefined ──
    undef: {
      label: 'Tussenstand',
      nice: 'Goed gedaan, ',
      as: 'Verder als ',
      warn: '⚠ Kan niet verder: spelernaam is leeg.',
      empty: 'nog niets',
      intro: '“Goed gedaan, undefined.” Charmant. De quiz wil je begroeten, maar niemand heeft hem ooit verteld wie je bent.',
      told: 'Je vulde één doos, en het veranderde overal waar het programma die doos gebruikt. Druk op de knop als je tevreden bent met je naam.',
      file: 'tussenstand.code',
      name: '$spelernaam = {name}',
      score: '$score = {score}',
      hello: '**toon** "Goed gedaan, " + $spelernaam + "!"',
      points: '**toon** "Score: " + $score',
      button: '**toon** een knop: "Verder als " + $spelernaam',
    },

    // ── bugs 3 and 4: question 2 ── the first answer is the right one
    q2: {
      text: 'Welke van deze is een programmeertaal?',
      answers: ['Python', 'Ratelslang', 'Leguaan', 'Schildpad'],
      idle: 'Nog niets op het scherm. Het programma is nog niet uitgevoerd.',
      waiting: '⏳ Wachten op een klik op een antwoord…',
      stuck: '⏳ Nog steeds aan het wachten. Dat zou eeuwig doorgaan. (Programma gestopt.)',
      file: 'vraag-2.code',
      code: {
        question: '**toon** de vraag',
        buttons: '**toon** de antwoordknoppen',
        wait: '**wacht** op een klik op een antwoord',
        cheer: '**toon** "Goed! 🎉"',
        if: '**als** het antwoord {right} is:',
        else: '**anders**:',
        boo: '**toon** "Fout ✖"',
        any: 'wat dan ook',
      },
    },
    scrambler: {
      intro: 'Vraag 2. Eens kijken hoe deze erbij staat…',
      first: 'Hij juichte al voordat hij iets vroeg, en nu wacht hij op een klik op knoppen die hij nooit heeft laten zien. Elke regel klopt. De volgorde niet. Met de pijltjes verplaats je een regel.',
      stuck: 'Vast. Hij wacht op een klik op knoppen die nog niet op het scherm staan. Dat houdt hij met alle plezier eeuwig vol.',
      early: 'Hij zei “Goed!” voordat je antwoord gaf. Dat is geen vriendelijkheid: die regel staat gewoon eerder.',
      blind: 'Je moest antwoorden voordat je de vraag kon lezen. Pittige quiz.',
      odd: 'Eerst de knoppen, dan de vraag? Apart. Maar het werkt, en bij programmeren is er zelden maar één goed antwoord.',
      won: 'Vragen, wachten, en dan pas juichen. Nu staat het in een volgorde die klopt.',
    },
    yesbug: {
      intro: 'Nog één ding over deze vraag. Druk op Uitvoeren en probeer Schildpad.',
      introRight: 'Je koos Python en hij zei “Goed!”. Terecht. Maar druk nog eens op Uitvoeren en probeer Schildpad.',
      introWrong: picked => `Wacht even. Je koos ${picked} en hij zei “Goed!”? Druk op Uitvoeren en probeer er nog een paar.`,
      any: picked => `${picked}: “Goed!” Dat zegt hij tegen wat dan ook. Dat komt door regel 4.`,
      believes: right => `De quiz gelooft nu heilig dat ${right} een programmeertaal is. Hij gelooft alles wat regel 4 hem vertelt.`,
      called: (picked, right) => `Hij rekende ${picked} fout, omdat regel 4 zegt dat alleen ${right} goed is. Is ${right} een programmeertaal?`,
      meant: '“Goed!” En deze keer meent hij het.',
      honest: '“Fout.” Eindelijk een beetje eerlijkheid.',
    },

    // ── bug 5: a hundred clicks ──
    clicker: {
      title: 'Bewijs dat je geen robot bent.',
      sub: 'Klik 100 keer op de knop.',
      button: 'Klik',
      intro: 'Honderd kliks. Nou, succes ermee.',
      offer: left => `Nog ${left} te gaan. Je kunt blijven klikken… of doen wat programmeurs doen als een klus saai is: de computer het laten doen. Ik heb onderaan twee regels toegevoegd.`,
      zero: 'Herhaal 0 keer. Klaar! Er gebeurde niets, precies zoals opgedragen.',
      ninetynine: '99. Net niet. Er eentje naast zitten is een van de beroemdste fouten in het programmeren. Nog één klik en je bent er.',
      sofar: (clicks, n) => `Tot nu toe ${clicks}. De loop deed precies ${n} klik${n === 1 ? '' : 's'}, zoals opgedragen. Hoeveel heb je er nodig?`,
      overflow: n => `Je vroeg om ${n} kliks. De balk was voor honderd gebouwd, dus hij liep over. De quiz had er trouwens maar 100 nodig.`,
      spirit: byHand => `Honderd kliks, en jouw vinger deed er maar ${byHand} van. Zo hoort het.`,
      // under the bar when it is full: finished by the loop, all by hand, or a bit of both
      doneLoop: (clicks, last, secs) => `✔ ${clicks} kliks. De loop deed de laatste ${last === 1 ? '' : last + ' '}in ${secs} seconden. Absoluut geen robot.`,
      doneHand: secs => `✔ 100 kliks in ${secs} seconden, allemaal met de hand. Verdacht menselijk.`,
      doneBoth: '✔ 100 kliks, jij en de loop samen. Absoluut geen robot.',
      file: 'vraag-3.code',
      code: {
        when: '**wanneer** er op [Klik] wordt geklikt:',
        add: 'tel 1 op bij $kliks',
        reach: '**wanneer** $kliks 100 bereikt:',
        repeat: '**herhaal** {times} **keer**:',
        press: 'klik op [Klik]',
      },
    },

    // ── bug 6: the scrambled question ── its first word is the one decoded by hand
    cipher: {
      question: 'VRAAG VIER: WIE HEEFT DEZE QUIZ GEREPAREERD?',
      answers: ['DE PROGRAMMEUR', 'DE EEND'],   // the third answer is the player's own name…
      me: 'ik',                                 // …or this, for a player without one
      take: 'Pak je kaart. Zoek elke letter op in een donkere rij: de echte letter staat er recht onder.',
      intro: 'De laatste! Oei. De programmeur heeft hem versleuteld zodat niemand kon spieken: elke letter is een paar plaatsen opgeschoven in het alfabet. Op je kaart staat een decodeerstrook. Probeer het eerste woord.',
      written: left => `Eén woord, en dat duurde even. Nog ${left} letters te gaan… verveel je je al? Mooi. Uit verveling worden programma’s geboren. Ik heb opgeschreven wat je net deed, als code.`,
      oneWrong: k => `Hij deed het! Hij pakte de eerste letter en schoof die ${k} plaats${k === 1 ? '' : 'en'} terug. Is ${k} de SLEUTEL op je kaart?`,
      oneRight: 'Eén letter, en hij klopt. Laat hem nu elke letter doen.',
      nonsense: 'De loop werkt: kijk hem eens gaan. Maar het resultaat is nog steeds onzin. Is de sleutel het getal op je kaart?',
      solved: 'Daar staat hij. Toe maar, geef antwoord.',
      developer: 'De programmeur zat de hele tijd een broodje te eten.',
      duck: 'Gevleid. Maar ik heb geen handen, weet je nog?',
      file: 'decoder.code',
      code: {
        todo: '// TODO: de decoder schrijven (na de lunch)',
        key: '$sleutel = {key}',
        for: '**voor** {span} **van het bericht**:',
        move: 'schuif hem $sleutel plaatsen terug in het alfabet',
        show: 'toon hem',
        spans: { first: 'de eerste letter', all: 'elke letter' },
      },
    },

    // ── the end ──
    // The developer comes back: who speaks ('' for nobody, 'dev' or 'duck') and what they say.
    finale: (name, bugs, time) => [
      ['', 'De programmeur is terug van de lunch.'],
      ['dev', 'Sorry! Lange rij bij de broodjes. Zo, tijd om die quiz te repar'],
      ['dev', '…waarom werkt alles?'],
      ['dev', `Wie heeft er ${bugs} bugs opgelost${time ? ' in ' + time : ''}?!`],
      ['duck', `Kwak. (Dat was ${name}.)`],
      ['dev', `${name}?! Je hebt code gelezen. Je hebt code veranderd. Je hebt een loop je werk laten doen.`],
      ['dev', 'Meer is het vak niet. Welkom bij het team.'],
    ],
    end: {
      license: 'Bugjagersdiploma',
      ranks: ['Junior bugjager', 'Bugjager', 'Senior bugjager', 'Eendenfluisteraar'],   // for 0, 1, 3 and 5 secret bugs
      anonymous: 'Anoniem',
      caught: (n, of, time) => `${n} van de ${of} bugs gevangen${time ? ' in ' + time : ''}`,
      score: (score, cheated) => `score ${score}${cheated ? ' (we weten wat je gedaan hebt)' : ''}`,
      names: 'Alles wat je net deed heeft een naam',
      own: 'Je eigen bug',
      ownText: borrowed => `Elke programmeur krijgt vroeg of laat een eigen bug. Deze komt uit jouw kaart: geen enkele andere kaart levert dezelfde op.
        Nu ben <b>jij</b> de computer. ${borrowed ? 'Vraag een kaart bij de stand, draai hem om' : 'Draai je kaart om'} en voer dit programma uit met een pen:
        1 betekent het vakje inkleuren, 0 betekent leeg laten.`,
      secrets: (n, of) => `Geheime bugs · ${n} van ${of}`,
      all: 'Allemaal. De eend is sprakeloos.',
      hiding: 'Ze verstoppen zich overal waar de quiz je nooit vroeg te kijken. Vergelijk het gerucht op jouw kaart met dat van iemand anders.',
      jar: 'Open de pot en jaag verder',
      real: 'Hetzelfde in een echte taal',
      python: { key: 'sleutel', message: 'bericht', alphabet: 'alfabet' },   // what the Python calls its variables
      pythonText: 'Dit is Python, en het doet precies wat jouw decoder deed. De spelling is strenger. Het idee had je al.',
      next: 'Volgende speler',
    },

    // ── the paper cards ──
    // One rumor per card, each pointing at a secret bug, in the same order in every language.
    card: {
      title: 'Programmeurspas', under: 'opent de code achter het scherm', code: 'kaartcode', key: 'sleutel',
      how: '<b>Decodeerstrook.</b> Zoek de versleutelde letter in een donkere rij. De echte staat er recht onder.',
      rumor: 'Gerucht: ', number: 'Nr. ',
      license: 'Bugjagersdiploma', issuer: 'uitgereikt door een badeend', name: 'Naam',
      bug: 'Mijn bug. Speel het spel uit en je ziet welke vakjes je moet inkleuren.',
      ask: 'Vraag me wat dit zijn:', ideas: 'event · variabele · sequentie<br>voorwaarde · loop · algoritme',
      rumors: [
        'de eend kan niet tegen kietelen.',
        'niemand controleert ooit de score.',
        'de aan-uitknop doet het nog.',
        '99 is een ongeluksgetal.',
        'sommige getallen zijn te groot voor hun balk.',
        'echte programmeurs drukken op F12.',
        'echte helden klikken elke klik zelf.',
      ],
    },
    // the page that prints them
    print: {
      title: 'Kaarten om af te drukken',
      language: 'Taal:', cards: 'Kaarten:', from: 'vanaf nummer', backs: 'met achterkant', print: 'Afdrukken',
      note: 'Druk af op stevig A4-papier, op 100 % (niet “passend maken”). Met achterkant: druk dubbelzijdig af; elke tweede pagina is een vel achterkanten. Elk nummer is een andere kaart, dus begin de volgende stapel waar deze ophield.',
    },
  },

  // ══════════════════════════════════════════════
  // ENGLISH
  // ══════════════════════════════════════════════
  en: {
    name: 'English',
    decimal: '.',
    title: 'The Totally Normal Quiz',
    ok: 'Okay',
    correct: 'Correct! 🎉',
    wrong: 'Wrong ✖',
    question: n => `Question ${n} of 4`,
    goto: 'go to the next question',
    someone: 'somebody',
    took(m, s) {
      const some = (n, what) => `${n} ${what}${n === 1 ? '' : 's'}`;
      return m ? some(m, 'minute') + (s ? ' and ' + some(s, 'second') : '') : some(s, 'second');
    },

    // ── the screen around the quiz ──
    hud: { title: 'Bug Hunt', card: 'Card', cardTip: 'Your keycard', sound: 'Sound', soundTip: 'Sound on / off', jarTip: 'The bugs you have caught', power: 'Power' },
    app: { player: 'Player:', score: 'Score:', foot: 'QuizMaster 3000 · version 0.4 (unfinished)' },
    code: { behind: 'the code behind the screen', run: '▶ Run', up: 'Move up', down: 'Move down' },
    duck: { name: 'The duck', tip: 'The developer’s rubber duck' },
    hint: { first: 'Hint', n: (i, of) => `Hint ${i} of ${of}`, again: 'Say that again' },
    unlock: {
      ask: 'Type the card code. Four characters, on the front.',
      ok: 'Unlock', none: 'I have no card', got: 'Got it',
      unknown: 'I do not know that card. Check the four characters under “card code”.',
      borrow: 'No card? Then borrow mine. You will need it again later: it stays under the Card button at the top.',
      flash: 'Developer mode unlocked',
    },
    caught: {
      tag: (n, of) => `Bug caught · ${n} of ${of}`, repeat: 'Caught again',
      call: idea => `Programmers call this <b>${idea}</b>`,
      next: 'Continue', back: 'Back to the jar', again: 'Play this one again',
    },
    secret: { tag: 'Secret bug', caught: name => `Secret bug caught: ${name}`, more: 'Open the jar to read about it.' },
    jar: {
      title: 'The bug jar', close: 'Close', reset: 'Start over',
      tag: 'In the jar', loose: 'Still on the loose', secrets: (n, of) => `Secret bugs · ${n} of ${of}`,
    },
    boot: left => ['QuizMaster 3000 is switching off.', '', '…', '', 'Switching on again.', 'Checking memory: fine.',
      `Counting bugs: ${left} still on the loose.`, 'Starting anyway.'],
    console: {
      hello: 'Quack.',
      note: 'You opened the real developer tools: this is where actual developers look for actual bugs.\nType duck() and press Enter.',
      done: 'Quack. Secret bug caught.',
    },
    chat: { title: 'QuizMaster 3000 · team chat', ok: 'Continue', dev: 'developer', duck: 'duck' },
    idle: { title: 'Still there?', text: n => `Starting over for the next player in ${n}…`, ok: 'I am still here' },
    staff: 'New player',

    // ── the bugs ──
    bugs: {
      runaway: { name: 'The Runaway', idea: 'an event', word: 'event',
        text: '“When this happens, do that.” Every button on every screen you have ever touched has a line like that behind it. You just read one. Then you changed it.' },
      undefined: { name: 'Mr. Undefined', idea: 'a variable', word: 'variable',
        text: 'A box with a name on it. Put something in once, and the program can use it everywhere. Leave it empty and you get “Hello, undefined”, which real apps say to real people every day.' },
      scrambler: { name: 'The Scrambler', idea: 'a sequence', word: 'sequence',
        text: 'A computer runs your lines one at a time, top to bottom, exactly as written. It never thinks “they probably meant…”. The same lines in a different order are a different program.' },
      yesbug: { name: 'The Yes-Bug', idea: 'a condition', word: 'condition',
        text: '“If this, do that. Otherwise, do something else.” That is how a program makes a decision. Every “wrong password” you have ever seen came from a line like this one.' },
      clicker: { name: 'The Finger-Breaker', idea: 'a loop', word: 'loop',
        text: 'Tell a computer to repeat something and it will: a hundred times or a billion, never bored, never tired. When a job gets boring, a programmer starts looking for the loop.' },
      cipher: { name: 'The Gibberish', idea: 'an algorithm', word: 'algorithm',
        text: 'You took something you could do by hand and wrote it down as steps a computer can follow. That recipe now unscrambles any message, with any key, in a blink. That is the whole trick.' },

      // the secret ones
      duck: { name: 'The Squeaker',
        text: 'Programmers really do keep a rubber duck on the desk. Explain your problem to the duck, out loud, and you often hear the answer yourself. It is called rubber duck debugging.' },
      cheater: { name: 'The Cheater',
        text: 'You changed a number that nobody asked you to change, just to see what would happen. Half of programming is exactly that.' },
      reboot: { name: 'Off And On Again',
        text: 'The oldest fix there is. It works because starting again wipes away whatever muddle the program had got itself into.' },
      offbyone: { name: 'Off By One',
        text: '99 instead of 100. Ending up one short, or one over, happens to programmers so often that it has a name: an off-by-one error.' },
      overflow: { name: 'The Overflow',
        text: 'You poured far too many clicks into a bar that was built for a hundred. When a number gets too big for the space a program gave it, things break. In 1996 a brand-new rocket was lost that way.' },
      inspector: { name: 'The Inspector',
        text: 'You opened the real developer tools. Every browser has them, for every web page, and this is where actual developers hunt actual bugs.' },
      hardway: { name: 'The Hard Way',
        text: 'A hundred clicks, by hand. A loop does that before you can blink, but refusing to give up is a programmer skill too.' },
    },

    hints: {
      runaway: [
        'The button is not being difficult on purpose. Something is telling it to move, and that something is written down in the code.',
        'Line 2 lights up every time the button gets away. Look at the yellow box on that line.',
        'Click the yellow box on line 2 and pick “stay put”. Then press Next.',
      ],
      undefined: [
        'The quiz keeps what it knows in boxes with names on them. One of those boxes is empty.',
        'Line 1 says playerName = … and then nothing. That is where “undefined” comes from.',
        'Click the yellow box on line 1 and type your name. Then press the Continue button.',
      ],
      scrambler: [
        'A computer starts at line 1 and works its way down. It never skips ahead and it never guesses.',
        'What has to be on the screen before the quiz can wait for a click? The arrows move a line up or down.',
        'Top to bottom: show the question, show the answer buttons, wait for a click, show “Correct!”. Then press Run.',
      ],
      yesbug: [
        'Right now the quiz cannot tell a good answer from a bad one. It has to make a decision somewhere.',
        'Line 4 decides what counts as correct. At the moment that is: anything at all.',
        'Set the yellow box on line 4 to Python, press Run, and click an answer.',
      ],
      clicker: [
        'Programmers are lazy in the best way: they never do the same thing a hundred times by hand.',
        'Lines 7 and 8 can press the button for you. How many times is up to the yellow box.',
        'Type 100 in the yellow box on line 7 and press Run.',
      ],
      byhand: [
        'Your card has two kinds of rows: dark ones with the scrambled letters, light ones with the real letters.',
        'Find the first scrambled letter in a dark row on your card. The letter right below it is the real one. Type that.',
        'The first word is LAST.',
      ],
      decoder: [
        'The program does what you did by hand: take a letter, move it back, write it down. But how far back? And for how many letters?',
        'Line 1 wants the KEY number from your card. Line 3 decides how many letters get done.',
        'Set key to the KEY on your card, set line 3 to “every letter”, and press Run.',
      ],
    },

    // ── the start ──
    start: {
      sub: '4 easy questions. Absolutely nothing can go wrong.',
      go: 'Start the quiz',
      small: 'About 10 minutes · No experience needed · Keep your card handy',
    },

    // ── bug 1: the button that runs away ──
    q1: {
      text: 'What is a computer program?',
      answers: ['Magic', 'A list of instructions for a very fast, very literal machine', 'Something only geniuses can make', 'A kind of sandwich'],
      next: 'Next',
    },
    runaway: {
      say1: 'Quack. That button is never going to hold still. It is not you: it is a bug. This quiz is crawling with them. The developer went to lunch before it was finished.',
      who: 'Who said that?',
      say2: 'Down here. I am the developer’s rubber duck. I know where the bugs are, but I have no hands. You do. Did they give you a keycard?',
      yes: 'Yes, I have a card', no: 'No card',
      intro: 'This is the code: the instructions this screen is following. A line lights up when it runs. Go on, chase that button again and watch.',
      see: 'See line 2 light up every time it gets away? The yellow box on that line can be changed.',
      file: 'question-1.code',
      near: '**when** a pointer or a finger comes near [Next]:',
      act: '[Next] should {do}',
      click: '**when** [Next] is clicked:',
      modes: { jump: 'jump away', stay: 'stay put', spin: 'spin around', grow: 'grow bigger', hide: 'hide' },
      reply: {
        jump: 'And it is off again.',
        stay: 'Calm at last. Go on, press it.',
        spin: 'Stylish. It still counts: press it.',
        grow: 'Subtle. Well, you cannot miss it now.',
        hide: 'And… it is gone. That is one way to stop it running. Try something else?',
      },
    },

    // ── bug 2: undefined ──
    undef: {
      label: 'Results so far',
      nice: 'Nice work, ',
      as: 'Continue as ',
      warn: '⚠ Cannot continue: playerName is empty.',
      empty: 'nothing yet',
      intro: '“Nice work, undefined.” Charming. The quiz wants to greet you, but nobody ever told it who you are.',
      told: 'You filled one box, and it changed everywhere the program uses that box. Press the button when you are happy with your name.',
      file: 'results.code',
      name: '$playerName = {name}',
      score: '$score = {score}',
      hello: '**show** "Nice work, " + $playerName + "!"',
      points: '**show** "Score: " + $score',
      button: '**show** a button: "Continue as " + $playerName',
    },

    // ── bugs 3 and 4: question 2 ── the first answer is the right one
    q2: {
      text: 'Which of these is a programming language?',
      answers: ['Python', 'Rattlesnake', 'Iguana', 'Tortoise'],
      idle: 'Nothing on the screen yet. The program has not run.',
      waiting: '⏳ Waiting for a click on an answer…',
      stuck: '⏳ Still waiting. It would wait forever. (Program stopped.)',
      file: 'question-2.code',
      code: {
        question: '**show** the question',
        buttons: '**show** the answer buttons',
        wait: '**wait** for a click on an answer',
        cheer: '**show** "Correct! 🎉"',
        if: '**if** the answer is {right}:',
        else: '**otherwise**:',
        boo: '**show** "Wrong ✖"',
        any: 'anything at all',
      },
    },
    scrambler: {
      intro: 'Question 2. Let us see what state this one is in…',
      first: 'It cheered before it asked anything, and now it is waiting for a click on buttons it never showed. Every line is fine. The order is not. The arrows move a line.',
      stuck: 'Stuck. It is waiting for a click on buttons that are not on the screen yet. It will happily wait forever.',
      early: 'It said “Correct!” before you answered. It is not being nice: that line simply comes first.',
      blind: 'You had to answer before you could read the question. Tough quiz.',
      odd: 'Buttons first, then the question? Unusual. But it works, and in programming there is rarely just one right answer.',
      won: 'Ask, wait, and only then cheer. Now it is in an order that makes sense.',
    },
    yesbug: {
      intro: 'One more thing about this question. Press Run and try Tortoise.',
      introRight: 'You picked Python and it said “Correct!”. Fair enough. But press Run again and try Tortoise.',
      introWrong: picked => `Hold on. You picked ${picked} and it said “Correct!”? Press Run and try a few more.`,
      any: picked => `${picked}: “Correct!” It says that to anything at all. Line 4 is why.`,
      believes: right => `The quiz now firmly believes ${right} is a programming language. It believes whatever line 4 tells it.`,
      called: (picked, right) => `It called ${picked} wrong, because line 4 says only ${right} will do. Is ${right} a programming language?`,
      meant: '“Correct!” And this time it means it.',
      honest: '“Wrong.” Finally, some honesty.',
    },

    // ── bug 5: a hundred clicks ──
    clicker: {
      title: 'Prove you are not a robot.',
      sub: 'Click the button 100 times.',
      button: 'Click',
      intro: 'A hundred clicks. Off you go, I suppose.',
      offer: left => `${left} to go. You could keep clicking… or do what programmers do when a job is boring: make the computer do it. I added two lines at the bottom.`,
      zero: 'Repeat 0 times. Done! Nothing happened, exactly as instructed.',
      ninetynine: '99. So close. Being off by one is one of the most famous mistakes in programming. One more click should do it.',
      sofar: (clicks, n) => `${clicks} so far. The loop did exactly ${n} click${n === 1 ? '' : 's'}, as instructed. How many do you need?`,
      overflow: n => `You asked for ${n} clicks. The bar was built for a hundred, so it overflowed. The quiz only needed 100, by the way.`,
      spirit: byHand => `A hundred clicks, and your finger only did ${byHand} of them. That is the spirit.`,
      doneLoop: (clicks, last, secs) => `✔ ${clicks} clicks. The loop did the last ${last === 1 ? 'one' : last} in ${secs} seconds. Definitely not a robot.`,
      doneHand: secs => `✔ 100 clicks in ${secs} seconds, every one of them by hand. Suspiciously human.`,
      doneBoth: '✔ 100 clicks, between you and the loop. Definitely not a robot.',
      file: 'question-3.code',
      code: {
        when: '**when** [Click] is clicked:',
        add: 'add 1 to $clicks',
        reach: '**when** $clicks reaches 100:',
        repeat: '**repeat** {times} **times**:',
        press: 'click [Click]',
      },
    },

    // ── bug 6: the scrambled question ── its first word is the one decoded by hand
    cipher: {
      question: 'LAST QUESTION: WHO FIXED THIS QUIZ?',
      answers: ['THE DEVELOPER', 'THE DUCK'],
      me: 'me',
      take: 'Take your card. Find each letter in a dark row: the real letter is right below it.',
      intro: 'Last one! Oh. The developer scrambled it so nobody could peek: every letter was pushed a few places along the alphabet. Your card has a decoder strip. Try the first word.',
      written: left => `One word, and that took a while. ${left} letters to go… bored yet? Good. Boredom is where programs come from. I wrote down what you just did, as code.`,
      oneWrong: k => `It ran! It took the first letter and moved it ${k} place${k === 1 ? '' : 's'} back. Is ${k} the KEY on your card?`,
      oneRight: 'One letter, and it is right. Now make it do every letter.',
      nonsense: 'The loop works: look at it go. But the result is still nonsense. Is the key the number on your card?',
      solved: 'There it is. Go on, answer it.',
      developer: 'The developer was eating a sandwich the entire time.',
      duck: 'Flattered. But I have no hands, remember?',
      file: 'decoder.code',
      code: {
        todo: '// TODO: write the decoder (after lunch)',
        key: '$key = {key}',
        for: '**for** {span} **of the message**:',
        move: 'move it $key places back in the alphabet',
        show: 'show it',
        spans: { first: 'the first letter', all: 'every letter' },
      },
    },

    // ── the end ──
    finale: (name, bugs, time) => [
      ['', 'The developer is back from lunch.'],
      ['dev', 'Sorry! Long queue for the sandwiches. Right, time to fix that qui'],
      ['dev', '…why does everything work?'],
      ['dev', `Who fixed ${bugs} bugs${time ? ' in ' + time : ''}?!`],
      ['duck', `Quack. (It was ${name}.)`],
      ['dev', `${name}?! You read code. You changed code. You made a loop do your work for you.`],
      ['dev', 'That is the whole job. Welcome to the team.'],
    ],
    end: {
      license: 'Bug hunter license',
      ranks: ['Junior Bug Hunter', 'Bug Hunter', 'Senior Bug Hunter', 'Duck Whisperer'],
      anonymous: 'Anonymous',
      caught: (n, of, time) => `${n} of ${of} bugs caught${time ? ' in ' + time : ''}`,
      score: (score, cheated) => `score ${score}${cheated ? ' (we know what you did)' : ''}`,
      names: 'What you just did has names',
      own: 'Your own bug',
      ownText: borrowed => `Every developer ends up with a bug of their own. This one came out of your card: no other card makes the same one.
        Now <b>you</b> be the computer. ${borrowed ? 'Ask for a card at the stand, turn it over' : 'Turn your card over'} and run this program with a pen:
        1 means fill the square, 0 means leave it empty.`,
      secrets: (n, of) => `Secret bugs · ${n} of ${of}`,
      all: 'Every single one. The duck is speechless.',
      hiding: 'They hide wherever the quiz never asked you to look. Compare the rumor on your card with somebody else’s.',
      jar: 'Open the jar and keep hunting',
      real: 'The same thing in a real language',
      python: { key: 'key', message: 'message', alphabet: 'alphabet' },
      pythonText: 'This is Python, and it does exactly what your decoder did. The spelling is stricter. The idea is the one you already had.',
      next: 'Next player',
    },

    // ── the paper cards ──
    card: {
      title: 'Developer keycard', under: 'opens the code behind the screen', code: 'card code', key: 'key',
      how: '<b>Decoder strip.</b> Find the scrambled letter in a dark row. The real letter is right below it.',
      rumor: 'Rumor has it… ', number: 'No. ',
      license: 'Bug hunter license', issuer: 'issued by a rubber duck', name: 'Name',
      bug: 'My bug. Finish the game and it tells you which squares to fill in.',
      ask: 'Ask me what these are:', ideas: 'event · variable · sequence<br>condition · loop · algorithm',
      rumors: [
        'the duck is ticklish.',
        'nobody ever checks the score.',
        'the power button still works.',
        '99 is an unlucky number.',
        'some numbers are too big for their bar.',
        'real developers press F12.',
        'true heroes click every click by hand.',
      ],
    },
    print: {
      title: 'Keycards to print',
      language: 'Language:', cards: 'Cards:', from: 'starting at number', backs: 'with backs', print: 'Print',
      note: 'Print on A4 card stock at 100 % (no “fit to page”). With backs: print double-sided; every second page is a sheet of backs. Each number is a different card, so start the next batch where this one stopped.',
    },
  },
};


// ══════════════════════════════════════════════
// WHICH LANGUAGE
// ══════════════════════════════════════════════

const LANGUAGES = Object.keys(TEXT);
let LANG = '';   // the code of the language in use, e.g. 'nl'
let L = null;    // and its words: L.title, L.hud.card, …

// Switches to a language; one this file does not have becomes the first one that it does.
function useLanguage(code) {
  LANG = TEXT[code] ? code : LANGUAGES[0];
  L = TEXT[LANG];
  document.documentElement.lang = LANG;
  return LANG;
}
// The language the switch offers: the one after the one in use.
const nextLanguage = () => LANGUAGES[(LANGUAGES.indexOf(LANG) + 1) % LANGUAGES.length];
// A setting that may differ per language is written as { nl: '…', en: '…' }; plain text is the same in all.
const local = setting => typeof setting === 'string' ? setting : (setting && setting[LANG]) || '';
