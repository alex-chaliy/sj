/** Method override */ 

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



function Rabbit(name) {
	Animal.apply(this, [name]);
}

/** see comments at the 03-inh.js */
/** inheritance */ 
Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;



/** override the run() method */ 

Rabbit.prototype.run = function(speedGap = 1) {
	this.speed += speedGap * 2;
	console.log(`[${this.name} - Rabbit] Running. Current speed: ${this.speed}`);
}


const r = new Rabbit('Jake'); 

r.run();
r.run();
r.run();
r.run();
r.run();
r.stop();
r.run();
r.run();
r.run();

