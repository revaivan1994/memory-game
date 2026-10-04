import { CARD_NAMES } from './data/cards.js';
import { shuffle } from './utils/shuffle.js';
import { createCard } from './components/card.js';

let firstCard = null;
let timerId = null;
let isLocked = false;
let moves = 0;
let pairsFound = 0;
let isFinished = false;
let onWin = null;

const TOTAL_PAIRS = CARD_NAMES.length;

const movesText = document.createElement('p');
const pairsText = document.createElement('p');

const board = document.createElement('div');
board.className = 'board';

export function startGame() {
  clearTimeout(timerId);

  firstCard = null;
  isLocked = false;
  moves = 0;
  pairsFound = 0;
  isFinished = false;

  const deck = shuffle([...CARD_NAMES, ...CARD_NAMES]);
  const cards = deck.map((name) => createCard(name, handleCardClick));
  board.replaceChildren(...cards);

  updateStats();
}

function updateStats() {
  movesText.textContent = `Moves: ${moves}`;
  pairsText.textContent = `Pairs: ${pairsFound} of ${TOTAL_PAIRS}`;
}

function handleCardClick(card) {
  if (card.classList.contains('card--open') || isLocked || isFinished) {
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
    if (pairsFound === TOTAL_PAIRS) {
      isFinished = true;
      onWin(moves);
    }
  } else {
    isLocked = true;
    timerId = setTimeout(() => {
      previousCard.classList.remove('card--open');
      card.classList.remove('card--open');
      isLocked = false;
    }, 1000);
  }

  updateStats();
}

export function createGame(onWinCallback) {
  onWin = onWinCallback;
  const stats = document.createElement('div');
  stats.className = 'stats';
  stats.append(movesText, pairsText);

  startGame();

  const game = document.createElement('main');
  game.append(stats, board);

  return game;
}