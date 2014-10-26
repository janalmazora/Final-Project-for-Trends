/*
Author:
	Jeo Torrena
	Ramolito Javier
	Jan Almazora

Final Project for Trends
*/


/*
| ***************************************
| START OF CONSTRUCTORS
| ***************************************
*/
// for constructing Sound Effects
function Sfx(_googleTextToSpeech) {
	this.audio 		= new Audio('http://translate.google.com/translate_tts?ie=utf-8&tl=en&q=' + _googleTextToSpeech);
	
	this.playSfx = function() {
		this.audio.play();
	}
}

// for constructing songs
var timeHandler1;
var timeHandler2;

function Song()	{
	this.setTitle = function(_title) {
		this.title = _title;
		document.getElementById("song-title").innerHTML = this.title;
	}

	this.setArtist = function(_artist) {
		this.artist = _artist;
		document.getElementById("song-artist").innerHTML = this.artist;
	}

	this.setKaraoke = function(_lyrics, _lineDelays) {
		// Variable declarations
		var current_line 	= 0;
		var total_lines		= 0;
		var current_word 	= 0;
		var total_words 	= 0;
		var ctr 			= 0;
		var lyrics 			= _lyrics;
		var line_delay		= _lineDelays;

		// Counting total lines in lyrics
		for(var x in lyrics) {
			total_lines++;
		}

		nextLine(); // Start

		/* =================== *
		 * ==== FUNCTIONS ==== *
		 * =================== */

		// for creation of a line in lyrics
		function buildLine(lyrics, phrase) {
			var text 		= "";
			current_word 	= 0;
			total_words     = 0;
			
			for(var word in lyrics[phrase]) {
				text += "<span id='p"+current_word+"' _duration='"+ lyrics[phrase][word][1] +"'>" + lyrics[phrase][word][0] + "</span> ";
				current_word++;
				total_words++;
			}
			
			document.getElementById("lyrics").innerHTML = text;
		}

		// animation of text (color)
		function animateWord() {
			var content = document.getElementById("p"+ctr);

			if(ctr > total_words - 1) {
				ctr = 0;
				nextLine();
				return;
			}
			content.style.color = "blue";
			content.style.WebkitTextStroke = "2px white";

			var duration = content.getAttribute("_duration");
			
			content.style.transition = "color "+ duration +"s linear 0s";
			ctr++;
			
			timeHandler2 = window.setTimeout(animateWord, duration * 1000);
		}

		// builds a line after animation
		function nextLine() {
			if (current_line <= total_lines) {
				buildLine(lyrics, current_line);
				current_line++;
				timeHandler1 = window.setTimeout(animateWord, line_delay[current_line - 1] * 1000);
			}
		}
	}

	this.setBackground = function(_bgSrc) {
		var bg 		= document.getElementById("video-background");
		var video 	= document.getElementById("bgvideo");

		bg.src = "videos/" + _bgSrc;
		video.play();
	}
}


// for adding Songs to the playlist Array
function AddToPlayList(_song) {
	playlist.push(_song);
	console.log(_song + " has been added to the playlist");
}

/*
| ***************************************
| END OF CONSTRUCTORS
| ***************************************
*/

// this variable acts as a holder of all the songs
var playlist = [];

// hides the document when windows is loaded
window.onLoad = function() {
	$(document).hide();
};

// Used for toggling Sound effects that corresponds to the number
// pressed by the user.
function dialSongSfx(e) {
	var txtDial 	= document.getElementById("txtdial");
	var sfx 		= new Sfx(' ');
	if (txtDial.value.length <= 5)
		switch(e.keyCode) {
			case 48: // for 0
				sfx = new Sfx('0');
			break;

			case 49: // for number 1
				sfx = new Sfx('1');
			break;

			case 50: // for number 2
				sfx = new Sfx('2');
			break;

			case 51: // for number 3
				sfx = new Sfx('3');
			break;

			case 52: // for number 4
				sfx = new Sfx('4');
			break;

			case 53: // for number 5
				sfx = new Sfx('5');
			break;

			case 54: // for number 6
				sfx = new Sfx('6');
			break;

			case 55: // for number 7
				sfx = new Sfx('7');
			break;

			case 56: // for number 8
				sfx = new Sfx('8');
			break;

			case 57: // for number 9
				sfx = new Sfx('9');
			break;

			case 13: // Enter / Return
				toggleClick();
				txtDial.value = "";
			break;

			case 8: // BackSpace
				// do nothing
			break;
		}
	else
		sfx = new Sfx('Song Number Does Not Exist');

	sfx.playSfx();
}