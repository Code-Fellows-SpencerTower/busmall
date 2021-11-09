'use strict';

const clickCount = 0;

const maxRounds = 3;

// const imgNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];


// Image object constructor
function ImageObject(name, filePath) {
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

function defineImgs() {
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
    const randomImage = ImageObject.allImgObjects[randomIndex];
    return randomImage;
    //console.log('randomIndex: ' + randomIndex);
}

// change fx name
function randomizeImages() {
    const image1 = document.getElementById('img-1');
    image1.src = randomImage().filePath;
    console.log('image1.src: ' + image1.src);

    const image2 = document.getElementById('img-2');
    image2.src = randomImage().filePath;
    console.log('image2.src: ' + image2.src);

    const image3 = document.getElementById('img-3');
    image3.src = randomImage().filePath;
    console.log('image3.src ' + image3.src);

}

defineImgs();
randomImage();
randomizeImages();

// const image1 = document.getElementById('img-1');
// image1.src = randomImage().filePath;
// console.log('image1.src: ' + image1.src);


// const img1 = document.getElementById('img-1');
// img1.addEventListener('click', imgOneClick);
// const img2 = document.getElementById('img-2');
// img2.addEventListener('click', imgTwoClick);
// const img3 = document.getElementById('img-3');
// img3.addEventListener('click', imgThreeClick);

// populate allImgs array
//for (let i = 0; i < )

// function imgOneClick() {
//     alert('img1 clicked!');

// }

// function imgTwoClick() {
//     alert('img2 clicked!');
// }

// function imgThreeClick() {
//     alert('img3 clicked!');
// }





// boots.render('img-1');
// shark.render('img-2');
// tauntaun.render('img-3');

//console.log('ImageObject.allImgObjects: ' + ImageObject.allImgObjects[0].name);


