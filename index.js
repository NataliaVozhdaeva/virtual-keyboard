const vocabulary = 
   [
    { name: 'Esc', code:'Escape', ruName:'Уйти', isFunc: true },
    { name: '1', code:'Digit1', isFunc: false },
    { name: '2', code:'Digit2', isFunc: false },
    { name: '3', code:'Digit3', isFunc: false },
    { name: '4', code:'Digit4', isFunc: false },
    { name: '5', code:'Digit5', isFunc: false },
    { name: '6', code:'Digit6', isFunc: false },
    { name: '7', code:'Digit7', isFunc: false },
    { name: '8', code:'Digit8', isFunc: false },
    { name: '9', code:'Digit9', isFunc: false },
    { name: '0', code:'Digit0', isFunc: false },
    { name: '+', code:'', isFunc: false },
    { name: '-', code:'Minus', isFunc: false },
    { name: '=', code:'Equal', isFunc: false },
    { name: 'Del', code:'Delete', ruName:'Дел', isFunc: true },
    { name: 'Tab', code:'Tab', ruName:'Таб', isFunc: true },
    { name: 'q', code:'KeyQ', ruName:'й', isFunc: false, },
    { name: 'w', code:'KeyW', ruName:'ц', isFunc: false },
    { name: 'e', code:'KeyE', ruName:'у', isFunc: false },
    { name: 'r', code:'KeyR', ruName:'к', isFunc: false },
    { name: 't', code:'KeyT', ruName:'е', isFunc: false },
    { name: 'y', code:'KeyY', ruName:'н', isFunc: false },
    { name: 'u', code:'KeyU', ruName:'г', isFunc: false },
    { name: 'i', code:'KeyI', ruName:'ш', isFunc: false },
    { name: 'o', code:'KeyO', ruName:'щ', isFunc: false },
    { name: 'p', code:'KeyP', ruName:'з', isFunc: false },
    { name: '[', code:'BracketLeft', ruName:'х', isFunc: false },
    { name: ']', code:'BracketRight', ruName:'ъ', isFunc: false },
    { name: 'Backspace', code:'Backspace', ruName:'Стереть', isFunc: true },
    { name: 'Caps lock', code:'CapsLock', ruName:'Большие буквы', isFunc: true },
    { name: 'a', code:'KeyA', ruName:'ф', isFunc: false },
    { name: 's', code:'KeyS', ruName:'ы', isFunc: false },
    { name: 'd', code:'KeyD', ruName:'в', isFunc: false },
    { name: 'f', code:'KeyF', ruName:'а', isFunc: false },
    { name: 'g', code:'KeyG', ruName:'п', isFunc: false },
    { name: 'h', code:'KeyH', ruName:'р', isFunc: false },
    { name: 'j', code:'KeyJ', ruName:'о', isFunc: false },
    { name: 'k', code:'KeyK', ruName:'л', isFunc: false },
    { name: 'l', code:'KeyL', ruName:'д', isFunc: false },
    { name: ';', code:'Semicolon', ruName:'ж', isFunc: false },
    { name: "'", code:'Quote', ruName:'э', isFunc: false },
    { name: 'Enter', code:'Enter', ruName:'Войдите', isFunc: true },
    { name: 'Shift', code:'Shift', ruName:'Большая буква', isFunc: true },
    { name: 'z', code:'KeyZ', ruName:'я', isFunc: false },
    { name: 'x', code:'KeyX', ruName:'ч', isFunc: false },
    { name: 'c', code:'KeyC', ruName:'с', isFunc: false },
    { name: 'v', code:'KeyV', ruName:'м', isFunc: false },
    { name: 'b', code:'KeyB', ruName:'и', isFunc: false },
    { name: 'n', code:'KeyN', ruName:'т', isFunc: false },
    { name: 'm', code:'KeyM', ruName:'ь', isFunc: false },
    { name: ',', code:'Comma', ruName:'б', isFunc: false },
    { name: '.', code:'Period', ruName:'ю', isFunc: false },
    { name: '/', code:'Slash', ruName:'.', isFunc: false },
    { name: '⬆', code:'ArrowUp', ruName:'⬆', isFunc: false },
    { name: '🪄', code:'',  isFunc: true },
    { name: 'Ctrl', code:'Control', ruName:'Ктрл', isFunc: true },
    { name: 'Alt', code:'Alt', ruName:'Др', isFunc: true },
    { name: ' ', code:'Space', ruName:' ', isFunc: false },
    { name: '⬅', code:'ArrowLeft', ruName:'⬅', isFunc: false },
    { name: '⬇', code:'ArrowDown', ruName:'⬇', isFunc: false },
    { name: '➡', code:'ArrowRight', ruName:'➡', isFunc: false },
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
  key.setAttribute('data-key', element.code.toLowerCase());

  if (element.isFunc) {
    key.classList.add('key_func');
  }
  if (element.name === 'backspace') {
    key.style.width = '90px'
  }
  if (element.name === 'Tab') {
    key.style.width = '60px';
  }
  if (element.name === 'Enter') {
    key.style.width = '80px';
  }
  if (element.name === 'Caps lock') {
    key.style.width = '80px';
  }
  if (element.name === 'Shift') {
    key.style.width = '105px';
  }
  if (element.name === ' ') {
    key.style.flexGrow = '3';
  }
  if (element.name === 'Ctrl') {
    key.style.flexGrow = '0';
    key.style.width = '50px';
  }
  if (element.name === 'Alt') {
    key.style.flexGrow = '0';
    key.style.width = '50px';
  }
  if (element.name === '🪄') {
    key.style.flexGrow = '0';
    key.style.width = '40px';
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

    if(e.key === 'Shift' || e.key === 'Alt' || e.key === 'Control'){
      el = $key(e.key.toLowerCase());
    } else{
      el = $key(e.code.toLowerCase());
    }

  switch (true) {
    case el === null:
      break;
    case el.dataset.key === 'shift':
      el.classList.add('on');
      el.classList.add('pressed');
      break;
    case el.dataset.key === 'alt':
      el.classList.add('on');
      if (document.querySelector('div[data-key=control]').classList.contains('on')) {
        lang = 'ru';
        document.querySelectorAll('.key').forEach((element) => element.innerHTML = '');
        vocabulary.forEach((el, index) => createKeyTop(el, index, el.ruName));
      }
      el.classList.add('pressed');
      break;
    case el.dataset.key === 'control':
      el.classList.add('on');
      if (document.querySelector('div[data-key=alt]').classList.contains('on')) {
        document.querySelectorAll('.key').forEach((element) => {
          element.innerHTML = '';
        });        
        vocabulary.forEach((el, index) => createKeyTop(el, index, el.ruName));
      }
      el.classList.add('pressed');
      break;
    default:
      el.classList.add('pressed');
  }
});

window.addEventListener('keyup', (e) => {
  
  let el;

  if(e.key === 'Shift' || e.key === 'Alt' || e.key === 'Control'){
    el = $key(e.key.toLowerCase());
  } else{
    el = $key(e.code.toLowerCase());
  }

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
        const letter = keyboard.querySelector(`div[data-key="${e.code.toLowerCase()}"]`);
        showText(letter.textContent);
    }
  }
});

keyboard.addEventListener('mousedown', (e) => {
  e.target.parentNode.classList.add('pressed');
  if (e.target.parentNode.dataset.key === 'shift') {
    e.target.parentNode.classList.add('on');
  }
 /*  if (e.target.parentNode.dataset.key === 'alt') {
    e.target.parentNode.classList.add('on');
  } */
});

keyboard.addEventListener('mouseup', (e) => {
  e.target.parentNode.classList.remove('pressed');

  if (e.target.parentNode.dataset.key === 'shift') {
    e.target.parentNode.classList.remove('on');
  }
  if (e.target.parentNode.dataset.key === 'alt') {
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

  if (e.target.parentNode.dataset.key === 'enter'){
    screen.value += '\n';}


  if (e.target.parentNode.classList.contains('key') && !e.target.parentNode.classList.contains('key_func')) {
    showText(e.target.textContent);
  }

});
