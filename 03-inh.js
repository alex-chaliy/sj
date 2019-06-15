/** Parent Class */
function Animal(name) {
	this.name = name;
	this.speed = 0;
}

Animal.prototype.run = function(speedGap = 1) {
	this.speed += speedGap;
	console.log(`[${this.name}] Running. The current speed is: ${this.speed}`);
}

Animal.prototype.stop = function() {
	this.speed = 0;
	console.log(`[${this.name}] Stopped. The current speed is: ${this.speed}`);
}

/** Child Class */
function Rabbit(name) {
	this.name = name;
	this.speed = 0;
	this.top = 0;
}


/** Child Class inherits all from the Parent Class */ 
Rabbit.prototype = Object.create(Animal.prototype);

/** ! add methods to the child class only after inheritance */
Rabbit.prototype.jump = function(topGap = 1) {
	this.top += topGap;
	console.log(`[${this.name}] Jumping. The current top is: ${this.top}`);
}


/** create a new instance of the Rabbit - child class */

const r = new Rabbit('Max Garson');


r.run();
r.run();
r.run(3);
r.stop();
r.run();
r.run();

r.jump(4);
r.jump(2);
r.jump(0);
