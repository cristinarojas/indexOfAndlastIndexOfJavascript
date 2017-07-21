(function() {	

	var tacos = {
		food: 'tacos'
	} 

	var foodArray = [{food: 'hambuerger'}, {food: 'tacos'}, {food: 'pastel'}, {food: 'tacos'}];
	var a = foodArray.indexOf(tacos); 
	// indexOf search by value for strings and numbers.
	console.log(a); // -1

	// But for object its search by reference
	/* tacos = {
		food: 'tacos'
	} looks similar to the array item {food: 'tacos'}
	but are different objects */

	var foodArray2 = [{food: 'hambuerger'}, tacos, {food: 'pastel'}, tacos];
	var b = foodArray2.indexOf(tacos); 
	console.log(b); // 1

	var c = foodArray2.lastIndexOf(tacos); // method returns the position of the last occurrence of a specified value
	console.log(c); // 3




})();