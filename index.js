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
  ru: [
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
    { name: 'й', isFunc: false },
    { name: 'ц', isFunc: false },
    { name: 'у', isFunc: false },
    { name: 'к', isFunc: false },
    { name: 'е', isFunc: false },
    { name: 'н', isFunc: false },
    { name: 'г', isFunc: false },
    { name: 'ш', isFunc: false },
    { name: 'щ', isFunc: false },
    { name: 'з', isFunc: false },
    { name: 'х', isFunc: false },
    { name: 'ъ', isFunc: false },
    { name: 'Backspace', isFunc: true },
    { name: 'Caps lock', isFunc: true },
    { name: 'ф', isFunc: false },
    { name: 'ы', isFunc: false },
    { name: 'в', isFunc: false },
    { name: 'а', isFunc: false },
    { name: 'п', isFunc: false },
    { name: 'р', isFunc: false },
    { name: 'о', isFunc: false },
    { name: 'л', isFunc: false },
    { name: 'д', isFunc: false },
    { name: 'ж', isFunc: false },
    { name: 'э', isFunc: false },
    { name: 'Enter', isFunc: true },
    { name: 'Shift', isFunc: true },
    { name: 'я', isFunc: false },
    { name: 'ч', isFunc: false },
    { name: 'с', isFunc: false },
    { name: 'м', isFunc: false },
    { name: 'и', isFunc: false },
    { name: 'т', isFunc: false },
    { name: 'ь', isFunc: false },
    { name: 'б', isFunc: false },
    { name: 'ю', isFunc: false },
    { name: '.', isFunc: false },
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
const screen = document.createElement('textarea');
screen.className = 'screen';

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
const body = document.querySelector('body');

body.appendChild(screen);
body.appendChild(keyboard);

const mainContainer = document.createElement('div');
mainContainer.className = 'mainContainer';
keyboard.appendChild(mainContainer);

const createKeyTop = (el, index) => {
  const keyTop = document.createElement('div');
  keyTop.className = 'key-top';

  keyTop.textContent = el.name;
  if (
    document.querySelector('div[data-key=capslock]') !== null
    && document.querySelector('div[data-key=capslock]').classList.contains('on')
    && !document.querySelector('.key').classList.contains('key_func')
  ) {
    keyTop.textContent = el.name.toUpperCase();
  }

  const keys = document.getElementsByClassName('key');
  keys[index].appendChild(keyTop);
};

const createKey = (element) => {
  const key = document.createElement('div');
  key.className = 'key';
  key.setAttribute('data-key', element.name.toLowerCase());

  if (element.isFunc) {
    key.classList.add('key_func');
  }

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

  mainContainer.appendChild(key);
};

vocabulary.en.forEach((el) => createKey(el));
vocabulary.en.forEach((el, index) => createKeyTop(el, index));

const $key = (key) => document.querySelector(`div[data-key="${key.toLowerCase()}"]`);

const showText = (letter) => {
  if (
    document.querySelector('div[data-key=capslock]').classList.contains('on')
    || document.querySelector('div[data-key=shift]').classList.contains('on')
  ) {
    screen.value += letter.toUpperCase();
  } else {
    screen.value += letter;
  }
};

window.addEventListener('keydown', (e) => {
  if (e.key !== 'F12') {
    e.preventDefault();
  }

  const el = $key(e.key.toLowerCase());

  switch (true) {
    case el === null:
      break;
    case el.dataset.key === 'shift':
      el.classList.add('on');
      break;
    case el.dataset.key === 'alt':
      el.classList.add('on');
      if (document.querySelector('div[data-key=control]').classList.contains('on')) {
        document.querySelectorAll('.key').forEach((element) => {
          element.innerHTML = '';
        });
        vocabulary.ru.forEach((item, index) => createKeyTop(item, index));
      }
      break;
    case el.dataset.key === 'control':
      el.classList.add('on');
      if (document.querySelector('div[data-key=alt]').classList.contains('on')) {
        document.querySelectorAll('.key').forEach((element) => {
          element.innerHTML = '';
        });
        vocabulary.ru.forEach((item, index) => createKeyTop(item, index));
      }
      break;
    default:
      el.classList.add('pressed');
  }
});

window.addEventListener('keyup', (e) => {
  const el = $key(e.key.toLowerCase());
  if (el) {
    e.preventDefault();
    el.classList.remove('pressed');
  }

  if (el !== null) {
    switch (true) {
      case el.dataset.key === 'capslock':
        el.classList.contains('on') ? el.classList.remove('on') : el.classList.add('on');
        break;
      case el.dataset.key === 'tab':
        screen.value += '    ';
        break;
      case el.dataset.key === 'enter':
        screen.value += '\n';
        break;
      case el.dataset.key === 'shift':
        el.classList.remove('on');
        break;
      case el.dataset.key === 'alt':
        el.classList.remove('on');
        break;
      case el.dataset.key === 'control':
        el.classList.remove('on');
        break;
      default:
        const letter = keyboard.querySelector(`div[data-key="${e.key.toLowerCase()}"]`);
        showText(letter.textContent);
    }
  }
});

keyboard.addEventListener('mousedown', (e) => {
  e.target.parentNode.classList.add('pressed');
  if (e.target.parentNode.dataset.key === 'shift') {
    e.target.parentNode.classList.add('on');
  }
});

keyboard.addEventListener('mouseup', (e) => {
  e.target.parentNode.classList.remove('pressed');

  if (e.target.parentNode.dataset.key === 'shift') {
    e.target.parentNode.classList.remove('on');
  }

  if (e.target.parentNode.dataset.key === 'capslock') {
    e.target.parentNode.classList.contains('on')
      ? e.target.parentNode.classList.remove('on')
      : e.target.parentNode.classList.add('on');
  }

  if (e.target.parentNode.dataset.key === 'tab') {
    screen.value += '    ';
  }

  if (e.target.parentNode.classList.contains('key') && !e.target.parentNode.classList.contains('key_func')) {
    showText(e.target.textContent);
  }
});
