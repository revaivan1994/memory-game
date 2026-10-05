# Sea Memory

A simple memory game. Find all pairs of sea animals.

## How to play

- There are 16 cards on the board. Every picture is on 2 cards.
- Click a card to open it. Then click one more card.
- If the pictures are the same, the cards stay open.
- If the pictures are different, the cards close after 1 second.
- Find all 8 pairs to win. Try to win in a small number of moves.
- Click **New Game** to start again.
- Click **Leaderboard** to see the 10 best results.

The best results are saved in your browser (localStorage).
You can close the browser and see them again later.

## How to run

The game uses JavaScript modules.
You can not open `index.html` with a double click.
You need a local server.

1. Download the project:

```bash
   git clone https://github.com/revaivan1994/memory-game.git
   cd memory-game
   git checkout memory-game
```

2. Start a local server. Choose one way:

   - **VS Code:** install the **Live Server** extension.
     Right click on `index.html` and choose **Open with Live Server**.
   - **Terminal:** run this command in the project folder:

```bash
     npx serve .
```

     Then open the link from the terminal in your browser.

## Built with

- HTML, CSS, JavaScript
- No libraries and no frameworks
- All page elements are made with `document.createElement`

## Credits

- Card icons: [Fluent Emoji](https://github.com/microsoft/fluentui-emoji) by Microsoft, MIT License
- Font: [Fredoka](https://fonts.google.com/specimen/Fredoka), SIL Open Font License