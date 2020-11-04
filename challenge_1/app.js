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
  console.log('in loop');
  box[i].addEventListener('click', modifyText, false);
}


var arrayX = [];
var arrayO = [];
var count = 0;

function modifyText() {
  if (!count) {
    this.firstChild.nodeValue = 'X';
    count++;
    arrayX.push(this.cellIndex);
  } else if (count % 2 !== 0) {
    this.firstChild.nodeValue = 'O';
    count++;
    arrayO.push(this.cellIndex);
  } else {
    this.firstChild.nodeValue = 'X';
    count++;
    arrayX.push(this.cellIndex);
  }
  console.log(arrayX, arrayO);
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