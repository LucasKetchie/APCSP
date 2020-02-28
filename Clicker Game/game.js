let bananaImg
let heading
function setup() {
createCanvas(windowWidth,windowHeight);
bananaImg = createImg('banana.png', 'banana image');
bananaImg.size(200,100)
heading = createElement('h1', 'Click The Banana!');
heading.position(width/3,height/4)
frameRate(1)
}
function draw() {
bananaImg.position(random(width),random(height));
bananaImg.mousePressed(youWon);
}
function youWon() {
background('white');
heading.html('You Won!');
bananaImg.remove();
}
// let button
// function setup() {
//   // createCanvas(400, 400);
//   button = createButton('Go To Main Page');
//   button.position(width*2, height*3)
//   button.mousePressed(goToLink)
// }
// function draw() {
//   background(220);
// }
// function goToLink() {
//   window.location.href = 'game.html'; // Same tab
// }