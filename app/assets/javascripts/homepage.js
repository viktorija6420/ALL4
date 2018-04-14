document.addEventListener("DOMContentLoaded", function(event) {

var playButton = document.querySelector(".fa.fa-chevron-circle-right");
var car = document.querySelector(".container");
var video = document.createElement("iframe");
var header = document.querySelector("header");
// onYouTubeIframeAPIReady();

// function hideCar () {
//   car.parentElement.removeChild(car);
// }
 playButton.id = "player";

function setVideo () {
  header.appendChild(video);
  video.style.position = "absolute";
  video.style.marginTop = "0";
  video.style.width = "100%";
  video.style.height = "45%";
  video.src = "https://www.youtube.com/embed/Ldjmb15Jsx0?ecver=1";
  video.id = 'iframe';

// function startVideo () {
//
// };
};
playButton.onclick = function () {
  // hideCar();
  setVideo();
    player.playVideo();
};


var article3 = document.querySelector('#article3');
var article4 = document.querySelector('#article4');

function showData(data){
  console.log('ajax success handler called');
  var objects = data;
  for (var i=0; i < objects.length; i++) {
    var currentObject = objects[i];
    for (var key in currentObject){
      var p = document.createElement('p');
      var a = document.createElement('p');
      if (key.includes('Name') || key.includes('Price') || key.includes('Photo')) {
        p.innerHTML = currentObject[key];
        p.className = 'paragraph';
        article3.appendChild(p);
      } else  {
        p.innerHTML = key + ":" + currentObject[key];
        // p.className = 'paragraph';
        article3.appendChild(p);
        console.log(article3);
      }
    };
  };
};

  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/test.json',
    dataType: 'json',
    // async: false,

    success: showData
});

});
