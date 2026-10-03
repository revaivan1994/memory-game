import { createHeader } from './components/header.js';
import { createGame } from './game.js';

const header = createHeader(
  () => console.log('New game clicked'),
  () => console.log('Leaderboard clicked'),
);
const game = createGame();

document.body.append(header, game);