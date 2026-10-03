import { CARD_NAMES } from "./data/cards.js";
import { shuffle } from "./utils/shuffle.js";

const title = document.createElement('h1');
title.textContent = 'Sea Memory';


const header = document.createElement('header');
header.className = 'header';

function createButton(text, onClick) {
    const button = document.createElement('button');
    button.textContent = text;
    button.setAttribute('type', 'button');
    button.addEventListener('click', onClick);
    return button;
}

const newGameButton = createButton('New Game', () => {
    console.log('New game clicked');
});
const leaderboardButton = createButton('Leaderboard', () => {
    console.log('Leaderboard clicked');
});

document.body.append(header);
header.append(title, newGameButton, leaderboardButton);

const cardName = 'whale';


function createCard(name) {
    const image = document.createElement('img');
    image.src = `./assets/cards/${name}.svg`;
    image.alt = name;

    const card = document.createElement('button');
    card.className = 'card';
    card.setAttribute('type', 'button');
    card.append(image);

    return card;
}


const board = document.createElement('div');
board.className = 'board';

const deck = shuffle([...CARD_NAMES, ...CARD_NAMES]);

deck.forEach((name) => {
    const card = createCard(name);
    board.append(card);
});


document.body.append(board);