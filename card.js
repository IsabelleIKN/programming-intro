// Keycards and pixel pictures, shared by the game (index.html) and the print sheet (cards.html).
//
// A card is a number from 0 to 4095, and everything on it follows from that number:
// the code on the front, the key of its cipher, its rumor, and the bug its owner wins.
// Only the words differ per language, so a card printed in one language works in the other.

const Card = (() => {
  const ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';   // for codes: no I, O, 0 or 1, which look alike in print
  const COUNT = 4096;

  // ── the code on the front ──
  // The card number is stirred, so that card 12 and card 13 don't get codes that look alike,
  // and a checksum is added, so that a typing mistake or a guess is almost never a valid card.
  const STIR = 1217, SALT = 911;            // STIR is odd: no two cards can be stirred into the same number
  let UNSTIR = 1;
  while (STIR * UNSTIR % COUNT !== 1) UNSTIR += 2;
  const checksum = m => ((m * 73) ^ (m >> 4) ^ 0xA5) & 255;

  function code(n) {
    const m = (n * STIR + SALT) % COUNT, bits = m << 8 | checksum(m);
    return [15, 10, 5, 0].map(s => CHARS[bits >> s & 31]).join('');
  }

  // The card number behind what somebody typed, or null when it is not a card.
  function read(text) {
    const t = [...String(text).toUpperCase().replace(/[\s-]/g, '')];
    if (t.length !== 4 || t.some(c => !CHARS.includes(c))) return null;
    const bits = t.reduce((b, c) => b << 5 | CHARS.indexOf(c), 0), m = bits >> 8;
    return (bits & 255) === checksum(m) ? (m - SALT + COUNT) * UNSTIR % COUNT : null;
  }

  // ── the cipher ──
  const key = n => n % 25 + 1;              // 1 to 25: a key of 0 or 26 would scramble nothing
  // Moves every letter k places along the alphabet (back, when k is negative); anything else stays as it is.
  const shift = (text, k) => [...text].map(ch => ABC.includes(ch) ? ABC[(ABC.indexOf(ch) + k + 26) % 26] : ch).join('');

  // ── the bug ──
  // 5 × 5 squares, mirrored left to right. The second row is the same on every bug (two eyes);
  // each of the other four rows takes three bits of the card number. So every card has its own bug.
  function grid(n) {
    return [0, 1, 2, 3, 4].map(r => {
      if (r === 1) return [1, 0, 1, 0, 1];
      const half = n >> (r ? r - 1 : 0) * 3 & 7;
      return [0, 1, 2, 1, 0].map(c => half >> c & 1);
    });
  }

  // Shapes with a proper body. The rest (a lone pair of eyes, a solid block) stay out of the deck.
  const ones = x => x.toString(2).replace(/0/g, '').length;
  const nice = n => ones(n) >= 6 && ones(n) <= 9 && ones(n >> 3 & 7) >= 2 && (n >> 6 & 7) > 0;

  // The bugs that live in the game itself. Their numbers are kept out of the deck.
  const RESERVED = [1790, 2526, 3455, 1463, 2941, 3003, 1723, 2779, 1502, 3549, 2493, 3290, 1978];

  // Every card that may be printed, in an order that is random but the same every time.
  const DECK = (() => {
    const all = [];
    for (let n = 0; n < COUNT; n++) if (nice(n) && !RESERVED.includes(n)) all.push(n);
    let seed = 20261012;
    const random = () => (seed = Math.imul(seed, 1103515245) + 12345 & 0x7fffffff) / 0x80000000;
    for (let i = all.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [all[i], all[j]] = [all[j], all[i]];
    }
    return all;
  })();

  // ── pixel pictures ──
  // A picture is written as rows of letters; PAINT says which color each letter is.
  const PAINT = { k: '#1a1420', y: '#ffd23f', d: '#e8a917', o: '#ff8a1f', w: '#ffffff', l: '#f1f5f9' };
  const COLORS = ['#ef4444', '#f97316', '#22c55e', '#06b6d4', '#8b5cf6', '#ec4899', '#84cc16', '#eab308'];

  function picture(rows, px = 8) {
    const c = document.createElement('canvas'), g = c.getContext('2d');
    c.width = rows[0].length * px; c.height = rows.length * px;
    rows.forEach((row, y) => [...row].forEach((ch, x) => {
      if (!PAINT[ch]) return;
      g.fillStyle = PAINT[ch];
      g.fillRect(x * px, y * px, px, px);
    }));
    return c.toDataURL();
  }

  function bug(n, color = COLORS[n % COLORS.length], px = 8) {
    const c = document.createElement('canvas'), g = c.getContext('2d');
    c.width = c.height = 5 * px;
    grid(n).forEach((row, y) => row.forEach((on, x) => {
      if (on) { g.fillStyle = color; g.fillRect(x * px, y * px, px, px); }
      else if (y === 1) {   // an eye: white, with the pupil looking sideways
        g.fillStyle = '#fff'; g.fillRect(x * px, y * px, px, px);
        g.fillStyle = PAINT.k; g.fillRect(x * px + px / 2, y * px + px / 4, px / 2, px / 2);
      }
    }));
    return c.toDataURL();
  }

  const DUCK = picture([
    '......kkkk......',
    '.....kyyyyk.....',
    '....kyywyyyk....',
    '....kyyykyykkk..',
    '....kyyyyyyoook.',
    '....kyyyyyykkk..',
    '.k...kyyyyyk....',
    'kyk.kyyyyyyyk...',
    'kyykyyyyyyyyyk..',
    'kyyyyyyyyyyyyyk.',
    'kydyyyyddyyyyyk.',
    '.kddyyyyyyyydk..',
    '..kddddddddddk..',
    '...kkkkkkkkkk...',
  ]);

  const POWER = picture([
    '....l....',
    '..l.l.l..',
    '.l..l..l.',
    'l...l...l',
    'l.......l',
    'l.......l',
    '.l.....l.',
    '..lllll..',
  ], 3);

  // ── the card itself ──
  // The words on a card are in text.js (L.card), in the language in use. There is one rumor
  // per card and each points at a secret bug. They are dealt in turn through the deck, so any
  // seven cards in a row, and every printed sheet of nine, have all seven between them.
  function rumor(n) {
    const place = DECK.indexOf(n);   // -1 for a card that is not in the deck: it still gets a rumor
    const { rumors } = L.card;
    return rumors[(place < 0 ? n : place) % rumors.length];
  }

  const cells = text => [...text].map(c => `<td>${c}</td>`).join('');
  const strip = (letters, k) =>
    `<table class="kc-strip"><tr class="kc-dark">${cells(letters)}</tr><tr>${cells(shift(letters, -k))}</tr></table>`;

  // `number` is only there so that the people handing out the cards can count them.
  function front(n, number = 0) {
    const k = key(n), w = L.card;
    return `<div class="keycard">
      <div class="kc-head"><img src="${DUCK}" alt=""><div><b>${w.title}</b><span>${w.under}</span></div></div>
      <div class="kc-pair">
        <div class="kc-box"><span>${w.code}</span><b>${code(n)}</b></div>
        <div class="kc-box kc-key"><span>${w.key}</span><b>${k}</b></div>
      </div>
      <div class="kc-how">${w.how}</div>
      ${strip(ABC.slice(0, 13), k)}${strip(ABC.slice(13), k)}
      <div class="kc-foot"><span>${w.rumor}${rumor(n)}</span><i>${number ? w.number + number : ''}</i></div>
    </div>`;
  }

  // The back is the same on every card, so the two sides never have to line up exactly.
  function back() {
    const row = `<tr>${'<td></td>'.repeat(5)}</tr>`, w = L.card;
    return `<div class="keycard kc-back">
      <div class="kc-head"><div><b>${w.license}</b><span>${SETTINGS.organisation || w.issuer}</span></div></div>
      <div class="kc-name">${w.name}</div>
      <div class="kc-bug"><table>${row.repeat(5)}</table><span>${w.bug}</span></div>
      <div class="kc-words"><span>${w.ask}</span>${w.ideas}</div>
      <div class="kc-foot"><span>${local(SETTINGS.invitation)}</span><i>${SETTINGS.link}</i></div>
    </div>`;
  }

  // Every size is in em, so the card is as big as its font-size says: 1em is 2mm on paper.
  document.head.insertAdjacentHTML('beforeend', `<style>
    .keycard {
      font-size: 2mm; width: 31.5em; height: 44em; padding: 1.5em; flex: none;
      background: #fffdf4; color: #1a1420; font-family: 'Jersey 10', Arial, sans-serif; line-height: 1;
      display: flex; flex-direction: column; gap: 1.1em; text-align: left; overflow: hidden;
    }
    .keycard, .keycard * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .kc-head { display: flex; align-items: center; gap: 1.2em; background: #1a1420; margin: -1.5em -1.5em 0; padding: 1em 1.5em; }
    .kc-head img { width: 5.5em; image-rendering: pixelated; }
    .kc-head b { display: block; font-size: 2.7em; font-weight: normal; color: #ffd23f; text-transform: uppercase; letter-spacing: .04em; }
    .kc-head span { display: block; font-size: 1.5em; color: #cbd5e1; }
    .kc-pair { display: flex; gap: 1em; }
    .kc-box { flex: 1; border: .3em solid #1a1420; padding: .6em .9em .3em; display: flex; flex-direction: column; }
    .kc-key { flex: 0 0 9em; background: #ffd23f; }
    .kc-box span { font-size: 1.5em; text-transform: uppercase; letter-spacing: .08em; }
    .kc-box b { font-size: 6em; font-weight: normal; letter-spacing: .08em; }
    .kc-how { font-size: 1.6em; line-height: 1.05; }
    .kc-how b { font-weight: normal; text-transform: uppercase; }
    .kc-strip { border-collapse: collapse; width: 100%; table-layout: fixed; }
    .kc-strip td { font: bold 2.15em/1.65 ui-monospace, Menlo, Consolas, monospace; text-align: center; border: .08em solid #1a1420; padding: 0; }
    .kc-dark td { background: #1a1420; color: #fff; }
    .kc-foot { margin-top: auto; display: flex; justify-content: space-between; align-items: flex-end; gap: 1em; }
    .kc-foot span { font-size: 1.5em; line-height: 1.05; }
    .kc-foot i { font-size: 1.3em; font-style: normal; color: #8b8594; white-space: nowrap; }

    .kc-back .kc-head { padding: 1.3em 1.5em; }
    .kc-name { font-size: 1.5em; text-transform: uppercase; letter-spacing: .08em; border-bottom: .14em solid #1a1420; padding: 1.2em 0 .3em; }
    .kc-bug { display: flex; align-items: center; gap: 1.4em; }
    .kc-bug table { border-collapse: collapse; flex: none; }
    .kc-bug td { width: 3.7em; height: 3.7em; border: .14em solid #1a1420; padding: 0; }
    .kc-bug span { font-size: 1.5em; line-height: 1.05; }
    .kc-words { font-size: 1.6em; line-height: 1.1; text-transform: uppercase; letter-spacing: .04em; }
    .kc-words span { display: block; text-transform: none; letter-spacing: 0; color: #5b5566; }
  </style>`);

  return { ABC, DECK, RESERVED, DUCK, POWER, code, read, key, shift, grid, bug, picture, front, back };
})();
