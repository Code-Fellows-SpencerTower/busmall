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

ImageObject.prototype.render = function (id) {
    const imgEl = document.getElementById(id);
    imgEl.src = this.filePath
    // add img alt, possibly class
    

}

const bag = new ImageObject('bag', '/assets/bag.jpg');
const banana = new ImageObject('banana', '/assets/banana.jpg');
const bathroom = new ImageObject('bathroom', '/assets/bathroom.jpg');
const boots = new ImageObject('boots', '/boots/bag.jpg');
const breakfast = new ImageObject('breakfast', '/breakfast/bag.jpg');

// shuffle array

// grab first

// grab second, check if different to 


// add to new array




// instiate all images as objects
// iterate through and instantiate each image
for (let i = 0; i < ImageObject.allImgs.length; i += 1) {

}

function renderImgs(img1, img2, img3) {
    // get img1 elem id

    // change img1 elem src to chang img

}



// add image 1
const img1 = document.getElementById('img-1');
img1.src = '/assets/bag.jpg';
// add listener for click
img1.addEventListener('click', imgOneClick);

// add image 2
const img2 = document.getElementById('img-2');
img2.src = '/assets/banana.jpg';
img2.addEventListener('click', imgTwoClick);

// add image 3
const img3 = document.getElementById('img-3');
img3.src = '/assets/bathroom.jpg';
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


