function createParameteredCounter(start, maximum, customString) {
	var i = +start || 0;

	return function() {
		customString && console.log(customString);
		return (i < maximum) ? ++i : i;
	}
}

var pCounter = createParameteredCounter(10, 15, "Here is a counter : "); 

console.log( pCounter() );
console.log( pCounter() );
console.log( pCounter() );
console.log( pCounter() );
console.log( pCounter() );
console.log( pCounter() );
console.log( pCounter() );
console.log( pCounter() );
console.log( pCounter() );
console.log( pCounter() );

