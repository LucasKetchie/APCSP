let colorSlider;
let hueSlider;
let satSlider;
let textInput;
let h1;
function setup() {
    createCanvas(600, 120); 
    colorMode(HSB);
    colorSlider = createSlider(0,360,50);
    satSlider = createSlider(0,100,0);
    brightSlider = createSlider(0,100,0);
    textInput = createInput("hellos");
    h1 = createElement("h1", textInput.value());
  }
  function draw() {
    background(colorSlider.value(), satSlider.value(), brightSlider.value());
    textSize(80);
    text(textInput.value(), 210, 100);
    h1.html(textInput.value());
  }
