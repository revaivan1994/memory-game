export function createCard(name, onCardClick) {
  const image = document.createElement('img');
  image.src = `./assets/cards/${name}.svg`;
  image.alt = name;

  const back = document.createElement('span');
  back.className = 'card__face card__face--back';

  const front = document.createElement('span');
  front.className = 'card__face card__face--front';
  front.append(image);

  const inner = document.createElement('span');
  inner.className = 'card__inner';
  inner.append(back, front);

  const card = document.createElement('button');
  card.className = 'card';
  card.setAttribute('type', 'button');
  card.dataset.name = name;
  card.append(inner);

  card.addEventListener('click', () => {
    onCardClick(card);
  });
  
  return card;
}