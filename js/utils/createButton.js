export function createButton(text, onClick) {
  const button = document.createElement('button');
  button.textContent = text;
  button.setAttribute('type', 'button');
  button.addEventListener('click', onClick);
  return button;
}