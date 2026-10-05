import { formatDate } from "../utils/formatDate.js";

function createRow(cellTag, values) {
    const row = document.createElement('tr');

    values.forEach(value => {
        const cell = document.createElement(cellTag);
        cell.textContent = value;
        row.append(cell);
    });
    return row;
}

export function createLeaderboardTable(results) {
    const table = document.createElement('table');
    table.className = 'leaderboard';

    const thead = document.createElement('thead');
    thead.append(createRow('th', ['Place', 'Moves', 'Date']));

    const tbody = document.createElement('tbody');
    results.forEach((result, index) => {
        tbody.append(createRow('td', [index + 1, result.moves, formatDate(result.date)]));
    });

    table.append(thead, tbody);

    return table;
}