const title = document.createElement('h1');
title.textContent = 'Sea Memory';
document.body.append(title);

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

document.body.append(newGameButton, leaderboardButton);