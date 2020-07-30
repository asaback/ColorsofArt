let artWorkArray;
let img = [];
let currentNum = 0;
let apiCall;

function preload() {
  let url =
    "https://www.rijksmuseum.nl/api/nl/usersets/2772616-my-first-collection?key=r2pysCE2&format=json";
  apiCall = loadJSON(url);
  console.log("hej", apiCall);
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch-holder");

  artWorkArray = apiCall.userSet.setItems;
  const imgArray = [];
  for (i = 0; i < artWorkArray.length; i++) {
    imgArray.push(artWorkArray[i].image.cdnUrl);
  }

  for (i = 0; i < imgArray.length; i++)
    img[i] = createImg(imgArray[i], "alt text", (crossorigin = "Anonymous"));

  renderImage();
}

// function draw() {
//   image(
//     img[currentNum],
//     windowWidth / 6,
//     windowHeight / 50,
//     windowWidth / 3,
//     windowHeight / 1.2
//   );
//   makeColorArt();
//   noLoop();
// }

function renderImage() {
  if (img[currentNum]) {
    image(
      img[currentNum],
      windowWidth / 6,
      windowHeight / 50,
      windowWidth / 3,
      windowHeight / 1.2
    );
    makeColorArt();
  }
}

function makeColorArt() {
  for (j = 0; j < windowHeight / 1.2; j++) {
    let c = get(windowWidth / 3, j + windowHeight / 50);
    fill(c);
    noStroke();
    rect(windowWidth / 2 + 10, j + windowHeight / 50, windowWidth / 3, 1);
  }
}

function toggleForward() {
  if (currentNum < artWorkArray.length - 1) {
    currentNum = currentNum + 1;
  } else {
    currentNum = 0;
  }
  renderImage();
}

function toggleBackward() {
  if (currentNum > 0) {
    currentNum = currentNum - 1;
  } else {
    currentNum = artWorkArray.length - 1;
  }
  renderImage();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  renderImage();
}
