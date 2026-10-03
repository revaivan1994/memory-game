import { createHeader } from './components/header.js';
import { createBoard } from './game.js';

const header = createHeader(
  () => console.log('New game clicked'),
  () => console.log('Leaderboard clicked'),
);
const board = createBoard();

document.body.append(header, board);