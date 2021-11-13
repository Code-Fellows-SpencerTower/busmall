'use strict';
// Globals //
let clickCount = 0;

const maxRounds = 25;

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

    const bag = new ImageObject('bag', '/img/bag.jpg');
    const banana = new ImageObject('banana', '/img/banana.jpg');
    const bathroom = new ImageObject('bathroom', '/img/bathroom.jpg');
    const boots = new ImageObject('boots', '/img/boots.jpg');
    const bubblegum = new ImageObject('bubblegum', '/img/bubblegum.jpg');
    const chair = new ImageObject('chair', '/img/chair.jpg');
    const cthulu = new ImageObject('cthulu', '/img/cthulhu.jpg');
    const dogDuck = new ImageObject('dog-duck', '/img/dog-duck.jpg');
    const pen = new ImageObject('pet-sweep', '/img/pet-sweep.jpg');
    const scissors = new ImageObject('scissors', '/img/scissors.jpg');
    const shark = new ImageObject('shark', '/img/shark.jpg');
    const sweep = new ImageObject('sweep', '/img/sweep.png');
    const tauntaun = new ImageObject('tauntaun', '/img/tauntaun.jpg');
    const unicorn = new ImageObject('unicorn', '/img/unicorn.jpg');
    const waterCan = new ImageObject('water-can', '/img/water-can.jpg');
    const wineGlass = new ImageObject('wine-glass', '/img/wine-glass.jpg');
}

function randomImage() {

    const randomIndex = [Math.floor(Math.random() * ImageObject.allImgObjects.length)];

    return ImageObject.allImgObjects[randomIndex];
}

// change fx name
function pickImages() {

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


function addImageEventListener() {
    // attach listener to img-div instead of each image
    const imageContainerEl = document.getElementById('img-div');
    imageContainerEl.addEventListener('click', handleImageClick);
}

// Refactor with constructor var for image
function handleImageClick(event) {

    // rough way to do it, will refactor later
    const imageName = event.target.alt;
    let clickedImage;

    // get image object from constructor array
    for (let i = 0; i < ImageObject.allImgObjects.length; i += 1) {
        // check for matching name
        if (ImageObject.allImgObjects[i].name === imageName) {
            clickedImage = ImageObject.allImgObjects[i];
        }
    }

    console.log('CLICKED IMAGE NAME CHECK: ' + clickedImage.name);
    console.log('CLICKED IMAGE INITIAL CLICK COUNT: ' + clickedImage.clicks);

    if (event.target.id === 'img-1') {
        clickedImage.clicks += 1
        console.log('IMG 1 CLICKED - ID = ' + event.target.id);
        console.log('CLICKED IMAGE CLICK COUNT: ' + clickedImage.clicks);

    } else if (event.target.id === 'img-2') {
        clickedImage.clicks += 1
        console.log('IMG 2 CLICKED - ID = ' + event.target.id);
        console.log('CLICKED IMAGE CLICK COUNT: ' + clickedImage.clicks);

    } else if (event.target.id === 'img-3') {
        clickedImage.clicks += 1
        console.log('IMG 3 CLICKED - ID = ' + event.target.id);
        console.log('CLICKED IMAGE CLICK COUNT: ' + clickedImage.clicks);

    } else {
        alert('Please click an image.');
    }

    trackClickCount();
    // randomize images
    pickImages();
}

function removeImageEventListener() {
    const imageContainerEl = document.getElementById('img-div');
    imageContainerEl.removeEventListener('click', handleImageClick);
}

function renderResultsList() {

    let resultsUlEl = document.getElementById('results-list');

    let imageName, imageTimesShown, imageClicks;

    for (let i = 0; i < ImageObject.allImgObjects.length; i += 1) {

        const resultsLiEl = document.createElement('li');

        imageName = ImageObject.allImgObjects[i].name;
        // console.log('imageName = ' + imageName);
        imageClicks = ImageObject.allImgObjects[i].clicks;
        imageTimesShown = ImageObject.allImgObjects[i].timesShown;

        resultsLiEl.textContent = `${imageName} has been shown ${imageTimesShown} times and clicked ${imageClicks} times.`

        resultsUlEl.appendChild(resultsLiEl);


    }

    console.log('RENDER COMPLETE');
}

function renderResultsChart() {

    const imageNames = [];
    const imageClicks = [];

    // get names and clicks from each image object and add to arrays
    for (let i = 0; i < ImageObject.allImgObjects.length; i += 1) {
        const imageObject = ImageObject.allImgObjects[i];

        imageNames.push(imageObject.name);
        imageClicks.push(imageObject.clicks);
    }

    // get canvas context
    const ctx = document.getElementById('results-chart').getContext('2d');
    const imageChart = new Chart(ctx, {
        type: 'bar',

        // data for chart, key-value pair
        data: {
            // provide array of names for labels
            labels: imageNames,
            datasets: [{
                label: 'Product Clicks',
                backgroundColor: 'rgb(200, 120, 142)',
                borderColor: 'rgb(200, 120, 142)',
                data: imageClicks
            }]
        },

        // chart config options
        options: {
            scales: {
                yAxis: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    console.log('END OF CHART FUNCTION');
}

function trackClickCount() {
    clickCount += 1

    console.log('CLICK COUNT: ' + clickCount);

    if (clickCount === maxRounds) {
        removeImageEventListener();
        showSubmitBtn();
    }

}

function showSubmitBtn() {
    const submitBtn = document.getElementById('submit-btn');
    submitBtn.hidden = false;
    submitBtn.addEventListener('click', handleSubmitClick);
}

function handleSubmitClick(event) {
    event.target.removeEventListener('click', handleSubmitClick);
    // refactor to new function
    renderResultsList();
    renderResultsChart();
}


function start() {
    // listener needs to be attached first
    addImageEventListener();
    defineImages();
    randomImage();
    pickImages();

}

start();

