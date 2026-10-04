const STORAGE_KEY = 'memory-game-leaderboard';

export function getResults() {
    const text = localStorage.getItem(STORAGE_KEY);

    if (text === null) {
        return [];
    }

    return JSON.parse(text);
}

export function addResult(moves) {
    const results = getResults();

    results.push({ moves: moves, date: Date.now() });

    results.sort((a, b) => {
        if (a.moves !== b.moves) {
            return a.moves - b.moves;
        }
        return a.date - b.date;
    });

    const topTen = results.slice(0, 10);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(topTen));
}