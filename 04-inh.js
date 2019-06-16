/** call constructor of the parent class 
    to avoid constructor duplication
 */

//parent
function Animal(name, speed) {
	this.name = name;
	this.speed = speed || 0;
}
// child class
function Rabbit(name, speed) {
	/** avoid the next dublication */
	// this.name = name;
	// this.speed = 0;

	/** via calling the constructor of the parent */  
 
	Animal.apply(this, arguments); /** @info: `argumants` 
	is an array with all received parameters */
	/** arguments = [name, speed] */ 
}

Rabbit.prototype = Object.create(Animal.prototype); 

console.log( new Rabbit('Jake') ); // Animal { name: 'Jake', speed: 0 } 
Rabbit.prototype.constructor = Rabbit; /** @info: 
  it will change type Animal (parent) to type Rabbit (child class) for 
  instances of the child class
*/
console.log( new Rabbit('Jake') ); // Rabbit { name: 'Jake', speed: 0 } 

