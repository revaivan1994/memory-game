import { createHeader } from './components/header.js';
import { createModal } from './components/modal.js';
import { createGame, startGame } from './game.js';
import { createButton } from './utils/createButton.js';

const modal = createModal();

function showLeaderboard() {
  const title = document.createElement('h2');
  title.textContent = 'Leaderboard';

  const text = document.createElement('p');
  text.textContent = 'No result yet';

  const closeButton = createButton('Close', modal.close);

  modal.open(title, text, closeButton);
}

const header = createHeader(
  () => startGame(),
  () => showLeaderboard(),
);
const game = createGame();

document.body.append(header, game);