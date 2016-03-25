var dots = [];
var splashes = [];
var links = [];

var dot_index = 0;

function setup(){
 var cnv = createCanvas(windowWidth, windowHeight);

 // setInterval(background(255), 10000);
}

function update(){
  dots.forEach(function(e, i, a){
    e.update();
  });

  if(links.length > 200){
    links.splice(0, 2);
  }

  if(links.length > 1000){
    links.splice(0, 10);
  }
}

function draw(){
  drawBackground();
  update();

  links.forEach(function(e, i, a){
    e.display();
  });

  dots.forEach(function(e, i, a){
    e.display();
  });

  debug();
}

function debug(){
  noStroke();
  fill(0);
  text(dots.length, 10, 10);
  text(links.length, 10, 30);
}

function drawBackground(){
  background(10, 40);
}

function addDot(pos, col, size){
  var d = new Dot(pos, col, size, dot_index);
  dots.push(d);
  for(var i = 0; i < dots.length; i++){
    var c = false;
    dots[i].closeness.push(c);
  }
  dot_index++;
}

function mouseReleased(){
  addDot(createVector(random(width*0.1, width*0.9), random(height*0.1, height*0.9)), color(random(100, 255), random(100, 255), random(100, 255)), 2);
}
