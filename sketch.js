function setup() {
    createCanvas(800,400); // make an HTML canvas element width x height pixels
    var min = -1;
}

function drawTicks()
{
    //Outer Ticks
    let center = createVector(width/2,height);
    let midnight = createVector(-1,0);
    let innerRadius = 370;
    let outerRadius = 375;

    //draw a tick at each hour 
    for(let i = 0 ; i<25 ; i++)
    {
      let b = createVector(cos(PI*i/24),sin(PI*i/24));
      let direction = createVector(midnight.x*b.x-midnight.y*b.y,midnight.y*b.x+midnight.x*b.y);
      line(center.x+direction.x*innerRadius,
           center.y+direction.y*innerRadius,
           center.x+direction.x*outerRadius,
           center.y+direction.y*outerRadius);
    }

    //Inner Ticks
    let secondInnerRadius = 225;
    let secondOuterRadius = 230;

    //draw a tick at each minute/second
    for(let i = 0 ; i<61 ; i++)
    {
      let b = createVector(cos(PI*i/60),sin(PI*i/60));
      let direction = createVector(midnight.x*b.x-midnight.y*b.y,midnight.y*b.x+midnight.x*b.y);
      line(center.x+direction.x*secondInnerRadius,
           center.y+direction.y*secondInnerRadius,
           center.x+direction.x*secondOuterRadius,
           center.y+direction.y*secondOuterRadius);
    }
}

function draw() {
    let h = hour();
    let m = minute();
    let s = second();
    let total = 24 * 60 * 60 / 2;
    let current = Math.abs(total - (h*60*60+m*60+s));
  
    if(min != m){
      min = m;
      console.log(min);
    }
  
    //calculate background color
    let r = map(current, 0, total, 255, 0);
    let g = map(current, 0, total, 178, 0);
	background(r, g, 102);
    
    //Hour
    let hourAngle = map(h,0,24,180,360);
    push();
    noFill();
    stroke((255 - r)/4*3 + r, (g - 0)/4*3, 102);
    strokeWeight(32);
    arc(400,400,680,680,radians(180),radians(hourAngle));
    pop();
  
    //Minute
    let minuteAngle = map(m,0,60,180,360); 
    push();
    noFill();
    stroke((255 - r)/4*2 + r, (g - 0)/4*2, 102);
    strokeWeight(32);
    arc(400,400,600,600,radians(180),radians(minuteAngle));
    pop();
  
    //Second
    let secondAngle = map(s,0,60,180,360);
    push();
    noFill();
    stroke((255 - r)/4 + r, (g - 0)/4, 102);
    strokeWeight(32);
    arc(400,400,520,520,radians(180),radians(secondAngle));
    pop();
  
    //Outer Brackets
    noFill();
    strokeWeight(1);
    arc(400,400,740,740,radians(180),radians(360));
    noFill();
    strokeWeight(1);
    arc(400,400,460,460,radians(180),radians(360));
    strokeWeight(2);
    drawTicks();
  
    //Add border
    strokeWeight(5);
    noFill();
    rect(0,0,800,400);
}