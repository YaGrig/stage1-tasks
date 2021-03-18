const piano = document.querySelector('.piano');
const pianokeys = document.querySelectorAll('.piano-key');
const audio = document.querySelector('audio')
const buttonLet = document.querySelector('.btn-letters')
const buttonActive = document.querySelector('.btn-active')
function playAudio(src) {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
  }
