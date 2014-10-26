/*
Author:
  Jeo Torrena
  Ramolito Javier
  Jan Almazora

Final Project for Trends
*/

var songs = [];
var navigationHandler = setTimeout(function(){}, 0);

function toggleVol() {
  document.getElementById("bgvideo").volume = parseFloat(document.getElementById("rngVolume").value);
}

function displayNowPlaying() {
  document.getElementById("mq-nowplaying").innerHTML = document.getElementById("song-title").innerHTML + " by " + document.getElementById("song-artist").innerHTML;
}

function ShowControlPanel() {
  var controlPanel = document.getElementById("controlPanel");

  controlPanel.style.opacity = 0.8;
  controlPanel.style.transition = "0.3s linear 0s";

  clearTimeout(navigationHandler);
}

function HideControlPanel() {
  navigationHandler = setTimeout(function() {
    var controlPanel = document.getElementById("controlPanel");

    controlPanel.style.opacity    = 0.01;
    controlPanel.style.transition = "0.3s linear 0s";
  }, 5000);
}


function toggleClick() {
  var input    = document.getElementById("txtdial").value;
  var lyrics  = document.getElementById("lyrics");
  var video   = document.getElementById("bgvideo");
  var reservedSongs = document.getElementById("reservedSongs");
  var doesNotExist = true;


  if (input != "") {
    songs.push(input); // adds input to the array songs.
  }
  
  if(video.src != "" && video.ended == false) {
    reservedSongs.innerHTML = "Reserved: " + songs;
    return;
  }

  clearTimeout(timeHandler1);
  clearTimeout(timeHandler2);

  $("#mainheader").fadeIn();
  $("#bgvideo").hide();
  $("#bgvideo").fadeIn("slow");

  setTimeout(function(){
    $("#mainheader").fadeOut();
  }, 6000);

  lyrics.innerHTML = "";

  if (songs[0] != "") {
    if(songs[0] == "00001") {
      //playing of the song
      video.src = "videos/beer - itchyworms.mp4";
      video.play();

      //lyrics of song
      var beer = new Song();
      beer.setTitle("Beer");
      beer.setArtist("Itchy Worms");
      
      beer.setKaraoke(beerLyrics, beerLineDelays);
      beer.setBackground("beer - itchyworms.mp4");

      doesNotExist = false;
      sfx = new Sfx("now playing Beer by itchyworms");
    }

    if(songs[0] == "00002") {
      //playing of the song
      video.src = "videos/ron henley - biglang liko.mp4";
      video.play();

      //lyrics of song
      var bLiko = new Song();
      bLiko.setTitle("Biglang Liko");
      bLiko.setArtist("Ron Henley");

      bLiko.setKaraoke(biglangLikoLyrics, biglangLikoLineDelays);
      bLiko.setBackground("videos/ron henley - biglang liko.mp4");

      doesNotExist = false;
      sfx = new Sfx("now playing Biglang Liko by Ron Henley featuring Pow Chavez");
    }

    input.value     = "";
    input.innerHTML = "";
    songs.shift(); // removes first song from the list.

    if(songs[0] != null) {
      reservedSongs.innerHTML = "Reserved: " + songs;
    } else {
      reservedSongs.innerHTML = "";
    }

    var timer = setInterval(function(){checkNowPlaying()}, 1000);

    if (doesNotExist)
      sfx = new Sfx("Song number does not exist");

    displayNowPlaying();
  }
  else {
    sfx = new Sfx("Please enter a song number");
  }

  sfx.playSfx();  
}

function checkNowPlaying() {
  var video   = document.getElementById("bgvideo");
  var content = document.getElementById("check");

  if (video.ended == true) {
    toggleClick();
  }
}

/*function stopSong() {
  var video = document.getElementById("bgvideo");
  // var lyrics = document.getElementById("lyrics");
  video.currentTime = video.duration;

  // lyrics.innerHTML = "";
  // clearTimeout(timeHandler1);
  // clearTimeout(timeHandler2);
  // clearInterval(timer);
}*/