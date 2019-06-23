var newX, newY;
var flower1;
var flower2;
var sliderD;
var sliderN;
//Added a flower function, moved the declaration of d and n into the constructor of it.
	var flower = function(){
		this.x = 40;
		this.y = 100;
		this.d = 8;
		this.n = 5;
	};
//This changed the x and y to whatever the input is.
	flower.prototype.move = function(newX,newY){
		this.x = newX;
		this.y = newY;
	};
	//Setting the d and n, because they are sent to draw, and so each flower needs to send it from draw.
	flower.prototype.dn = function(d, n){
		this.d = d;
		this.n = n;
};
//I moved Shiffman's code for creating the flower in here.
flower.prototype.create = function(){

	var k = this.n / this.d;
		push();
		translate(width / 2, height / 2);

		beginShape();
		stroke(25);
		noFill();
		strokeWeight(6);
		for (var a = 0; a < TWO_PI * reduceDenominator(this.n, this.d); a += 0.02) {
			var r = 200 * cos(k * a);
			var x = r * cos(a) + this.x; //I added the plus x and y, so you will be able to move the position of the flowers.
			var y = r * sin(a) + this.y;
			vertex(x, y);
		}
		endShape(CLOSE);
		pop();
		noLoop();
	};

function setup() {
  createCanvas(400, 400);
  sliderD = createSlider(1, 60, 10, 1);  sliderN = createSlider(1, 20, 10, 1);
  sliderD.input(draw);
  sliderN.input(draw);
  flower1 = new flower(); // Created an instance of the class flower.
  flower2 = new flower();
}

function draw() {
	background(100);
 	var d = sliderD.value(); // Made a local variable of the what the value of the slider is.
  	var n = sliderN.value();
	flower1.dn(d,n); // Sending the slider variables to the flower class.
	flower2.dn(d,n);
	flower1.move(-200,40); //Moving the flower.
	flower2.move(newX,newY); //Moving the flower defined by the x and y coordinates of the mouse pressed.
	flower1.create(); //Creating the flowers.
	flower2.create();
}
function mousePressed(){
	newX = mouseX-500; //Tried to make the flower move to the center of the mouse. I realized that I  need to impliment the
	newY = mouseY-200; //formula that was used to create the flower to find the center of it.
	draw(); //Ran draw, so it updates each time you click on the mouse.
}
function reduceDenominator(numerator, denominator) {
    function rec(a, b) {
        return b ? rec(b, a % b) : a;
    }
    return denominator / rec(numerator, denominator);
}
