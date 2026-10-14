// Settings for the game (index.html) and for the printed cards (cards.html).
// Change the text between the quotes; leave it empty ('') to hide that line.

const SETTINGS = {
  language: 'nl',     // the language the game starts in: 'nl' or 'en'. Players can switch at any time.

  // Who is running this. It is shown as the logo, on the cards and in the game: the square
  // mark with the name next to it, one word per line. Leave empty for no logo.
  organisation: 'Grafisch Lyceum Utrecht',
  // The real logo, as a file. The start page shows it for as long as the quiz still looks
  // normal; once the quiz breaks, and on the cards, the logo is drawn in pixels instead.
  // Leave empty to use the pixel one from the start.
  logoImage: 'art/logo.png',
  link: '',           // a short web address, e.g. 'example.org/openday'
  invitation: {       // the last line a player reads, also on the back of the cards
    nl: 'Leuk gevonden? Dat was programmeren. Kom ons vragen wat je nog meer kunt bouwen.',
    en: 'Liked that? That was programming. Come and ask us what else you could build.',
  },
  prize: {            // e.g. 'Show this screen at the stand and pick a sticker.'
    nl: '',
    en: '',
  },

  idleSeconds: 180,   // start over for the next player when nobody has touched the screen this long (0 = never)
  sound: true,        // whether sound starts switched on
};
