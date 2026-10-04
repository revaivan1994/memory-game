import { createHeader } from './components/header.js';
import { createModal } from './components/modal.js';
import { createGame, startGame } from './game.js';
import { createButton } from './utils/createButton.js';
import { getResults } from './storage/leaderboard.js';
import { createLeaderboardTable } from './components/leaderboardTable.js';

const modal = createModal();


function showLeaderboard() {
  const title = document.createElement('h2');
  title.textContent = 'Leaderboard';
  const results = getResults();
  let body;
  if (results.length === 0) {
    body = document.createElement('p');
    body.textContent = 'No results yet';
  } else {
    body = createLeaderboardTable(results);
  }

  const closeButton = createButton('Close', modal.close);

  modal.open(title, body, closeButton);
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