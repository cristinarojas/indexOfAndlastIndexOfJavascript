// Method searches the array for the specified item, and returns its position
// Returns -1 if the item is not found.
// array.indexOf(item) 

(function() {	// 0          1        2        3
	var food = ['hamburguer', 'pizza', 'tacos', 'beans'];
	var a = food.indexOf('Pozole'); // Search pizza item

	console.log(a); // -1
})();