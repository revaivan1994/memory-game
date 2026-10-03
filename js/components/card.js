export function createCard(name, onCardClick) {
  const image = document.createElement('img');
  image.src = `./assets/cards/${name}.svg`;
  image.alt = name;

  const card = document.createElement('button');
  card.className = 'card';
  card.setAttribute('type', 'button');
  card.dataset.name = name;
  card.append(image);

  card.addEventListener('click', () => {
    onCardClick(card);
  });

  return card;
}