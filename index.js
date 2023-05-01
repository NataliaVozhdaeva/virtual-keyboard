const vocabulary = [
  {
    name: 'Esc', code: 'Escape', ruName: 'Уйти', isFunc: true,
  },
  {
    name: '`', code: 'Backquote', ruName: 'ё', enSymbolName: '~', isFunc: false,
  },
  {
    name: '1', code: 'Digit1', ruName: '1', enSymbolName: '!', ruSymbolName: '!', isFunc: false,
  },
  {
    name: '2', code: 'Digit2', ruName: '2', enSymbolName: '@', ruSymbolName: '"', isFunc: false,
  },
  {
    name: '3', code: 'Digit3', ruName: '3', enSymbolName: '#', ruSymbolName: '№', isFunc: false,
  },
  {
    name: '4', code: 'Digit4', ruName: '4', enSymbolName: '$', ruSymbolName: ';', isFunc: false,
  },
  {
    name: '5', code: 'Digit5', ruName: '5', enSymbolName: '%', ruSymbolName: '%', isFunc: false,
  },
  {
    name: '6', code: 'Digit6',  ruName: '6', enSymbolName: '^', ruSymbolName: ':', isFunc: false,
  },
  {
    name: '7', code: 'Digit7', ruName: '7', enSymbolName: '&', ruSymbolName: '?', isFunc: false,
  },
  {
    name: '8', code: 'Digit8',  ruName: '8', enSymbolName: '*', ruSymbolName: '*', isFunc: false,
  },
  {
    name: '9', code: 'Digit9',  ruName: '9',enSymbolName: '(', ruSymbolName: '(', isFunc: false,
  },
  {
    name: '0', code: 'Digit0',  ruName: '0', enSymbolName: '(', ruSymbolName: '(', isFunc: false,
  },
  {
    name: '-', code: 'Minus',  ruName: '-', enSymbolName: '_', ruSymbolName: '_', isFunc: false,
  },
  {
    name: '=', code: 'Equal', ruName: '=', enSymbolName: '+', ruSymbolName: '+', isFunc: false,
  },
  {
    name: 'Del', code: 'Delete', ruName: 'Дел', isFunc: true,
  },
  {
    name: 'Tab', code: 'Tab', ruName: 'Таб', isFunc: true,
  },
  {
    name: 'q', code: 'KeyQ', ruName: 'й', isFunc: false,
  },
  {
    name: 'w', code: 'KeyW', ruName: 'ц', isFunc: false,
  },
  {
    name: 'e', code: 'KeyE', ruName: 'у', isFunc: false,
  },
  {
    name: 'r', code: 'KeyR', ruName: 'к', isFunc: false,
  },
  {
    name: 't', code: 'KeyT', ruName: 'е', isFunc: false,
  },
  {
    name: 'y', code: 'KeyY', ruName: 'н', isFunc: false,
  },
  {
    name: 'u', code: 'KeyU', ruName: 'г', isFunc: false,
  },
  {
    name: 'i', code: 'KeyI', ruName: 'ш', isFunc: false,
  },
  {
    name: 'o', code: 'KeyO', ruName: 'щ', isFunc: false,
  },
  {
    name: 'p', code: 'KeyP', ruName: 'з', isFunc: false,
  },
  {
    name: '[', code: 'BracketLeft', ruName: 'х', enSymbolName: '{', isFunc: false,
  },
  {
    name: ']', code: 'BracketRight', ruName: 'ъ', enSymbolName: '}', isFunc: false,
  },
  {
    name: 'Backspace', code: 'Backspace', ruName: 'Стереть', isFunc: true,
  },
  {
    name: 'Caps lock', code: 'CapsLock', ruName: 'Большие буквы', isFunc: true,
  },
  {
    name: 'a', code: 'KeyA', ruName: 'ф', isFunc: false,
  },
  {
    name: 's', code: 'KeyS', ruName: 'ы', isFunc: false,
  },
  {
    name: 'd', code: 'KeyD', ruName: 'в', isFunc: false,
  },
  {
    name: 'f', code: 'KeyF', ruName: 'а', isFunc: false,
  },
  {
    name: 'g', code: 'KeyG', ruName: 'п', isFunc: false,
  },
  {
    name: 'h', code: 'KeyH', ruName: 'р', isFunc: false,
  },
  {
    name: 'j', code: 'KeyJ', ruName: 'о', isFunc: false,
  },
  {
    name: 'k', code: 'KeyK', ruName: 'л', isFunc: false,
  },
  {
    name: 'l', code: 'KeyL', ruName: 'д', isFunc: false,
  },
  {
    name: ';', code: 'Semicolon', ruName: 'ж', enSymbolName: ':', isFunc: false,
  },
  {
    name: "'", code: 'Quote', ruName: 'э', enSymbolName: '"', isFunc: false,
  },
  {
    name: 'Enter', code: 'Enter', ruName: 'Войдите', isFunc: true,
  },
  {
    name: 'Shift', code: 'Shift', ruName: 'Большая буква', isFunc: true,
  },
  {
    name: 'z', code: 'KeyZ', ruName: 'я', isFunc: false,
  },
  {
    name: 'x', code: 'KeyX', ruName: 'ч', isFunc: false,
  },
  {
    name: 'c', code: 'KeyC', ruName: 'с', isFunc: false,
  },
  {
    name: 'v', code: 'KeyV', ruName: 'м', isFunc: false,
  },
  {
    name: 'b', code: 'KeyB', ruName: 'и', isFunc: false,
  },
  {
    name: 'n', code: 'KeyN', ruName: 'т', isFunc: false,
  },
  {
    name: 'm', code: 'KeyM', ruName: 'ь', isFunc: false,
  },
  {
    name: ',', code: 'Comma', ruName: 'б', enSymbolName: '<', isFunc: false,
  },
  {
    name: '.', code: 'Period', ruName: 'ю', enSymbolName: '>', isFunc: false,
  },
  {
    name: '/', code: 'Slash', ruName: '.', enSymbolName: '?', isFunc: false,
  },
  {
    name: '⬆', code: 'ArrowUp', ruName: '⬆', isFunc: false,
  },
  { name: '🪄', code: '', ruName: '🪄', isFunc: true },
  {
    name: 'Ctrl', code: 'Control', ruName: 'Ктрл', isFunc: true,
  },
  {
    name: 'Alt', code: 'Alt', ruName: 'Др', isFunc: true,
  },
  {
    name: ' ', code: 'Space', ruName: ' ', isFunc: false,
  },
  {
    name: '⬅', code: 'ArrowLeft', ruName: '⬅', isFunc: false,
  },
  {
    name: '⬇', code: 'ArrowDown', ruName: '⬇', isFunc: false,
  },
  {
    name: '➡', code: 'ArrowRight', ruName: '➡', isFunc: false,
  },
];

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

  if (mod === undefined) {
    keyTop.textContent = el.name;
  } else {
    keyTop.textContent = mod;
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
  if (element.name === 'Esc') {
    key.style.width = '40px';
  }
  if (element.name === 'Del') {
    key.style.width = '40px';
  }
  if (element.name === 'Backspace') {
    key.style.width = '90px';
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

let lang = 'en';

function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang');
  }
  cleanKeyboard();
  capsHandler();
}

window.addEventListener('load', getLocalStorage);

function setLocalStorage() {
  localStorage.setItem('lang', lang);
}

const langHandler = () => {
  if (lang === 'en') {
    vocabulary.forEach((el, index) => createKeyTop(el, index, el.ruName));
    lang = 'ru';
    setLocalStorage()
  } else {
    vocabulary.forEach((el, index) => createKeyTop(el, index, el.name));
    lang = 'en';
    setLocalStorage()
  }
};

const capsHandler = () => {
  vocabulary.forEach((el, index) => {
    if (lang === 'en') {
      if (!el.isFunc && document.querySelector('div[data-key=capslock]').classList.contains('on')) {
        createKeyTop(el, index, el.name.toUpperCase());
      } else {
        createKeyTop(el, index, el.name);
      }
    } else {
      
        if (!el.isFunc && document.querySelector('div[data-key=capslock]').classList.contains('on')) {
          createKeyTop(el, index, el.ruName.toUpperCase());
        } else {
          createKeyTop(el, index, el.ruName);
        
    }}
  });
};

const cleanKeyboard = () => {
  for (let i = 0; i < document.querySelectorAll('.key').length; i += 1) {
    document.querySelectorAll('.key')[i].innerHTML = '';
  }
} 

const symbolsHandler = () => {
  cleanKeyboard();
  if (lang === 'en' && document.querySelector('div[data-key=shift]').classList.contains('on')) {
    vocabulary.forEach((el, index) => {
      if (el.enSymbolName) {
        createKeyTop(el, index, el.enSymbolName);
      } else if (!el.isFunc) {
        createKeyTop(el, index, el.name.toUpperCase());
      } else {
        createKeyTop(el, index, el.name);
      }
    });
  } else if (lang === 'ru' && document.querySelector('div[data-key=shift]').classList.contains('on')) {
    vocabulary.forEach((el, index) => {
      if (el.ruSymbolName) {
        createKeyTop(el, index, el.ruSymbolName);
      } else if (!el.isFunc) {
        createKeyTop(el, index, el.ruName.toUpperCase());
      } else {
        createKeyTop(el, index, el.ruName);
      }
    });
  } else {
    capsHandler();
  }
};

window.addEventListener('keydown', (e) => {
  if (e.key !== 'F12') {
    e.preventDefault();
  }

  let el;
  if (e.key === 'Shift' || e.key === 'Alt' || e.key === 'Control') {
    el = $key(e.key.toLowerCase());
  } else {
    el = $key(e.code.toLowerCase());
  }

  switch (true) {
    case el === null:
      break;
    case el.dataset.key === 'shift':
      el.classList.add('on');
      el.classList.add('pressed');
      cleanKeyboard();
      symbolsHandler();
      break;
    case el.dataset.key === 'alt':
      el.classList.add('on');
      if (document.querySelector('div[data-key=control]').classList.contains('on')) {
        cleanKeyboard();
        langHandler();
      }
      el.classList.add('pressed');
      break;
    case el.dataset.key === 'control':
      el.classList.add('on');
      if (document.querySelector('div[data-key=alt]').classList.contains('on')) {
        cleanKeyboard();
        langHandler();
      }
      el.classList.add('pressed');
      break;
    default:
      el.classList.add('pressed');
  }
});

window.addEventListener('keyup', (e) => {
  let el;

  if (e.key === 'Shift' || e.key === 'Alt' || e.key === 'Control') {
    el = $key(e.key.toLowerCase());
  } else {
    el = $key(e.code.toLowerCase());
  }

  if (el) {
    e.preventDefault();
    el.classList.remove('pressed');
  }

  const posCursor = screen.selectionStart;

  if (el !== null) {
    switch (true) {
      case el.dataset.key === 'capslock':
        if (el.classList.contains('on')) {
          el.classList.remove('on');
          cleanKeyboard();
          capsHandler();
        } else {
          el.classList.add('on');
          cleanKeyboard();
          capsHandler();
        }
        break;
      case el.dataset.key === 'tab':
        screen.value += '\t';
        break;
      case el.dataset.key === 'enter':
        screen.value = screen.value.slice(0, posCursor) + '\n' + screen.value.slice(posCursor);
        screen.selectionStart = posCursor+1;
        screen.selectionEnd = posCursor+1;
        break;
      case el.dataset.key === 'shift':
        el.classList.remove('on');
        cleanKeyboard();
        symbolsHandler();
        break;
      case el.dataset.key === 'alt':
        el.classList.remove('on');
        break;
      case el.dataset.key === 'control':
        el.classList.remove('on');
        break;
      case el.dataset.key === 'backspace':
        screen.value = screen.value.slice(0, posCursor - 1) + screen.value.slice(posCursor);
        screen.selectionStart = posCursor - 1;
        screen.selectionEnd = posCursor - 1;
        break;
      case el.dataset.key === 'delete':
        screen.value = screen.value.slice(0, posCursor) + screen.value.slice(posCursor + 1);
        screen.selectionStart = posCursor;
        screen.selectionEnd = posCursor;
        break;
      case el.dataset.key === 'escape':
        break;
      default:
        showText(keyboard.querySelector(`div[data-key="${e.code.toLowerCase()}"]`).textContent);
    }
  }
});

keyboard.addEventListener('mousedown', (e) => {
  e.target.parentNode.classList.add('pressed');
  if (e.target.parentNode.dataset.key === 'shift') {
    e.target.parentNode.classList.add('on');
    cleanKeyboard();
    symbolsHandler();
  } else if (e.target.parentNode.dataset.key === 'alt') {
    e.target.parentNode.classList.add('on');
    if (document.querySelector('div[data-key=control]').classList.contains('on')) {
      cleanKeyboard();
      langHandler();
    }
  } else if (e.target.parentNode.dataset.key === 'control') {
    e.target.parentNode.classList.add('on');
    if (document.querySelector('div[data-key=alt]').classList.contains('on')) {
      cleanKeyboard();
      langHandler();
    }
  }
});

keyboard.addEventListener('mouseup', (e) => {
  e.target.parentNode.classList.remove('pressed');
  const posCursor = screen.selectionStart;

  switch (true) {
    case e.target.parentNode.dataset.key === 'shift':
      e.target.parentNode.classList.remove('on');
      cleanKeyboard();
      symbolsHandler();
      break;
    case e.target.parentNode.dataset.key === 'alt':
      e.target.parentNode.classList.remove('on');
      break;
    case e.target.parentNode.dataset.key === 'control':
      e.target.parentNode.classList.remove('on');
      break;
    case e.target.parentNode.dataset.key === 'capslock':
      if (e.target.parentNode.classList.contains('on')) {
        e.target.parentNode.classList.remove('on');
        cleanKeyboard();
        capsHandler();
      } else {
        e.target.parentNode.classList.add('on');
        cleanKeyboard();
        capsHandler();
      }
      break;
    case e.target.parentNode.dataset.key === 'tab':
      screen.value += '\t';
      break;
    case e.target.parentNode.dataset.key === 'enter':
      screen.value = screen.value.slice(0, posCursor) + '\n' + screen.value.slice(posCursor);
      screen.selectionStart = posCursor+1;
      screen.selectionEnd = posCursor+1;
      break;
    case e.target.parentNode.dataset.key === 'backspace':
      screen.value = screen.value.slice(0, posCursor - 1) + screen.value.slice(posCursor);
      screen.selectionStart = posCursor - 1;
      screen.selectionEnd = posCursor - 1;
      break;
    case e.target.parentNode.dataset.key === 'delete':
      screen.value = screen.value.slice(0, posCursor) + screen.value.slice(posCursor + 1);
      screen.selectionStart = posCursor;
      screen.selectionEnd = posCursor;
      break;
    case e.target.parentNode.dataset.key === 'escape':
        break;
    case e.target.parentNode.classList.contains('key') && !e.target.parentNode.classList.contains('key_func'):
      showText(e.target.textContent);
      break;
    default:
  }
});

const message = document.createElement('div');
message.className = 'message';
const paragraph1 = document.createElement('p');
paragraph1.textContent = 'Клавиатура создана в операционной системе Linux.';
message.appendChild(paragraph1);
const paragraph2 = document.createElement('p');
paragraph2.textContent = 'Для переключения языка комбинация: ctrl + alt (ктрл + др))';
message.appendChild(paragraph2);
body.appendChild(message);