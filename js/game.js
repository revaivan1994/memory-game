import { CARD_NAMES } from './data/cards.js';
import { shuffle } from './utils/shuffle.js';
import { createCard } from './components/card.js';

let firstCard = null;
let isLocked = false;
let moves = 0;
let pairsFound = 0;

const TOTAL_PAIRS = CARD_NAMES.length;

const movesText = document.createElement('p');
const pairsText = document.createElement('p');

function updateStats() {
  movesText.textContent = `Moves: ${moves}`;
  pairsText.textContent = `Pairs: ${pairsFound} of ${TOTAL_PAIRS}`;
}

function handleCardClick(card) {
  if (card.classList.contains('card--open') || isLocked) {
    return;
  }
  card.classList.add('card--open');

  if (firstCard === null) {
    firstCard = card;
    return;
  }
  const previousCard = firstCard;
  firstCard = null;
  moves += 1;

  if (previousCard.dataset.name === card.dataset.name) {
    previousCard.classList.add('card--matched');
    card.classList.add('card--matched');
    pairsFound += 1;
  } else {
    isLocked = true;
    setTimeout(() => {
      previousCard.classList.remove('card--open');
      card.classList.remove('card--open');
      isLocked = false;
    }, 1000);
  }

  updateStats();
}

export function createGame() {
  const stats = document.createElement('div');
  stats.className = 'stats';
  stats.append(movesText, pairsText);

  const board = document.createElement('div');
  board.className = 'board';

  const deck = shuffle([...CARD_NAMES, ...CARD_NAMES]);

  deck.forEach((name) => {
    const card = createCard(name, handleCardClick);
    board.append(card);
  });

  updateStats();

  const game = document.createElement('main');
  game.append(stats, board);

  return game;
}