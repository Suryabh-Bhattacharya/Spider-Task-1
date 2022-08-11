let button = document.querySelector('button');
button.addEventListener('click', randomint);
var y=1;
var z=0;
var x;
var stickman11= stickman12= stickman13= stickman14= stickman15= stickman21= stickman22= stickman23= stickman24 =stickman25 =0;

function randomint(){
  let x = Math.floor((Math.random() * 5) + 1);
  document.getElementById("num").innerHTML = x;
  z++;
  y++;
  if (z==60){
    document.getElementById("move").innerHTML = "GAME OVER!";
    document.getElementById("num").innerHTML = "🕷";
  }
  else if (z<60){
    if (y%2==1) {
      document.getElementById("move").innerHTML = "Player 1 to play!";
      if (x == 1) {
        stickman21 += 1;
        if (stickman21 == 1) {
          document.getElementById('st21').src = "Stickman1.png";
        }
        else if (stickman21 == 2) {
          document.getElementById('st21').src = "Stickman2.png";
        }
        else if (stickman21 == 3) {
          document.getElementById('st21').src = "Stickman3.png";
        }
        else if (stickman21 == 4) {
          document.getElementById('st21').src = "Stickman4.png";
        }
        else if (stickman21 == 5) {
          document.getElementById('st21').src = "Stickman5.png";
        }
        else if (stickman21 == 6) {
          document.getElementById('st21').src = "Stickman6.png";
        }
        else if (stickman21 == 7) {
          document.getElementById('st21').src = "Stickman Fighter 2.png";
          stickman11=0
          document.getElementById('st11').src = "Blank.png";
        }
      }
      else if (x == 2) {
        stickman22 += 1;
        if (stickman22 == 1) {
          document.getElementById('st22').src = "Stickman1.png";
        }
        else if (stickman22 == 2) {
          document.getElementById('st22').src = "Stickman2.png";
        }
        else if (stickman22 == 3) {
          document.getElementById('st22').src = "Stickman3.png";
        }
        else if (stickman22 == 4) {
          document.getElementById('st22').src = "Stickman4.png";
        }
        else if (stickman22 == 5) {
          document.getElementById('st22').src = "Stickman5.png";
        }
        else if (stickman22 == 6) {
          document.getElementById('st22').src = "Stickman6.png";
        }
        else if (stickman22 == 7) {
          document.getElementById('st22').src = "Stickman Fighter 2.png";
          stickman12=0
          document.getElementById('st12').src = "Blank.png";
        }
      } 
      else if (x == 3) {
        stickman23 += 1;
        if (stickman23 == 1) {
          document.getElementById('st23').src = "Stickman1.png";
        }
        else if (stickman23 == 2) {
          document.getElementById('st23').src = "Stickman2.png";
        }
        else if (stickman23 == 3) {
          document.getElementById('st23').src = "Stickman3.png";
        }
        else if (stickman23 == 4) {
          document.getElementById('st23').src = "Stickman4.png";
        }
        else if (stickman23 == 5) {
          document.getElementById('st23').src = "Stickman5.png";
        }
        else if (stickman23 == 6) {
          document.getElementById('st23').src = "Stickman6.png";
        }
        else if (stickman23 == 7) {
          document.getElementById('st23').src = "Stickman Fighter 2.png";
          stickman13=0
          document.getElementById('st13').src = "Blank.png";
        }
      }
      else if (x == 4) {
        stickman24 += 1;
        if (stickman24 == 1) {
          document.getElementById('st24').src = "Stickman1.png";
        }
        else if (stickman24 == 2) {
          document.getElementById('st24').src = "Stickman2.png";
        }
        else if (stickman24 == 3) {
          document.getElementById('st24').src = "Stickman3.png";
        }
        else if (stickman24 == 4) {
          document.getElementById('st24').src = "Stickman4.png";
        }
        else if (stickman24 == 5) {
          document.getElementById('st24').src = "Stickman5.png";
        }
        else if (stickman24 == 6) {
          document.getElementById('st24').src = "Stickman6.png";
        }
        else if (stickman24 == 7) {
          document.getElementById('st24').src = "Stickman Fighter 2.png";
          stickman14=0
          document.getElementById('st14').src = "Blank.png";
        }
      }
      else if (x == 5) {
        stickman25 += 1;
        if (stickman25 == 1) {
          document.getElementById('st25').src = "Stickman1.png";
        }
        else if (stickman25 == 2) {
          document.getElementById('st25').src = "Stickman2.png";
        }
        else if (stickman25 == 3) {
          document.getElementById('st25').src = "Stickman3.png";
        }
        else if (stickman25 == 4) {
          document.getElementById('st25').src = "Stickman4.png";
        }
        else if (stickman25 == 5) {
          document.getElementById('st25').src = "Stickman5.png";
        }
        else if (stickman25 == 6) {
          document.getElementById('st25').src = "Stickman6.png";
        }
        else if (stickman25 == 7) {
          document.getElementById('st25').src = "Stickman Fighter 2.png";
          stickman15=0
          document.getElementById('st15').src = "Blank.png";
        }
      }
    }
    else {
      document.getElementById("move").innerHTML = "Player 2 to play!";
      if (x == 1) {
        stickman11 += 1;
        if (stickman11 == 1) {
          document.getElementById('st11').src = "Stickman1.png";
        }
        else if (stickman11 == 2) {
          document.getElementById('st11').src = "Stickman2.png";
        }
        else if (stickman11 == 3) {
          document.getElementById('st11').src = "Stickman3.png";
        }
        else if (stickman11 == 4) {
          document.getElementById('st11').src = "Stickman4.png";
        }
        else if (stickman11 == 5) {
          document.getElementById('st11').src = "Stickman5.png";
        }
        else if (stickman11 == 6) {
          document.getElementById('st11').src = "Stickman6.png";
        }
        else if (stickman11 == 7) {
          document.getElementById('st11').src = "Stickman Fighter.png";
          stickman21=0
          document.getElementById('st21').src = "Blank.png";
        }
      }
      else if (x == 2) {
        stickman12 += 1;
        if (stickman12 == 1) {
          document.getElementById('st12').src = "Stickman1.png";
        }
        else if (stickman12 == 2) {
          document.getElementById('st12').src = "Stickman2.png";
        }
        else if (stickman12 == 3) {
          document.getElementById('st12').src = "Stickman3.png";
        }
        else if (stickman12 == 4) {
          document.getElementById('st12').src = "Stickman4.png";
        }
        else if (stickman12 == 5) {
          document.getElementById('st12').src = "Stickman5.png";
        }
        else if (stickman12 == 6) {
          document.getElementById('st12').src = "Stickman6.png";
        }
        else if (stickman12 == 7) {
          document.getElementById('st12').src = "Stickman Fighter.png";
          stickman22=0
          document.getElementById('st22').src = "Blank.png";
        }
      } 
      else if (x == 3) {
        stickman13 += 1;
        if (stickman13 == 1) {
          document.getElementById('st13').src = "Stickman1.png";
        }
        else if (stickman13 == 2) {
          document.getElementById('st13').src = "Stickman2.png";
        }
        else if (stickman13 == 3) {
          document.getElementById('st13').src = "Stickman3.png";
        }
        else if (stickman13 == 4) {
          document.getElementById('st13').src = "Stickman4.png";
        }
        else if (stickman13 == 5) {
          document.getElementById('st13').src = "Stickman5.png";
        }
        else if (stickman13 == 6) {
          document.getElementById('st13').src = "Stickman6.png";
        }
        else if (stickman13 == 7) {
          document.getElementById('st13').src = "Stickman Fighter.png";
          stickman23=0
          document.getElementById('st23').src = "Blank.png";
        }
      }
      else if (x == 4) {
        stickman14 += 1;
        if (stickman14 == 1) {
          document.getElementById('st14').src = "Stickman1.png";
        }
        else if (stickman14 == 2) {
          document.getElementById('st14').src = "Stickman2.png";
        }
        else if (stickman14 == 3) {
          document.getElementById('st14').src = "Stickman3.png";
        }
        else if (stickman14 == 4) {
          document.getElementById('st14').src = "Stickman4.png";
        }
        else if (stickman14 == 5) {
          document.getElementById('st14').src = "Stickman5.png";
        }
        else if (stickman14 == 6) {
          document.getElementById('st14').src = "Stickman6.png";
        }
        else if (stickman14 == 7) {
          document.getElementById('st14').src = "Stickman Fighter.png";
          stickman24=0
          document.getElementById('st24').src = "Blank.png";
        }
      }
      else if (x == 5) {
        stickman15 += 1;
        if (stickman15 == 1) {
          document.getElementById('st15').src = "Stickman1.png";
        }
        else if (stickman15 == 2) {
          document.getElementById('st15').src = "Stickman2.png";
        }
        else if (stickman15 == 3) {
          document.getElementById('st15').src = "Stickman3.png";
        }
        else if (stickman15 == 4) {
          document.getElementById('st15').src = "Stickman4.png";
        }
        else if (stickman15 == 5) {
          document.getElementById('st13').src = "Stickman5.png";
        }
        else if (stickman15 == 6) {
          document.getElementById('st15').src = "Stickman6.png";
        }
        else if (stickman15 == 7) {
          document.getElementById('st15').src = "Stickman Fighter.png";
          stickman25=0
          document.getElementById('st25').src = "Blank.png";
        }
      }
    }
  }
}
