function createCounter() {
	var i = 0;

	return function() {
		return ++i; 
	}
}

var getCounterState = createCounter();

console.log( getCounterState() );
console.log( getCounterState() );
console.log( getCounterState() );
console.log( getCounterState() );

