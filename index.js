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
    { name: 'Del', isFunc: true },
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
    { name: '"', isFunc: false },
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
    { name: '/', isFunc: false },
    { name: '⬆', isFunc: false },
    { name: '🪄', isFunc: true },
    { name: 'Ctrl', isFunc: true },
    { name: 'Alt', isFunc: true },
    { name: ' ', isFunc: false },
    { name: '⬅', isFunc: false },
    { name: '⬇', isFunc: false },
    { name: '➡', isFunc: false },
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
  key.setAttribute('data-key', element.name.toLowerCase());
  element.isFunc ? key.classList.add('key_func') : '';
  if (element.name === 'Esc') {
    key.setAttribute('data-key', 'escape');
  }
  if (element.name === 'Del') {
    key.setAttribute('data-key', 'delete');
  }
  if (element.name === 'Tab') {
    key.style.width = '60px';
  }
  if (element.name === 'Enter') {
    key.style.width = '80px';
  }
  if (element.name === 'Caps lock') {
    key.style.width = '80px';
    key.setAttribute('data-key', 'capslock');
  }
  if (element.name === 'Shift') {
    key.style.width = '105px';
  }
  if (element.name === ' ') {
    key.classList.add('space');
    key.style.flexGrow = '3';
  }
  if (element.name === 'Ctrl') {
    key.style.flexGrow = '0';
    key.style.width = '50px';
    key.setAttribute('data-key', 'control');
  }
  if (element.name === 'Alt') {
    key.style.flexGrow = '0';
    key.style.width = '50px';
  }
  if (element.name === '🪄') {
    key.style.flexGrow = '0';
    key.style.width = '40px';
  }
  if (element.name === '⬆') {
    key.setAttribute('data-key', 'arrowup');
  }
  if (element.name === '⬅') {
    key.setAttribute('data-key', 'arrowleft');
  }
  if (element.name === '⬇') {
    key.setAttribute('data-key', 'arrowdown');
  }
  if (element.name === '➡') {
    key.setAttribute('data-key', 'arrowright');
  }

  const keyTop = document.createElement('div');
  keyTop.className = 'key-top';
  keyTop.textContent = element.name;
  key.appendChild(keyTop);
  mainContainer.appendChild(key);
};

vocabulary.en.forEach((el) => createKey(el));

const $key = (key) => document.querySelector(`div[data-key='${key}']`);
const codeToElement = {
  CapsLock: $key('caps'),
};

window.addEventListener('keydown', (e) => {
  if (e.key !== 'F12') {
    e.preventDefault();
  }
  const el = $key(e.key.toLowerCase());
  console.log(el);
  if (el) {
    el.classList.add('pressed');
  }
});

window.addEventListener('keyup', (e) => {
  const el = $key(e.key.toLowerCase());
  if (el) {
    el.classList.remove('pressed');
    e.preventDefault();
  }
});
