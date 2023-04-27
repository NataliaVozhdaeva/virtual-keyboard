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

let key = document.createElement('div');
key.className='key';
let keyTop = document.createElement('div');
keyTop.className='key-top';
keyTop.textContent='a';
key.appendChild(keyTop);
mainContainer.appendChild(key)