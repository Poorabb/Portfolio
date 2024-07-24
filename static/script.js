window.onload = function () {
    var audio = document.getElementById('audio');
    var playPauseBtn = document.getElementById('play-pause');

    audio.volume = 0.03;
    // Play or Pause the audio
    playPauseBtn.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
            playPauseBtn.src = pauseImgUrl;
        } else {
            audio.pause();
            playPauseBtn.src = playImgUrl;
        }
    });
}

