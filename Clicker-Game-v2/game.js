// Initialize UI Elements
let bananaImg 
let scoreDisplay
let livesDisplay
let difficultySlider
let title

// Initialize Game Variables
let lives = 3
let score = 0
let winningNum = 5

function setup() {
  // Setup Canvas
  createCanvas(windowWidth, windowHeight)
  bananaImg = createImg("banana.png", 'banana')
  // Setup score display
  scoreDisplay = createElement('h2', "Score =" + score)
  scoreDisplay.position(width/20, height/20)
  // Setup Lives Display
  livesDisplay = createElement('h4', 'LIVES: ' + lives)
  livesDisplay.position(width / 20, height / 14)


  // Creates Difficulty Slider
  const difficultyLabel = createElement('h4', 'DIFFICULTY')
  difficultyLabel.position(width/20, height/11)
  difficultySlider = createSlider(1,10,1)
  difficultySlider.position(width/9, height/9)
}

function draw() {
  // Adjust frameRate according to slider
frameRate(difficultySlider.value())

  // Randomly Position Banana
  
  bananaImg.position(random(width), random(height))
  bananaImg.mousePressed()
}

function mousePressed() {
  if (dist(mouseX, mouseY, bananaImg.x, bananaImg.y) > 200) {
    decreaseLives()
    checkLose()
  }
  else {
    increaseScore()
    checkWin()
  }
}

function increaseScore() {
 score = score+1
}

function decreaseLives() {
let lives = lives-1
}

function checkWin() {
if(score == winningNum){
// win screen
}

}

function checkLose() {
if(lives == 0){
  // lose screen
}
}