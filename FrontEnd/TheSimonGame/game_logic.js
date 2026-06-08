/* This is logic behind the game. */

const colorArray = ["red", "blue", "green", "yellow"]; //fixed-array
let randomColor = [];
let userChoosenColor = [];

var level = 0;
var started = false;

// Game-Start()
$(document).keypress(function () {
  if (started == false) {
    started = true;
    nextSequence();
  }
});

// Generate the color-sequence
function nextSequence() {
  level++;
  $("#level-title").text("Level " + level);
  userChoosenColor = [];
  var randomNum = Math.floor(Math.random() * 4); // 0, 1, 2, 3
  var randomChoosenColor = colorArray[randomNum]; // red, blue, green, yellow
  randomColor.push(randomChoosenColor);
  // Simple animation to show which button to press.
  $("#" + randomChoosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChoosenColor);
}

// Check the player response
$(".btn").click(function () {
  var userColour = $(this).attr("id");
  userChoosenColor.push(userColour);
  $("#" + userColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(userColour);
  animPress(userColour);
  checkAnswer(userChoosenColor.length - 1);
});

// Compare the random-generated color and player response
function checkAnswer(currentLevel) {
  if (randomColor[currentLevel] == userChoosenColor[currentLevel]) {
    if (randomColor.length == userChoosenColor.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("#level-title").text("Game-Over :<");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    }, 100)
    gameOver();
  }
}

function animPress(currentColor) {
  $("#" + currentColor);
  setTimeout(function () {
    $("#" + currentColor);
  }, 100);
}

// Play the audio
function playSound(name) {
  var audioName = new Audio("sounds/" + name + ".mp3");
  audioName.play();
}

// Restart the game if player loses.
function gameOver() {
  randomColor = [];
  started = false;
  level = 0;
}
