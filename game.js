// add more food
// create food object?
// 
// 
// 


var s;
var scl;
var widthC, heightC;
var food;
var hs=0; //highscore

function setup(){
	scl = .02*(windowWidth-10);
	widthC=windowWidth-10;
	heightC=floor((windowHeight-10)/scl)*scl;	
	createCanvas(widthC, heightC);  
	s = new Snake(scl);
	frameRate(10);
	pickLocation();
}

function pickLocation(){
	var cols = floor(width/scl);
	var rows = floor(height/scl);
	food = createVector(floor(random(cols)), floor(random(rows)));
	food.mult(scl);

}

function mousePressed(){
	s.total++;
	s.speed+=s.speed;
}


function draw() {
	background(51);
	hs=max(hs, s.total);
	textSize(32);
	fill(255);
	text("Score: "+str(s.total), scl/3, scl);
	text("Highscore: "+str(hs), scl/3, scl*2);

	if (s.eat(food)) {
		pickLocation();
	}
	s.death();
	s.update();
	s.show();
	frameRate(10*s.speed);
	fill(255, 0, 100);
	rect(food.x, food.y, scl, scl);
}

//bug! changing dir too fast

function keyPressed() {
	if (keyCode === UP_ARROW && s.dir.y!=scl) {
		s.dir.set(0, -scl);
	} else if (keyCode === DOWN_ARROW && s.dir.y!=-scl) {
		s.dir.set(0, scl);
	} else if (keyCode === RIGHT_ARROW && s.dir.x!=-scl) {
		s.dir.set(scl, 0);
	} else if (keyCode === LEFT_ARROW && s.dir.x!=scl) {
		s.dir.set(-scl, 0);		
	}
}

// function windowResized() {
// 	resizeCanvas(windowWidth-10, windowHeight-10);
// }