let artWorkArray;
let img = [];
let currentNum = 0;
let apiCall;

function preload() {
  let url =
    "https://www.rijksmuseum.nl/api/nl/usersets/2772616-my-first-collection?key=r2pysCE2&format=json";
  apiCall = loadJSON(url);
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch-holder");

  artWorkArray = apiCall.userSet.setItems;
  console.log(artWorkArray);
  for (i = 0; i < artWorkArray.length; i++) {
    img[i] = createImg(
      artWorkArray[i].image.cdnUrl,
      "alt text",
      (crossorigin = "Anonymous")
    );

    img[i].hide();
  }

  // loadJSON(
  //   "https://www.rijksmuseum.nl/api/nl/usersets/2772616-my-first-collection?key=r2pysCE2&format=json",
  //   gotData
  // );
}

// function gotData(data) {
//   artWorkArray = data.userSet.setItems;
// }

function draw() {
  if (artWorkArray) {
    image(img[currentNum], 300, 40, 400, 610);
    makeColorArt();
    console.log(currentNum);
  }
}

function mousePressed() {}

function makeColorArt() {
  for (j = 0; j < 600; j++) {
    let c = get(500, j + 10);
    console.log(c);
    fill(c);
    noStroke();
    rect(720, j + 10, 400, 40);
  }
}

function toggleForward() {
  if (currentNum <= artWorkArray.length) {
    currentNum = currentNum + 1;
  } else {
    currentNum = 0;
  }
}

function toggleBackward() {
  if (currentNum > 0) {
    currentNum = currentNum - 1;
  } else {
    currentNum = artWorkArray.length;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// To do:
// Make the get function take user input as args

// Maybe:
// Add music? classic that is mutable
// Add modal?
