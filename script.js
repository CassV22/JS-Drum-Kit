const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);


/* document listens for a keydown event, which triggers the playSound function; this function matches the audio tag and keycode so that for whatever key triggered the event
if it exists, the corresponding audio will be played and the playing class (or transition) will be added to that key*/
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

/*function stops the transition and remove the class playing if it was added to the element's class list that triggered the event; this function stops the transition
once it has started */
function removeTransition(e) {
    //if the element that triggered the even does not have a transform property, end the function; else, remove the playing class from the element
    if(e.propertyName !== "transform" ) {
        return;
    }
    this.classList.remove('playing');
}

