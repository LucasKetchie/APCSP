// function setup() {
//     createCanvas(windowHeight, windowWidth);
//     background ('lightGray');
//     createP('This was created in JavaScript!');
//     createP('This is also a paragraph');
//     createDiv();
// }
// function draw() {
//     createP("this was also created in Java script")
// }
// function setup() { 
//     createCanvas(400, 400);
//     background(220)
//     createElement('h1', 'my lucky numbers below');
//     createElement('p', 'my lucky number is 7');
//   } 
//   function draw() { 
//     background(220);
// //   }

//   function setup() { 
//     createCanvas(windowWidth, windowHeight);

//     createElement('h1', 'my lucky number is...');
//     createElement('p', 'my lucky number is 7');
//     let numText = createElement('P 14 ');
//     consoleLog(numText);
//   } 
//   function draw() { 
//     background(220);
//   }
// function setup(){
//     createCanvas(400,400);

// }
// function mousePressed(){
//     createP('My lucky number is'+random(0))
// }
// function draw(){
//     background(220);
// }

// Event Listeners, Btn Clicks
let button
let greeting
function setup() {
    createCanvas(windowWidth, windowHeight)
    button = createButton('Try Me');
    button.position(width / 2, height / 2)
    button.mousePressed(greet)
    greeting = createElement('h2', 'Say Hello!')
    greeting.position(width/2, height/3)
}

function greet(){
    greeting.html('Hello')
    for(let(i=0; i<200; i++)) {
    push();
    fill(random(255),255,255);
    translate(random(width),random(height));
    rotate(random(2*PI));
    TextTrackCue('Hello',0,0);
    pop();
    }
}