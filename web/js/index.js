let captionLanguage;
let mediaPlayer;
let playPauseBtn;
let muteBtn;
let progressBar;
document.addEventListener("DOMContentLoaded", function () {
    initialiseMediaPlayer();
}, false);

//console.log(jsonData.courses[0]);

function initialiseMediaPlayer() {
    mediaPlayer = document.getElementById('video1');
    captionLanguage = document.getElementById("captionLanguage")
    playPauseBtn = document.getElementById('play-pause-button');
    muteBtn = document.getElementById('mute-button');
    progressBar = document.getElementById('progress-bar');
    //mediaPlayer.controls = false;
    mediaPlayer.addEventListener('play', function () {
        playPauseBtn.classList.remove("fa-play");
        playPauseBtn.classList.add("fa-pause");
    }, false);
    mediaPlayer.addEventListener('pause', function () {
        playPauseBtn.classList.remove("fa-pause");
        playPauseBtn.classList.add("fa-play");
    }, false);

    mediaPlayer.addEventListener('volumechange', function (e) {

        if (mediaPlayer.muted) {
            //console.log("In if")
            muteBtn.classList.remove("fa-volume-up");
            muteBtn.classList.add("fa-volume-off");
        } else {
            //console.log("In else")
            muteBtn.classList.remove("fa-volume-off");
            muteBtn.classList.add("fa-volume-up");
        }
    }, false);

    mediaPlayer.addEventListener('timeupdate', updateProgressBar, false);
    captionLanguage.addEventListener("change", changeCaptionLanguage);

    loadSideBar();
}

function togglePlayPause() {
    if (mediaPlayer.paused || mediaPlayer.ended) {
        playPauseBtn.classList.remove("fa-play");
        playPauseBtn.classList.add("fa-pause");
        //changeButtonType(btn, 'Pause')
        mediaPlayer.play();
    } else {
        playPauseBtn.classList.remove("fa-pause");
        playPauseBtn.classList.add("fa-play");
        mediaPlayer.pause();
    }
}

function stopPlayer() {
    mediaPlayer.pause();
    mediaPlayer.currentTime = 0;
    playPauseBtn.classList.remove("fa-pause");
    playPauseBtn.classList.add("fa-play");

}

function toggleMute() {
    if (mediaPlayer.muted) {
        muteBtn.classList.remove("fa-volume-off");
        muteBtn.classList.add("fa-volume-up");
        mediaPlayer.muted = false;
    } else {
        muteBtn.classList.remove("fa-volume-up");
        muteBtn.classList.add("fa-volume-off");
        mediaPlayer.muted = true;
    }
}

function updateProgressBar() {
    var percentage = Math.floor((100 / mediaPlayer.duration) *
        mediaPlayer.currentTime);
    progressBar.value = percentage;
    progressBar.style.width = percentage + '%';
    progressBar.innerHTML = percentage + '% played';
}

function changeCaptionLanguage() {
    for (i = 0; i < mediaPlayer.textTracks.length; i++) {
        if (mediaPlayer.textTracks[i].kind == "subtitles" && mediaPlayer.textTracks[i].language == captionLanguage.value) {
            mediaPlayer.textTracks[i].mode = "showing";
            //break;
        } else {
            mediaPlayer.textTracks[i].mode = "disabled";
        }
    }
}

function toggleControls() {
    var btn = document.getElementById('show-controls');
    var controls = document.getElementById('media-controls');

    if (mediaPlayer.hasAttribute("controls")) {
        btn.title = 'Hide Custom controls';
        btn.innerHTML = 'Hide Custom controls';
        controls.className = 'show-custom-controls';
        mediaPlayer.removeAttribute("controls")
    } else {
        btn.title = 'Show Custom Controls';
        btn.innerHTML = 'Show Custom Controls';
        controls.className = 'hide-custom-controls';
        mediaPlayer.setAttribute("controls", "controls")
    }
}

function loadSideBar() {
    console.log("Loading side bar content");
    var div = document.createElement("div");
    div.addClass = "card-header";
    div.id = "sideBarHeader";
    document.getElementById("sideBar").appendChild(div);


    //document.getElementById('sideBarHeader').innerHTML = '<ol><li>' + jsonData.courses[0].chapters[0] + '</li></ol>';
    let lengthOfCourses = jsonData.courses.length;
    //let lengthOfChapter = jsonData.courses[counterForCourses].chapters.length;



    for (var i = 0; i < lengthOfCourses; i++) {

        document.getElementById('sideBarHeader').innerHTML += '<div class="card-body text-secondary"> <h5 class = "card-title" >' + jsonData.courses[i].name + '</h5>';
        for (var j = 0; j < jsonData.courses[i].chapters.length; j++) {
            document.getElementById('sideBarHeader').innerHTML += '<div class = "list-group"> <a href = "#" class = "list-group-item list-group-item-action">   ' + jsonData.courses[i].chapters[j] + '</a>  </div>'
        }
    }
}
