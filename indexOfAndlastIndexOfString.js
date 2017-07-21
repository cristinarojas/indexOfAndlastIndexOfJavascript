(function() {
	// indexOf in string return the position
	var str = 'Hello planet planet, you are a great planet.';
	var n = str.indexOf('planet'); // First ocurrency
	var x = str.lastIndexOf('planet'); // Last ocurrency

	console.log(n); // 6
	console.log(x); // 37

})();