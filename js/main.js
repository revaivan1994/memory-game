import { createHeader } from './components/header.js';
import { createModal } from './components/modal.js';
import { createGame, startGame } from './game.js';
import { createButton } from './utils/createButton.js';

const modal = createModal();

function showLeaderboard() {
  const title = document.createElement('h2');
  title.textContent = 'Leaderboard';

  const text = document.createElement('p');
  text.textContent = 'No results yet';

  const closeButton = createButton('Close', modal.close);

  modal.open(title, text, closeButton);
}

function showWinModal(moves) {
  const title = document.createElement('h2');
  title.textContent = 'You won!';

  const text = document.createElement('p');
  text.textContent = `Moves: ${moves}`;

  const newGameButton = createButton('New Game', () => {
    modal.close();
    startGame();
  });
  const closeButton = createButton('Close', modal.close);

  modal.open(title, text, newGameButton, closeButton);
}

const header = createHeader(
  startGame,
  showLeaderboard,
);
const game = createGame(showWinModal);

document.body.append(header, game);