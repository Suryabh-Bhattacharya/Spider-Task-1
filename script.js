let button = document.querySelector('button');
button.addEventListener('click', randomint);
var y=1;
var z=0;
var x;
var stickman11= stickman12= stickman13= stickman14= stickman15= stickman21= stickman22= stickman23= stickman24 =stickman25 =0;

function randomint(){
  let x = Math.floor((Math.random() * 5) + 1);
  document.getElementById("num").innerHTML = x;
  y++;
  if (y%2==1) {
    document.getElementById("move").innerHTML = "Player 1 to play!";
    z=2
    point2();
  }
  else {
    document.getElementById("move").innerHTML = "Player 2 to play!";
    z=1
    point1();
  }
}

function point1() {
  if (x == 1) {
    stickman11 += 1;
  }
  else if (x == 2) {
    stickman12 += 1;
  } 
  else if (x == 3) {
    stickman13 += 1;
  }
  else if (x == 4) {
    stickman14 += 1;
  }
  else if (x == 5) {
    stickman15 += 1;
  }
}


function point2() {
  if (x == 1) {
    stickman21 += 1;
  }
  else if (x == 2) {
    stickman22 += 1;
  } 
  else if (x == 3) {
    stickman23 += 1;
  }
  else if (x == 4) {
    stickman24 += 1;
  }
  else if (x == 5) {
    stickman25 += 1;
  }
}

imagelist = [];
imagelist[0] = "stickman1.png";
imagelist[1] = "stickman2.png";
imagelist[2] = "stickman3.png";
imagelist[3] = "stickman4.png";
imagelist[4] = "stickman5.png";
imagelist[5] = "stickman6.png";

document.getElementById("st11").innerHTML = src="stickman1.png";