const vocabulary = 
   [
    { name: 'Esc', ruName:'Уйти', isFunc: true },
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
    { name: '-',  isFunc: false },
    { name: '=',  isFunc: false },
    { name: 'Del', ruName:'Дел', isFunc: true },
    { name: 'Tab', ruName:'Таб', isFunc: true },
    { name: 'q', ruName:'й', isFunc: false },
    { name: 'w', ruName:'ц', isFunc: false },
    { name: 'e', ruName:'у', isFunc: false },
    { name: 'r', ruName:'к', isFunc: false },
    { name: 't', ruName:'е', isFunc: false },
    { name: 'y', ruName:'н', isFunc: false },
    { name: 'u', ruName:'г', isFunc: false },
    { name: 'i', ruName:'ш', isFunc: false },
    { name: 'o', ruName:'щ', isFunc: false },
    { name: 'p', ruName:'з', isFunc: false },
    { name: '[', ruName:'х', isFunc: false },
    { name: ']', ruName:'ъ', isFunc: false },
    { name: 'Backspace', ruName:'Стереть', isFunc: true },
    { name: 'Caps lock', ruName:'Большие буквы', isFunc: true },
    { name: 'a', ruName:'ф', isFunc: false },
    { name: 's', ruName:'ы', isFunc: false },
    { name: 'd', ruName:'в', isFunc: false },
    { name: 'f', ruName:'а', isFunc: false },
    { name: 'g', ruName:'п', isFunc: false },
    { name: 'h', ruName:'р', isFunc: false },
    { name: 'j', ruName:'о', isFunc: false },
    { name: 'k', ruName:'л', isFunc: false },
    { name: 'l', ruName:'д', isFunc: false },
    { name: ';', ruName:'ж', isFunc: false },
    { name: "'", ruName:'э', isFunc: false },
    { name: 'Enter', ruName:'Войдите', isFunc: true },
    { name: 'Shift', ruName:'Большая буква', isFunc: true },
    { name: 'z', ruName:'я', isFunc: false },
    { name: 'x', ruName:'ч', isFunc: false },
    { name: 'c', ruName:'с', isFunc: false },
    { name: 'v', ruName:'м', isFunc: false },
    { name: 'b', ruName:'и', isFunc: false },
    { name: 'n', ruName:'т', isFunc: false },
    { name: 'm', ruName:'ь', isFunc: false },
    { name: ',', ruName:'б', isFunc: false },
    { name: '.', ruName:'ю', isFunc: false },
    { name: '/', ruName:'.', isFunc: false },
    { name: '⬆', ruName:'⬆', isFunc: false },
    { name: '🪄', isFunc: true },
    { name: 'Ctrl', ruName:'Ктрл', isFunc: true },
    { name: 'Alt', ruName:'Др', isFunc: true },
    { name: ' ', ruName:' ', isFunc: false },
    { name: '⬅', ruName:'⬅', isFunc: false },
    { name: '⬇', ruName:'⬇', isFunc: false },
    { name: '➡', ruName:'➡', isFunc: false },
  ]

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

const createKeyTop = (el, index, mod) => {
  const keyTop = document.createElement('div');
  keyTop.className = 'key-top';

  if(mod === undefined){
    keyTop.textContent = el.name
  } else{
    keyTop.textContent = mod;
  }
   
  if (
    document.querySelector('div[data-key=capslock]') !== null
    && document.querySelector('div[data-key=capslock]').classList.contains('on')
    && !document.querySelector('.key').classList.contains('key_func')
  ) {
    keyTop.textContent = mod.toUpperCase();
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
  if (element.name === 'backspace') {
    key.setAttribute('data-key', 'backspace');
    key.style.width = '90px'
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

vocabulary.forEach((el) => createKey(el));
vocabulary.forEach((el, index) => createKeyTop(el, index, el.name));

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

  let el;

  //if(lang === 'en'){
    el = $key(e.key.toLowerCase());
 /*  } else {
    el = element.name.toLowerCase()
  }   */

  switch (true) {
    case el === null:
      break;
    case el.dataset.key === 'shift':
      el.classList.add('on');
      break;
    case el.dataset.key === 'alt':
      el.classList.add('on');
      if (document.querySelector('div[data-key=control]').classList.contains('on')) {
        lang = 'ru';
        document.querySelectorAll('.key').forEach((element) => element.innerHTML = '');
        vocabulary.forEach((el, index) => createKeyTop(el, index, el.ruName));
      }
      break;
    case el.dataset.key === 'control':
      el.classList.add('on');
      if (document.querySelector('div[data-key=alt]').classList.contains('on')) {
        document.querySelectorAll('.key').forEach((element) => {
          element.innerHTML = '';
        });        
        vocabulary.forEach((el, index) => createKeyTop(el, index, el.ruName));
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
