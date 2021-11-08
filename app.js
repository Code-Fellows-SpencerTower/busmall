

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
ImageObject.allImgs = [];


// append image
const img1 = document.getElementById('img-1');
img1.src = '/assets/bag.jpg';
// add listener for click
img1.addEventListener('click', randomizeImgs)

const img2 = document.getElementById('img-2');
img2.src = '/assets/banana.jpg';

const img3 = document.getElementById('img-3');
img3.src = '/assets/bathroom.jpg';

// populate allImgs array
//for (let i = 0; i < )

function randomizeImgs() {
    alert('img1 clicked!');
}