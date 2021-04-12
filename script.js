let count = 1;
let currentTurn = "X";
let X_Turn = "X";
let O_Turn = "O";


function btnclick(id) {
  let button = document.getElementById(id);
  let filled = button.dataset.clicked;

  if (count != 10) {
    if (count % 2 != 0) {
      if (currentTurn == X_Turn && filled !== "true") {
        button.innerText = "X";
        currentTurn = O_Turn;
        button.dataset.clicked = "true";
        count++;

      }
      if (count == 10 && button.dataset.clicked == "true") {
        isDraw();
      }
    }
    else {
      if (currentTurn == O_Turn && filled !== "true") {
        button.innerText = "O";
        currentTurn = X_Turn;
        button.dataset.clicked = "true";
        count++;

      }
      if (count == 10 && filled == "true") {
        isDraw();
      }
    }

  }
  if (checkWinner()) {
    let winner = (checkWinner()) ? (currentTurn == "X") ? "Congratulations! Player2 wins" : "Congratulations! Player1 wins" : 0;
    reset();
  }
}

function isDraw() {
  let para = document.getElementById("para");
  para.innerText = "Draw!";
  let resetbtn = document.getElementById("reset");
  resetbtn.style.display = "inline";
}

function reset() {
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i).dataset.clicked = undefined;
    document.getElementById(i).innerText = '';
  }
  para.innerText = '';
  document.getElementById("reset").style.display = "none";
  count = 1;
  currentTurn = X_Turn;
}

function checkWinner() {
  if ((checkCondition('1', '2', '3')) || (checkCondition('4', '5', '6')) || (checkCondition('7', '8', '9')) || (checkCondition('1', '4', '7')) || (checkCondition('2', '5', '8')) || (checkCondition('3', '6', '9')) || (checkCondition('1', '5', '9')) || (checkCondition('3', '5', '7'))) {
    return true;
  }
}

function checkCondition(id1, id2, id3) {
  if (getData(id1) != '' && getData(id2) != '' && getData(id3) != '' && (getData(id1) === getData(id2)) && (getData(id1) === getData(id3))) {
    return document.getElementById(id1);
  }
  return false;
}

function getData(id) {
  return document.getElementById(id).innerText;
}

