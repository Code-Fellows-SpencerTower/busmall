'use strict';
// Globals //
const clickCount = 0;

const maxRounds = 3;

// const imgNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];

// Constructors //

function ImageObject(name, filePath) {
    this.name = name;
    this.filePath = filePath;
    this.timesShown = 0;
    this.clicks = 0;
    this.timesShown = 0;
    // entire object pushed into array
    ImageObject.allImgObjects.push(this);
}

ImageObject.allImgObjects = [];

// add constructor vars for image 1, 2, 3 (update renderImages, change while to do-while)

ImageObject.prototype.render = function (id) {

    const imageEl = document.getElementById(id);
    imageEl.src = this.filePath;
    imageEl.alt = this.name;
    this.timesShown += 1;
    // add caption element

    console.log('Image Shown: ' + this.name + ' ' + this.timesShown);

}

// Functions //

function defineImages() {

    const bag = new ImageObject('bag', '/assets/bag.jpg');
    const banana = new ImageObject('banana', '/assets/banana.jpg');
    const bathroom = new ImageObject('bathroom', '/assets/bathroom.jpg');
    const boots = new ImageObject('boots', '/assets/boots.jpg');
    const bubblegum = new ImageObject('bubblegum', '/assets/bubblegum.jpg');
    const chair = new ImageObject('chair', '/assets/chair.jpg');
    const cthulu = new ImageObject('cthulu', '/assets/cthulhu.jpg');
    const dogDuck = new ImageObject('dog-duck', '/assets/dog-duck.jpg');
    const pen = new ImageObject('pet-sweep', '/assets/pet-sweep.jpg');
    const scissors = new ImageObject('scissors', '/assets/scissors.jpg');
    const shark = new ImageObject('shark', '/assets/shark.jpg');
    const sweep = new ImageObject('sweep', '/assets/sweep.png');
    const tauntaun = new ImageObject('tauntaun', '/assets/tauntaun.jpg');
    const unicorn = new ImageObject('unicorn', '/assets/unicorn.jpg');
    const waterCan = new ImageObject('water-can', '/assets/water-can.jpg');
    const wineGlass = new ImageObject('wine-glass', '/assets/wine-glass.jpg');
}

function randomImage() {

    const randomIndex = [Math.floor(Math.random() * ImageObject.allImgObjects.length)];

    return ImageObject.allImgObjects[randomIndex];

}

// change fx name
function pickRandomImages() {

    const image1 = randomImage();
    const image2 = randomImage();
    const image3 = randomImage();

    // make into do-while loop
    // BREAKS
    while ((image1.filePath === image2.filePath) || (image1.filePath === image3.filePath) || (image2.filePath === image3.filePath)) {

        const image1 = randomImage();
        const image2 = randomImage();
        const image3 = randomImage();
    }

    renderImages(image1, image2, image3);

}

function renderImages(image1, image2, image3) {

    image1.render('img-1');
    image2.render('img-2');
    image3.render('img-3');
}


function addEventListener() {
    // handle click
    // attach listener to container instead of every element
    const imageContainerEl = document.getElementById('main');
    imageContainerEl.addEventListener('click', handleClick);
    handleClick();

}

// check event
function handleClick(event) {
    console.log(event.target);
}



// Have a start function
function start() {
    defineImages();
    randomImage();
    pickRandomImages();
    addEventListener();
}

start();


