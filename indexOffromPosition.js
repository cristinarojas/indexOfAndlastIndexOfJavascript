// Method searches the array for the specified item, and returns its position
// Returns -1 if the item is not found.
// array.indexOf(item, start) 

(function() {	   // 0     1         2        3
	var fruits = ['Mango', 'Banana', 'Apple', 'Orange'];
	var a = fruits.indexOf("Orange", 2); // Search orange item from position 2 to up

	console.log(a); // 3
})();