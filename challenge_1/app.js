// GAME FUNCTIONALITY

var box = document.getElementsByTagName('TD');
// box is an array of objects
console.log('each box:', box);
var rows = document.getElementsByTagName('TR');
console.log('rows:', rows);
var table = document.getElementById('table');
console.log('table:', table);

// add eventlistener to every tr element

for (var i = 0; i < box.length; i++) {
  box[i].addEventListener('click', modifyText, false);
}

var arrX = [];
var arrO = [];
var count = 0;

function modifyText() {
  if (!count) {
    this.firstChild.nodeValue = 'X';
    count++;
    arrX.push(this.cellIndex);
  } else if (count % 2 !== 0) {
    this.firstChild.nodeValue = 'O';
    count++;
    arrO.push(this.cellIndex);
  } else {
    this.firstChild.nodeValue = 'X';
    count++;
    arrX.push(this.cellIndex);
  }

  // Determine a winner
  var zerocountX = 0;
  var onecountX = 0;
  var twocountX = 0;
  var indexX = 0;

function winnerDeterminatorX(arrX) {
  console.log(arrX);
  for (var i = 0; i < arrX.length; i++) {
    if (arrX[i] === 0) {
      zerocountX++;
      indexX = i + 1;
      if (zerocountX === 3) {
        console.log(`X Wins!!!`)
        return;
      }
    }
    if (arrX[i] === 1) {
      onecountX++;
      indexX = i + 1;
      if (onecountX === 3) {
        console.log(`X Wins!!!`)
        return;
      }
    }
    if (arrX[i] === 2) {
      twocountX++;
      indexX = i + 1;
      if (twocountX === 3) {
        console.log(`X Wins!!!`)
        return;
      }
    }
  }
}

var zerocountO = 0;
var onecountO = 0;
var twocountO = 0;
var indexO = 0;

function winnerDeterminatorO(arrO) {
  console.log(arrO);
  for (var i = indexO; i < arrO.length; i ++) {
    if (arrO[i] === 0) {
      zerocountO++;
      indexO = i + 1;
      console.log('0: ', zerocountO);
      if (zerocountO === 3) {
        console.log(`O Wins!!!`)
        return;
      }
    }
    if (arrO[i] === 1) {
      onecountO++;
      indexO = i + 1;
      console.log('1: ', onecountO);
      if (onecountO === 3) {
        console.log(`O Wins!!!`)
        return;
      }
    }
    if (arrO[i] === 2) {
      twocountO++;
      indexO = i + 1;
      console.log('2: ', twocountO);
      if (twocountO === 3) {
        console.log(`O Wins!!!`)
        return;
      }
    }
  }
}
// winnerDeterminatorX(arrX);
// winnerDeterminatorO(arrO);
}





// RESET BUTTON

var resetButton = document.getElementById('button');
function reset () {
  for (var i = 0; i < box.length; i++) {
    console.log('...')
    box[i].firstChild.nodeValue = '*';
    count = 0;
    arrayX = [];
    arrayO = [];
  }
}
resetButton.addEventListener('click', reset, false);




  // if (rows[0].outerText === 'XX  X') {
  //   console.log('X Wins!!!');
  // }
  // console.log('XX  X => ', rows[0].outerText);
  // console.log(typeof(rows[0].outerText));
  // console.log(rows[0].outerText.length)