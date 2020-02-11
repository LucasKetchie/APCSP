let button
let greeting

function setup() {
  createCanvas(windowWidth, windowHeight)

  button = createButton('Try Me');
  button.position(width / 2, height / 2)
  button.mousePressed(greet)

  greeting = createElement('h2', 'Say Hello!')
  greeting.position(width / 2, height / 3)

  textAlign(CENTER)
  textSize(50)
}

function greet() {
  greeting.html('HELLO!')

  for (let i = 0; i < 200; i++) {
    push();
    fill(random(255), 255, 255);
    translate(random(width), random(height))
    rotate(random(2 * PI));
    text('HELLO', 0, 0);
    pop();
  }
}