import { CARD_NAMES } from './data/cards.js';
import { shuffle } from './utils/shuffle.js';
import { createCard } from './components/card.js';

let firstCard = null;
let isLocked = false;

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

  if (previousCard.dataset.name === card.dataset.name) {
    previousCard.classList.add('card--matched');
    card.classList.add('card--matched');
  } else {
    isLocked = true;
    setTimeout(() => {
      previousCard.classList.remove('card--open');
      card.classList.remove('card--open');
      isLocked = false;
    }, 1000);
  }
}

export function createBoard() {
  const board = document.createElement('div');
  board.className = 'board';

  const deck = shuffle([...CARD_NAMES, ...CARD_NAMES]);

  deck.forEach((name) => {
    const card = createCard(name, handleCardClick);
    board.append(card);
  });

  return board;
}