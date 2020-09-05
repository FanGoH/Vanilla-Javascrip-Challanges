const playButton = document.querySelector(".playButton");
const videoPlayer = document.querySelector(".videoBox");
const volumeKnob = document.querySelector(".volume.button");
const speedKnob = document.querySelector(".speed.button")

let volumeKnobActive = false;
let speedKnobActive = false;

console.log(videoPlayer);


const setVolume = (notNormalizedVolume) => {
    videoPlayer.volume = notNormalizedVolume/100;
}

const setPlaybackRate = (speedValue) => {
    videoPlayer.playbackRate = speedValue/100;
}


const playButtonCallback = () => {
    if(videoPlayer.paused){
        videoPlayer.play();
        return
    }
    videoPlayer.pause();

}

const playButtonState = () => {
    playButton.innerHTML = videoPlayer.paused ? "►" : "❚❚";
}

const volumeKnobState = () => {
    volumeKnob.value = (videoPlayer.volume * 100);
}

const speedKnobState = () => {
    speedKnob.value = (videoPlayer.playbackRate * 100);
}

const volumeCallback = (e) => {
    if(!volumeKnobActive)
        return;
    setVolume(e.target.value);
}

const speedCallback = (e) => {
    if(!speedKnobActive || (e.target.value % 10 != 0))
        return;
    setPlaybackRate(e.target.value);
}

playButton.addEventListener("click", 
    playButtonCallback
)

videoPlayer.addEventListener("play", playButtonState);
videoPlayer.addEventListener("pause", playButtonState);
videoPlayer.addEventListener("ratechange", speedKnobState);
videoPlayer.addEventListener("volumechange", volumeKnobState);

volumeKnob.addEventListener("mousedown", () => {volumeKnobActive = true});
volumeKnob.addEventListener("mousemove", volumeCallback);
volumeKnob.addEventListener("change", volumeCallback);
volumeKnob.addEventListener("mouseup", () => {volumeKnobActive = false})

speedKnob.addEventListener("mousedown", () => {speedKnobActive = true});
speedKnob.addEventListener("mousemove", speedCallback);
speedKnob.addEventListener("change", speedCallback);
speedKnob.addEventListener("mouseup", () => {speedKnobActive = false})


setVolume(volumeKnob.value);
speedKnob.value = 100;
setPlaybackRate(speedKnob.value);