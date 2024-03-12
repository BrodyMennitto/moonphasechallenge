let phases = [200, 220, 240, 260, 280, 300, 320, 340, 360];
let index = 0;

function setup() {
createCanvas(600, 600);
background(0);
// fill(255);
// noStroke();
// ellipse(width/2, height/2, 100, 100);
 }

function draw() {
fill(255);
noStroke();
ellipse(width/2, height/2, 100, 100);

fill(0);
noStroke(); 
//for (i = 0; i < phases.length; i++){
  ellipse(phases[index], height/2, 100, 100);
  console.log(index);
//}

fill(255); 
strokeWeight(.5);
textAlign(CENTER);
textSize(32);
text('click for phase', width/2, 100);
}

function mouseClicked(){
  index++;
  if(index > phases.length){
    index = 0;
  }
}
//index = index + 1;
//if (index == phase.length)

//function mouseClicked()
   
  
  





  