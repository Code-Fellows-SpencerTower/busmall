'use strict';

const clickCount = 0;


// Image object constructor
function ImageObject(name, filePath) {
    this.name = name;
    this.filePath = filePath;
    this.timesShown = 0;
    this.clicks = 0;

    // array of all images
    ImageObject.allImgs.push(this);
}

// instantiate allImgs property
ImageObject.allImgs = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];

console.log('ImageObject.allImgs: ' + ImageObject.allImgs)



// append image
const img1 = document.getElementById('img-1');
img1.src = '/assets/bag.jpg';

const imgName = 'bag.img';

// instantiate new image object
const newImg = new ImageObject (imgName, img1.src);

console.log('newImg.name: ' + newImg.name);


// add listener for click
img1.addEventListener('click', imgOneClick);

const img2 = document.getElementById('img-2');
img2.src = '/assets/banana.jpg';
img2.addEventListener('click', imgTwoClick);

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
