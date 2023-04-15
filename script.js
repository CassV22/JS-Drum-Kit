const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);


function playSound(e) {
    //selects the audio element that matches the key that triggered the event
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    //selects key that triggered the event
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    //if there is no audio to be played, end the function; else, play the audio tag that corresponds to the key that triggered the event
    if(!audio) {
        return;
    }

    //resets the audio each time the button is clicked (.currentTime sets at what point in the audio you want to start)
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');

}

function removeTransition(e) {
    //if the element that triggered the even does not have a transform property, end the function; else, remove the playing class from the element
    if(e.propertyName !== "transform" ) {
        return;
    }
    this.classList.remove('playing');
}

