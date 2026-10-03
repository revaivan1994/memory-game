import { CARD_NAMES } from './data/cards.js';
import { shuffle } from './utils/shuffle.js';
import { createCard } from './components/card.js';

function handleCardClick(card) {
  card.classList.add('card--open');
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