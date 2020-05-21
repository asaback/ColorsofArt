let artWorkArray;
let img = [];
let currentNum = 0;
let loop = false;
let modalToggle = false;

function setup() {
  createCanvas(windowWidth, windowHeight);

  loadJSON(
    "https://www.rijksmuseum.nl/api/nl/usersets/2772616-my-first-collection?key=r2pysCE2&format=json",
    gotData
  );

  noLoop();
}

function gotData(data) {
  artWorkArray = data.userSet.setItems;
}

function draw() {
  if (artWorkArray) {
    for (i = 0; i < artWorkArray.length; i++) {
      img[i] = createImg(
        artWorkArray[i].image.cdnUrl,
        "alt text",
        (crossorigin = "Anonymous")
      );

      img[i].hide();
    }

    image(img[currentNum], 300, 40, 400, 610);
    makeColorArt();
    console.log(currentNum);

    if (modalToggle) {
      fill("#FFF");
      rect(100, 100, 100, 100);
    }
  }
}

function mousePressed() {
  redraw();
  if (mouseX > 300 && mouseX < 1120 && mouseY > 120 && mouseY < 730) {
    modalToggle = !modalToggle;
    console.log(modalToggle);
  }
}

function makeColorArt() {
  for (j = 0; j < 600; j++) {
    let c = get(500, j + 10);
    // let c = get(mouseX, mouseY)
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

// To do:
// Make the get function take user input as args
// Push to github
// Hook it up to netlify or github pages

// Maybe:
// Add music? classic that is mutable
// Add modal?
