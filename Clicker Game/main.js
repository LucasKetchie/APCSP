let button

function setup() {
createCanvas(width,height)
background('red')
createElement('h1','Welcome Contestant')
button = createButton("Continue to Game")
button.mouseClicked(goToGame)
}
function goToGame() {
    window.location.href = "game.html";
}