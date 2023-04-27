const vocabulary = {
  en: [
    { name: 'Esc', isFunc: true },
    { name: '1', isFunc: false },
    { name: '2', isFunc: false },
    { name: '3', isFunc: false },
    { name: '4', isFunc: false },
    { name: '5', isFunc: false },
    { name: '6', isFunc: false },
    { name: '7', isFunc: false },
    { name: '8', isFunc: false },
    { name: '9', isFunc: false },
    { name: '0', isFunc: false },
    { name: '+', isFunc: false },
    { name: '-', isFunc: false },
    { name: '=', isFunc: false },
    { name: '~', isFunc: false },
    { name: 'Tab', isFunc: true },
    { name: 'q', isFunc: false },
    { name: 'w', isFunc: false },
    { name: 'e', isFunc: false },
    { name: 'r', isFunc: false },
    { name: 't', isFunc: false },
    { name: 'y', isFunc: false },
    { name: 'u', isFunc: false },
    { name: 'i', isFunc: false },
    { name: 'o', isFunc: false },
    { name: 'p', isFunc: false },
    { name: '[', isFunc: false },
    { name: ']', isFunc: false },
    { name: 'Backspace', isFunc: true },
    { name: 'Caps lock', isFunc: true },
    { name: 'a', isFunc: false },
    { name: 's', isFunc: false },
    { name: 'd', isFunc: false },
    { name: 'f', isFunc: false },
    { name: 'g', isFunc: false },
    { name: 'h', isFunc: false },
    { name: 'j', isFunc: false },
    { name: 'k', isFunc: false },
    { name: 'l', isFunc: false },
    { name: ';', isFunc: false },
    { name: "'", isFunc: false },
    { name: 'Enter', isFunc: true },
    { name: 'Shift', isFunc: true },
    { name: 'z', isFunc: false },
    { name: 'x', isFunc: false },
    { name: 'c', isFunc: false },
    { name: 'v', isFunc: false },
    { name: 'b', isFunc: false },
    { name: 'n', isFunc: false },
    { name: 'm', isFunc: false },
    { name: ',', isFunc: false },
    { name: '.', isFunc: false },
    { name: '?', isFunc: false },
  ],
};
const screen = document.createElement('div');
screen.className = 'screen';

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
const body = document.querySelector('body');

body.appendChild(screen);
body.appendChild(keyboard);

const mainContainer = document.createElement('div');
mainContainer.className = 'mainContainer';
keyboard.appendChild(mainContainer);

const createKey = (element) => {
  const key = document.createElement('div');
  key.className = 'key';
  element.isFunc ? key.classList.add('key_func') : '';
  element.name === 'Enter' ? (key.style.width = '80px') : '';
  const keyTop = document.createElement('div');
  keyTop.className = 'key-top';
  keyTop.textContent = element.name;
  key.appendChild(keyTop);
  mainContainer.appendChild(key);
};

vocabulary.en.forEach((el) => createKey(el));
