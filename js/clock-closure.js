//Create a clock that display hours, minutes, and seconds in the form H:M:S, and updates in real time. E.g., it should show 5:30:05, then 5:30:06, then 5:30:07, etc.
//<div id="output"></div>

//Class
var GenerateClock = function() {
	//private variable
	var date = new Date();

	//private method/function
	var displayClock = function() {
		return date.getHours() + ":" + date.getMinutes() + ":"
				+ date.getSeconds();
	};

	return {
		displayClock : displayClock
	};
};

function executeClock() {
	var container = document.getElementById('output');

	setInterval(function() {
		container.innerHTML = '';
		var clock = new GenerateClock();
		container.innerHTML = clock.displayClock();
	}, 100);
}