function setup() {
	createCanvas(800,400); // make an HTML canvas element width x height pixels
}

function draw() {
	background(225);
    
    //Hour
    let h = hour();
    let hourAngle = map(h,0,23,180,360);
    push();
    noFill();
    stroke(255,0,0);
    strokeWeight(32);
    arc(400,400,680,680,radians(180),radians(hourAngle));
    pop();
  
    //Minute
    let m = minute();
    let minuteAngle = map(m,0,59,180,360); 
    push();
    noFill();
    stroke(255,0,255);
    strokeWeight(32);
    arc(400,400,600,600,radians(180),radians(minuteAngle));
    pop();
  
    //Second
    let s = second();
    let secondAngle = map(s,0,59,180,360);
    push();
    noFill();
    stroke(0,0,255);
    strokeWeight(32);
    arc(400,400,520,520,radians(180),radians(secondAngle));
    pop();
}
