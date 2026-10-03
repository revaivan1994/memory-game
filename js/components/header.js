import { createButton } from '../utils/createButton.js';

export function createHeader(onNewGame, onShowLeaderboard) {
  const header = document.createElement('header');
  header.className = 'header';

  const title = document.createElement('h1');
  title.textContent = 'Sea Memory';

  const newGameButton = createButton('New Game', onNewGame);
  const leaderboardButton = createButton('Leaderboard', onShowLeaderboard);

  header.append(title, newGameButton, leaderboardButton);
  return header;
}