function displayClock(){
	var container = document.getElementById('output');
	
	setInterval(function(){
		container.innerHTML = clockNonClosure();
	}, 100);
}

function clockNonClosure(){
	var date = new Date();
	
	return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}