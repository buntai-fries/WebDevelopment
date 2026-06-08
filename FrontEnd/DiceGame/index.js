// Index.JS

var btn = document.getElementById("myButton");
/*
addEventListener(type, listener)
addEventListener(type, listener, options)
addEventListener(type, listener, useCapture)
*/

function rollDice(num, img) {
    switch(num) {
        case 1:
          document.getElementsByClassName(img)[0].src = "images/dice1.png";
          break;

        case 2:
          document.getElementsByClassName(img)[0].src = "images/dice2.png";
          break;

        case 3:
          document.getElementsByClassName(img)[0].src = "images/dice3.png";
          break;

        case 4:
          document.getElementsByClassName(img)[0].src = "images/dice4.png";
          break;

        case 5:
          document.getElementsByClassName(img)[0].src = "images/dice5.png";
          break;

        case 6:
          document.getElementsByClassName(img)[0].src = "images/dice6.png";
          break;
    }
}

function getConstrainRandomNum(min, max) {
    // constraintValue = Math.floor( (Math.random() * (max-min+1) ) + min)
    // And, min = 1
    // Thus, constraint Value = Math.floor( (Math.random() * (max) ) + min)
    return Math.floor( (Math.random() * (max)) + min);

}

btn.addEventListener("click", function(){
    let player1= getConstrainRandomNum(1, 6);
    let player2 = getConstrainRandomNum(1, 6);
    rollDice(player1, "img1")
    rollDice(player2, "img2")

    if (player1 == player2) {
        document.querySelector("h1").innerHTML = "Draw";
    }

    else if (player1 > player2) {
        document.querySelector("h1").innerHTML = "🚩 Player1 Won.";
    }

    else {
        document.querySelector("h1").innerHTML = "Player2 Won 🚩.";
    }

})
