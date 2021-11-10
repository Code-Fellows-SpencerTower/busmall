'use strict';
// Globals //
let clickCount = 0;

const maxRounds = 3;

// Constructors //

function ImageObject(name, filePath) {
    this.name = name;
    this.filePath = filePath;
    this.timesShown = 0;
    this.clicks = 0;
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

    var image1 = randomImage();
    var image2 = randomImage();
    var image3 = randomImage();

    // make into do-while loop
    while ((image1.filePath === image2.filePath) || (image1.filePath === image3.filePath) || (image2.filePath === image3.filePath)) {

        image1 = randomImage();
        image2 = randomImage();
        image3 = randomImage();
    }

    renderImages(image1, image2, image3);

}

function renderImages(image1, image2, image3) {

    image1.render('img-1');
    image2.render('img-2');
    image3.render('img-3');
}


function addEventListener() {
    // attach listener to img-div instead of each image
    const imageContainerEl = document.getElementById('img-div');
    imageContainerEl.addEventListener('click', handleClick);
}

// Refactor with constructor var for image
function handleClick(event) {
    console.log(event.target);

    clickCount += 1
    
    // rough way to do it but it works, will refactor later
    const imageName = event.target.alt;
    let clickedImage = null;
    
    // get image object from constructor array
    for (let i = 0; i < ImageObject.allImgObjects.length; i += 1) {
        // check for matching filepath
        if (ImageObject.allImgObjects[i].name === imageName) {
            console.log('Clicked Image Name: ' + ImageObject.allImgObjects[i].name)
            clickedImage = ImageObject.allImgObjects[i];
            console.log('Clicked Image Clicks: ' + clickedImage.clicks);
        }
    }

    console.log('IMAGE FILEPATH: ' + imageName);

    if (event.target.id === 'img-1') {
        clickedImage.clicks += 1

    } else if (event.target.id === 'img-2') {
        clickedImage.clicks += 1

    } else if (event.target.id === 'img-3') {
        clickedImage.clicks += 1

    } else {
        alert('Please click an image.');
    }

}


// Have a start function
function start() {
    // listener needs to be attached first
    addEventListener();
    defineImages();
    randomImage();
    pickRandomImages();
    
}

start();


