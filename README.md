# The Totally Normal Quiz

A 10-minute introduction to programming for people who have never written code, made for open days, PR events and school visits.

It looks like a dull quiz. One question in, the Next button starts running away, and the developer's rubber duck explains that the quiz is full of bugs and the developer has gone to lunch. The player types the code from a paper **keycard**, which unlocks "developer mode": the code behind the screen appears under the quiz. From there they fix six bugs by reading that code and changing it. Nobody types real syntax; the code is plain sentences with yellow boxes that can be changed.

## Running it

Open `index.html` in a browser. There is nothing to install and it needs no internet connection, so it also works from a USB stick. To put it online, copy the whole folder to any web host.

It is made for a laptop, an iMac or a monitor. The quiz and its code sit side by side under the duck, and the whole game fits on the screen without scrolling when the browser window is about 650 pixels high or more; only the first half of the last bug needs some 75 pixels extra. On a very large screen the game stays its own size at the top: zoom the browser in (Ctrl or Cmd with +) until it fills the screen. In a window narrower than 900 pixels, such as a tablet held upright or a phone, the code moves under the quiz and the player scrolls down to it.

## Languages

The game is in Dutch ("De Doodgewone Quiz") and English, and starts in Dutch. A player switches with the button at the top right, on the start screen or at any time during play. The bug they are working on starts again in the other language; caught bugs, name and card are kept. The next player gets the starting language again.

- To start in English everywhere, set `language: 'en'` in `settings.js`.
- To start in English from one link or QR code only, add `?lang=en` to the address: `index.html?lang=en`.
- `cards.html` has a language choice at the top and prints the cards in that language. Codes and keys are the same in both, so a card printed in one language works in the other; only the words on it differ.

## The cards

Open `cards.html` and press Print: A4, 100 % scale, nine cards per sheet, each the size of a playing card. With "with backs" ticked, every second page is a sheet of backs for double-sided printing.

Every card is different. On the front:

- a **card code**, which unlocks developer mode in the game;
- a **key** and a **decoder strip**, needed for the last bug;
- a **rumor**, which hints at one of the secret bugs. There are seven, one for each secret bug, dealt in turn: any seven cards in a row, and so every sheet of nine, have all seven between them. Hand a group cards that were printed next to each other and they can find every secret by comparing.

The back has a 5 × 5 grid. At the end, the game gives each player a bug of their own as five rows of ones and zeros, to fill in on that grid with a pen. Have a few pens at the stand.

A player without a card can pick "I have no card" and borrow one on screen, so the game never depends on the stack of paper.

## At the stand

- **Next player:** the button on the last screen, or "Start over" in the bug jar.
- **Walked away:** after three minutes without a touch the game asks "Still there?" and then starts over by itself. Change or switch off the time in `settings.js`.
- **Stuck:** the Hint button gives three hints per bug, the last one literal. It starts bouncing when a player has had the hints available for half a minute without asking for one.
- **Demonstrating:** open `index.html?staff` for a small bar that steps through the stages.
- **Sound:** the Sound button in the game, or `sound` in `settings.js`.

## What players do

| Bug | What is broken | What they do | The idea |
| --- | --- | --- | --- |
| The Runaway | The Next button jumps away from the pointer | Change what the button does when something comes near | event |
| Mr. Undefined | "Nice work, undefined!" | Fill in `playerName`, and watch it change in three places | variable |
| The Scrambler | The quiz says "Correct!" before asking, then waits forever | Put four lines in the right order | sequence |
| The Yes-Bug | Every answer is correct | Fix the `if` | condition |
| The Finger-Breaker | "Click 100 times to prove you are not a robot" | Let a `repeat` do the clicking | loop |
| The Gibberish | The last question is scrambled | Decode one word by hand with the card, then turn those steps into a program | algorithm |

The last screen names the six ideas, shows the decoder again as real Python, and hands out the bug to draw.

## Secret bugs (spoilers)

Nobody has to find these. They reward poking at things the quiz never asked about.

| Secret bug | How |
| --- | --- |
| The Squeaker | Squeeze the duck five times |
| The Cheater | Change `score` while fixing Mr. Undefined |
| Off And On Again | Press the power button at the top right |
| Off By One | Let the loop stop at exactly 99 clicks |
| The Overflow | Ask the loop for 1000 clicks or more |
| The Inspector | Open the browser's own developer tools (F12) and follow the note in the console |
| The Hard Way | Click all 100 clicks by hand |

## Changing things

- `settings.js`: the starting language, the organisation, a web address, the invitation and an optional prize line (each in both languages), the idle time, sound. The organisation's name is shown as the logo: the square mark with the name next to it, one word per line. It appears in the top bar, on the last screen and on both sides of the cards. The mark itself is drawn in `card.js` (`MARK`). Under the quiz window, for as long as the quiz still looks normal, the game shows the real logo file instead (`logoImage`, now `art/logo.png`); it turns into the pixel version the moment the quiz breaks.
- `text.js`: every word of the game and of the cards, one block per language. Change wording here. For a third language, copy a block and translate it; the switch then steps through all of them. The notes at the top of the file say what to leave untouched.
- `index.html`: how the game works. Each stage has its own block under `STAGES`.
- `card.js`: how card codes, keys and bugs are derived from a card's number, and what the cards look like. Changing the numbers at the top makes cards that are already printed stop working.

The font is Jersey 10 (SIL Open Font License).
