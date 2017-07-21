// The search will start at the specified position, or at the end if no start 
// position is specified, and end the search at the beginning of the array.
// Returns -1 if the item is not found.

(function() {	// 0     1        2        3
	var food = ['beans', 'pizza', 'tacos', 'beans'];
	var a = food.lastIndexOf('beans');

	console.log(a); // 3 last occurrency
})();