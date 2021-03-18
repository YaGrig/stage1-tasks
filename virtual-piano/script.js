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
function endtransition(e){
  if(e.propertyName !=='background-color') return;
  if (this.classList.contains('sharplaying')){
  this.classList.remove('sharplaying')
} else {
  this.classList.remove('playing');
}
}
pianokeys.forEach(key => key.addEventListener('transitionend', endtransition))

pianokeys.forEach(key => key.addEventListener('click', (event) => {
      const note = event.target.dataset.note;
      const src = `assets/audio/${note}.mp3`;
      const key = document.querySelector(`.piano-key[data-note="${note}"]`);
      playAudio(src);
      if(!key.classList.contains('sharp')){
        key.classList.add('playing')
      }
      else {key.classList.add('.piano-key.sharplaying')}
  }))

window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-letter="${e.keyCode}"]`);
    const key = document.querySelector(`.piano-key[data-letter="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0; 
    audio.play() 
    if(!key.classList.contains('sharp')){
      key.classList.add('playing')
    }
    else {key.classList.add('.piano-key.sharplaying')}
})
buttonLet.addEventListener('click', function (e){
  const keys = document.querySelectorAll('.piano-key');
  keys.forEach(key => key.classList.add('piano-key-letter'))
})
buttonActive.addEventListener('click', function (e){
  const keys = document.querySelectorAll('.piano-key');
  keys.forEach(key => key.classList.remove('piano-key-letter'))
})

const btnflsc = document.querySelector('.fullscreen');
btnflsc.addEventListener('click', () => {
  if(document.fullscreenElement){
    document.exitFullscreen();
  } else {
  document.documentElement.requestFullscreen().catch((e)=>{
  console.log(e)})
  }
})
