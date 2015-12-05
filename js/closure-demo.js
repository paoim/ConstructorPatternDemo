function myNonClosure(){
	var date = new Date();
	return date.getMilliseconds();
}

//Class
function myClosure(){
	var date = new Date();
	return function(){
		return date.getMilliseconds();
	};
}

//Class
var myClosure2 = function(){
	var date = new Date();
	var myNestedFunc = function(){
		return date.getMilliseconds();
	};
	
	return {
		foo : myNestedFunc
	};
};