

// const playbutton = document.querySelectorAll('.play-stop-btn');
// var video = [
  
//   document.querySelector('#video-one'),
//   document.querySelector('#video-two')

// ];

// function PlayPause() {
//   for(var i = 0; i < video.length; i++){
  
    
//   if(video[i].paused == true) {
//     video[i].play();
//     video[i].playbackRate = 1;
//     playbutton[i].style.backgroundImage = "url('images/play.svg')";
//   } else{
//     video[i].pause();
//     playbutton[i].style.backgroundImage = "url('images/pause.svg')";

//   }
// }

// }

// playbutton.forEach(btn => btn.addEventListener('click', PlayPause)); 



// video one

const playbutton = document.querySelector('.play-stop-btn');
const rwdbutton = document.querySelector('.rwd-btn');
const fwdbutton = document.querySelector('.fwd-btn');
const time = document.querySelector('.time-atr');
const volumeatr = document.querySelector('.volume');
const fsbtn = document.querySelector('.fsbtn');
var mainVideo = document.querySelector('#video-one');
var mainVideoTwo = document.querySelector('#video-two');



const btnsubtitles = document.querySelector('.subtitles');
const btndown = document.querySelector('.button-down');
const subtitles  = mainVideo.textTracks[0]; 
subtitles.mode = 'hidden';

function btndownanim() {
    window.scrollTo({
    top: window.innerHeight / 1,
    behavior: 'smooth',
  
  });
  
};


function subtitlesshow(){
    subtitles.mode = 'showing';
}

function openfullscreen(){
    if(mainVideo.requestFullscreen){
        mainVideo.requestFullscreen();
    }
}


function PlayPause() {
  
    
    if(mainVideo.paused == true) {
      mainVideo.play();
      mainVideo.playbackRate = 1;
      playbutton.style.backgroundImage = "url('images/play.svg')";
    } else{
      mainVideo.pause();
      playbutton.style.backgroundImage = "url('images/pause.svg')";

    }

}
 

  function PlayFwr() {
    mainVideo.playbackRate = 3;
    mainVideo.play();
  }
  
  function PlaySlw() {
    mainVideo.currentTime -= 3;
    mainVideo.play();
  }

    mainVideo.ontimeupdate = function() {
      var minutes = Math.floor(mainVideo.currentTime / 60);
      var seconds = Math.floor(mainVideo.currentTime - minutes * 60);
      if(seconds < 10){
          seconds = "0" + seconds;
        }
      
      time.innerHTML = "0" + minutes + ":" + seconds;

}

function volume() {
    mainVideo.volume = volumeatr.value / volumeatr.max;
  }


  playbutton.addEventListener('click', PlayPause); 
  fwdbutton.addEventListener('click', PlayFwr);
  rwdbutton.addEventListener('click', PlaySlw); 
  volumeatr.addEventListener('change', volume);
  btnsubtitles.addEventListener('click', subtitlesshow);
  fsbtn.addEventListener('click', openfullscreen);
  btndown.addEventListener('click', btndownanim);


  // video two

const playbuttontwo = document.querySelector('.play-stop-btn-two');
const rwdbuttontwo = document.querySelector('.rwd-btn-two');
const fwdbuttontwo = document.querySelector('.fwd-btn-two');
const timetwo = document.querySelector('.time-atr-two');
const volumeatrtwo = document.querySelector('.volume-two');
const fsbtntwo = document.querySelector('.fsbtn-two');
const subtitlestwo = mainVideoTwo.textTracks[0]; 
subtitlestwo.mode = 'hidden';



const btnsubtitlestwo = document.querySelector('.subtitles');


function btndownanim() {
    window.scrollTo({
    top: window.innerHeight / 1,
    behavior: 'smooth',
  
  });
  
};


function subtitlesshowtwo(){
    subtitlestwo.mode = 'showing';
}

function openfullscreentwo(){
    if(mainVideoTwo.requestFullscreen){
        mainVideoTwo.requestFullscreen();
    }
}


function PlayPausetwo() {
  
    
    if(mainVideoTwo.paused == true) {
      mainVideoTwo.play();
      mainVideoTwo.playbackRate = 1;
      playbuttontwo.style.backgroundImage = "url('images/play.svg')";
    } else{
      mainVideoTwo.pause();
      playbuttontwo.style.backgroundImage = "url('images/pause.svg')";

    }

}
 

  function PlayFwrtwo() {
    mainVideoTwo.playbackRate = 3;
    mainVideoTwo.play();
  }
  
  function PlaySlwtwo() {
    mainVideoTwo.currentTime -= 3;
    mainVideoTwo.play();
  }

    mainVideoTwo.ontimeupdate = function() {
    var minutes = Math.floor(mainVideoTwo.currentTime / 60);
    var seconds = Math.floor(mainVideoTwo.currentTime - minutes * 60);
    if(seconds < 10){
        seconds = "0" + seconds;
      }
    
      timetwo.innerHTML = "0" + minutes + ":" + seconds;

}

function volumetwo() {
    mainVideoTwo.volume = volumeatrtwo.value / volumeatrtwo.max;
  }


  playbuttontwo.addEventListener('click', PlayPausetwo); 
  fwdbuttontwo.addEventListener('click', PlayFwrtwo);
  rwdbuttontwo.addEventListener('click', PlaySlwtwo); 
  volumeatrtwo.addEventListener('change', volumetwo);
  btnsubtitlestwo.addEventListener('click', subtitlesshowtwo);
  fsbtntwo.addEventListener('click', openfullscreentwo);
  

  // audio player

  var audio = document.querySelector('audio');
  var playstopaudio = document.querySelector('.play-stop-btn-audio');
  var audiobar = document.querySelector('.audiobar');
  var timeaudio = document.querySelector('.time-atr-audio');
  var textbtn = document.querySelector('.text');
  var text = document.querySelector('.text-subt');
  var textbtnclose = document.querySelector('.close-text');
  var playfrwaudio = document.querySelector('.fwd-btn-audio');
  var playbkwaudio = document.querySelector('.rwd-btn-audio');


  function PlayFwraudio() {
    audio.playbackRate = 3;
    audio.play();
  }
  
  function Playbkwaudio() {
    audio.currentTime -= 3;
    audio.play();
  }


  function opentext() {
    text.style.display = 'block';

  }

  function closetext() {
    text.style.display = 'none';

  }

  function PlayPauseAudio() {
  
    
    if(audio.paused == true) {
      audio.play();
      audio.playbackRate = 1;
      playstopaudio.style.backgroundImage = "url('images/play.svg')";
    } else{
      audio.pause();
      playstopaudio.style.backgroundImage = "url('images/pause.svg')";

    }

}

function audiobarmoving() {
  audio.currentTime = audio.duration * audiobar.value / audiobar.max;
};

audio.ontimeupdate = function() {
  audiobar.value = audio.currentTime / audio.duration * audiobar.max;
  var minutes = Math.floor(audio.currentTime / 60);
  var seconds = Math.floor(audio.currentTime - minutes * 60);
  if(seconds < 10){
    seconds = "0" + seconds;
  }

  timeaudio.innerHTML = "0" + minutes + ":" + seconds;

 
}

playstopaudio.addEventListener('click', PlayPauseAudio); 
audiobar.addEventListener('change', audiobarmoving);
textbtn.addEventListener('click', opentext);
textbtnclose.addEventListener('click', closetext);
playfrwaudio.addEventListener('click', PlayFwraudio);
playbkwaudio.addEventListener('click', Playbkwaudio);