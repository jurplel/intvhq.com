$(document).foundation()

var webm1 = "https://zippy.gfycat.com/MemorableDearestHarlequinbug.webm";
var mp41 = "https://giant.gfycat.com/MemorableDearestHarlequinbug.mp4";

var webm2 = "https://giant.gfycat.com/ShamefulCompassionateBluebreastedkookaburra.webm"
var mp42 = "https://giant.gfycat.com/ShamefulCompassionateBluebreastedkookaburra.mp4"

var numberofvideos = 2

var randomvid = Math.floor((Math.random() * numberofvideos) + 1);


$('#videBG').vide({
    webm: eval("webm" + randomvid),
    mp4: eval("mp4" + randomvid),
    poster: 'assets/img/intv4_defocusbackground.jpg',
}, {
	posterType: 'jpg'
});

var IconIsPlay

$(function() {
  var video = $('#videBG').data('vide').getVideoObject();

  $('#VControl').on('click', function() {
    video.paused ? video.play() : video.pause();
    if (IconIsPlay)
    {
        document.getElementById("PauseIcon").setAttribute("class", "fa fa-pause");
        IconIsPlay = false
    }
    else
    {
        document.getElementById("PauseIcon").setAttribute("class", "fa fa-play");
        IconIsPlay = true
    }

  });

});