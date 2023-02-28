
/* 
************RESUMEN*****************
el código crea un efecto de sonido al presionar una tecla utilizando 
eventos de transición de CSS y eventos de teclado en JavaScript. 
Cuando se presiona una tecla, se activa la función playSound para 
buscar y reproducir un archivo de audio y agregar la clase "playing" a 
un elemento HTML correspondiente. Cuando se completa la transición del 
elemento HTML, se activa la función removeTransition para eliminar la 
clase "playing" del elemento HTML.

*/


function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

 

