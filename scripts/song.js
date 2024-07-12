
let range = document.getElementById("progress");

function updateRange() {
const value = (range.value - range.min) / (range.max - range.min) * 100;
range.style.background = `linear-gradient(to right, var(--secondary) 0%, var(--secondary) ${value}%, white ${value}%, white 100%)`;
}

range.addEventListener("input", updateRange);

let song = document.getElementById("song");
let crtlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

song.pause();

function playPause() {
    if (crtlIcon.classList.contains("fa-pause")){
        song.pause();
        crtlIcon.classList.remove("fa-pause");
        crtlIcon.classList.add("fa-play");
    } else {
        song.play();
        crtlIcon.classList.add("fa-pause");
        crtlIcon.classList.remove("fa-play");
    }
}

if(song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
        updateRange();
    }, 500)
}

progress.onchange = function() {
    song.currentTime = progress.value;
}

function checkSliderValue() {
    let value = parseInt(range.value);
    
    // Example action based on value
    if (value === parseInt(range.max)) {
        crtlIcon.classList.remove("fa-pause");
        crtlIcon.classList.add("fa-play");
    }
}

setInterval(checkSliderValue, 1000);