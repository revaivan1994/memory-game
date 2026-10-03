import { createHeader } from './components/header.js';
import { createGame, startGame } from './game.js';

const header = createHeader(
  () => startGame(),
  () => console.log('Leaderboard clicked'),
);
const game = createGame();

document.body.append(header, game);