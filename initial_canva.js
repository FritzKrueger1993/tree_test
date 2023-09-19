function initialCanva(){
  
  var cnv = createCanvas(300, 700,  P2D);
  var Cnvx = (windowWidth - width) *0.5;
  var Cnvy = 20;
  cnv.position(Cnvx, Cnvy);
  colorMode(HSB, 360);
}
