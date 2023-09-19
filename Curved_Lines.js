let Lines = [];

let x1 = 60;
let y1 = 60;
let x2 = 190;
let y2 = 640;

function setup() {
  initialCanva();
  background(0);
  for (i = 0; i < 50; i++) {
    Lines[i] = new curvedLine(x1, y1, x2, y2, 5, 100);
  }
}


function draw() {
  background(0);
    for (i = 0; i < 50; i++) {
    Lines[i].moving();
    Lines[i].show();
  }
  fill(360,0,360);
  circle(x1,y1,50);
  circle(x2,y2,50);
}
