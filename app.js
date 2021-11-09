'use strict';

const clickCount = 0;

const maxRounds = 3;

// const imgNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];


// Image object constructor
function ImageObject (name, filePath) {
    this.name = name;
    this.filePath = filePath;
    this.timesShown = 0;
    this.clicks = 0;
    // entire object pushed into array
    ImageObject.allImgObjects.push(this);
}

ImageObject.allImgObjects = [];

// render function that takes html image element id
ImageObject.prototype.render = function (id) {
    // get <img> from html
    const imgEl = document.getElementById(id);
    imgEl.src = this.filePath
    this.timesShown += 1;
}



const img1 = document.getElementById('img-1');
img1.addEventListener('click', imgOneClick); 
const img2 = document.getElementById('img-2');
img2.addEventListener('click', imgTwoClick);
const img3 = document.getElementById('img-3');
img3.addEventListener('click', imgThreeClick);

// populate allImgs array
//for (let i = 0; i < )

function imgOneClick() {
    alert('img1 clicked!');

}

function imgTwoClick() {
    alert('img2 clicked!');
}

function imgThreeClick() {
    alert('img3 clicked!');
}

const bag = new ImageObject('bag', '/assets/bag.jpg');
const banana = new ImageObject('banana', '/assets/banana.jpg');
const bathroom = new ImageObject('bathroom', '/assets/bathroom.jpg');
const boots = new ImageObject('boots', '/assets/boots.jpg');
const bubblegum = new ImageObject('bubblegum', '/assets/bubblegum.jpg');
const chair = new ImageObject('chair', '/assets/chair.jpg');
const cthulu = new ImageObject('cthulu', '/assets/cthulu.jpg');
const dogDuck = new ImageObject('dog-duck', '/assets/dog-duck.jpg');
const pen = new ImageObject('pet-sweep', '/assets/pet-sweep.jpg');
const scissors = new ImageObject('scissors', '/assets/scissors.jpg');
const shark = new ImageObject('shark', '/assets/shark.jpg');
const sweep = new ImageObject('sweep', '/assets/sweep.jpg');
const tauntaun = new ImageObject('tauntaun', '/assets/tauntaun.jpg');
const unicorn = new ImageObject('unicorn', '/assets/unicorn.jpg');
const waterCan = new ImageObject('water-can', '/assets/water-can.jpg');
const wineGlass = new ImageObject('wine-glass', '/assets/wine-glass.jpg');


//console.log('bag: ' + bag.name + "  " + bag.filePath);
boots.render('img-1');
//console.log('boots times shown: ' + boots.timesShown);
shark.render('img-2');
tauntaun.render('img-3');

console.log('ImageObject.allImgObjects: ' + ImageObject.allImgObjects[0].name);


// function randomImage() {
//     const randomIndex = [Math.floor(Math.random() * 19)];
//     //console.log('randomIndex: ' + randomIndex);
//     const 
// }