'use strict';

const clickCount = 0;

const maxRounds = 3;

// Image object constructor
function ImageObject(name, filePath) {
    this.name = name;
    this.filePath = filePath;
    this.timesShown = 0;
    this.clicks = 0;

    // entire object pushed into array
    ImageObject.allImgObjects.push(this);
}

// instantiate allImgs property
// image directory
ImageObject.allImgObjects = [];

'bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'

// render function that takes html image element id
ImageObject.prototype.render = function (id) {
    // get <img> from html
    const imgEl = document.getElementById(id);
    // change image by changing img src
    imgEl.src = this.filePath
    // TODO: add img alt, possibly class
    // increment times shown by 1
    this.timesShown += 1;
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




console.log('bag: ' + bag.name + "  " + bag.filePath);
boots.render('img-1');
console.log('boots times shown: ' + boots.timesShown);
shark.render('img-2');
tauntaun.render('img-3');

// shuffle array

// grab first

// grab second, check if different to 

// add to new array


// function that will call render method to show images
function renderImgs(img1, img2, img3) {
    // get img1 elem id


    // change img1 elem src to chang img

}


// add image 1
const img1 = document.getElementById('img-1');
img1.addEventListener('click', imgOneClick);

// add image 2
const img2 = document.getElementById('img-2');
img2.addEventListener('click', imgTwoClick);

// add image 3
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


