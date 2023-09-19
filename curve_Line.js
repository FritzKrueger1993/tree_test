class curvedLine{
 constructor(x1,y1,x2,y2,spread,spreadMax){
  this.spread = spread;
  this.spreadMax = spreadMax;
  this.x1 = x1; 
  this.y1 = y1;  
  this.x2 = x2; 
  this.y2 = y2;  
  this.xM_old = (this.x1 + this.x2) * 0.5;
  this.yM_old = (this.y1 + this.y2) * 0.5;
  this.xM = (this.x1 + this.x2) * 0.5;
  this.yM = (this.y1 + this.y2) * 0.5;
 }
  
  moving() { 
    this.xM += random(-this.spread,this.spread); 
    this.yM += random(-this.spread,this.spread); 
    //if(this.xM - this.xM_old >= this.spreadMax && this.xM_old - this.xM <= this.spreadMax){
    if(this.xM <= this.xM_old - this.spreadMax || this.xM >= this.xM_old + this.spreadMax){  
      this.xM = this.xM_old;
    }
    if(this.yM <= this.yM_old - this.spreadMax || this.yM >= this.yM_old + this.spreadMax){  
      this.yM = this.yM_old;
    }
  }
    
  show() {
    stroke(360,0,360);
    strokeWeight(0.5);
    noFill();
    beginShape();
    curveVertex(this.x1, this.y1);
    curveVertex(this.x1, this.y1);
    curveVertex(this.xM, this.yM);
    curveVertex(this.x2, this.y2);
    curveVertex(this.x2, this.y2);
    endShape();
}
}
