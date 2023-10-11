const pads = document.querySelectorAll(".pad");
let keyMapping = {
    'a': 'pad1',
    's': 'pad2',
    'd': 'pad3',
    'f': 'pad4',
    'z': 'pad5',
    'x': 'pad6',
    'c': 'pad7',
    'v': 'pad8'

}
let kickDrum = new Audio("./monte booker SOUNDS/blkswn/edgar allan poe'd up/EAPU KICK.wav")
let snareDrum = new Audio('./monte booker SOUNDS/blkswn/blkoscars/BO CHOP SNARE.wav')
let hiHat = new Audio('./monte booker SOUNDS/blkswn/blkoscars/BO PERC.wav')
let chord1 = new Audio("./monte booker SOUNDS/blkswn/edgar allan poe'd up/EAPU CHORD 4.wav")
let chord2 = new Audio("./monte booker SOUNDS/blkswn/edgar allan poe'd up/EAPU CHORD 3.wav")
let chord3 = new Audio("./monte booker SOUNDS/blkswn/edgar allan poe'd up/EAPU CHORD 2.wav")
let chord4 = new Audio("./monte booker SOUNDS/blkswn/edgar allan poe'd up/EAPU CHORD.wav")
let soundBank = {
    pad1: kickDrum,
    pad2: snareDrum,
    pad3: hiHat,
    pad4: hiHat,
    pad5: chord1,
    pad6: chord2,
    pad7: chord3,
    pad8: chord4

}
document.addEventListener('keydown', function(e) {
    const padName = keyMapping[e.key];
    if(padName && soundBank[padName]) {
        const sound = soundBank[padName];
        sound.currentTime = 0;
        sound.play();
        const padElement = document.querySelector(`.${padName}`);
        padElement.classList.add('active');
        setTimeout(() => padElement.classList.remove('active'), 100);
    }
})
pads.forEach(pad => {
    pad.addEventListener("click", function(e) {
        const classes = Array.from(e.target.classList);
        let clickedPadNumber = null;

        for(let i = 0; i < classes.length; i++) {
            if(classes[i].startsWith("pad") && classes[i] !== "pad") {
                clickedPadNumber = classes[i];
                const sound = soundBank[clickedPadNumber];
                sound.currentTime = 0;
                sound.play();
                break;
            }
        }
    });
});
