
let phases = [200, 240, 280, 300, 320, 360];
let phase = 0;

function setup() {
createCanvas(600, 600)
background(0);
fill(255);
noStroke();
ellipse(width/2, height/2, 100, 100);
}

function draw() {
  fill(0);
  noStroke;
  ellipse(phase[index], height/2, 100, 100);
}

//function 
//index = index + 1;
//if (index == phase.length){
    function mouseReleased(){
      index++;
      index = index%6;
    }



  //fill("Yellow");
  //textSize(32);
  //textAlign(RIGHT);
  //text("(" + floor(mouseX) + ", " + floor(mouseY) + ")", mouseX, mouseY);

