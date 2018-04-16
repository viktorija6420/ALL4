$( document ).ready( function() {

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


var parentArticle = document.querySelector('.parentArticle');

function showData(data){
  // console.log('ajax success handler called');
  data.forEach(car => {
    var block = document.createElement("li")
    block.className = "block"
    parentArticle.appendChild(block)
    var name = document.createElement("h4")
    block.appendChild(name)
    name.innerText=car.Name
    var price = document.createElement("h5")
    block.appendChild(price)
    price.innerText = car.Price
    var photo = document.createElement("img")
    block.appendChild(photo)
    photo.src = car.Photo
    photo.alt = car.Name
    photo.className = "bottom_pictures";


    Object.entries(car).slice(3).forEach(prop =>{
      var p = document.createElement("p")
      p.innerText = `${prop[0]}: ${prop[1]}`
      block.appendChild(p)
    })

    var button1 = document.createElement('button');
    button1.innerText = 'LEARN MORE'
    button1.className = 'bottom_button'
    var button2 = document.createElement('button');
    button2.innerText = 'BUILD A PRICE'
    button2.className = 'bottom_button'
    block.appendChild(button1)
    block.appendChild(button2)

})
};

  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/test.json',
    dataType: 'json',
    // async: false,

    success: showData
});

});
