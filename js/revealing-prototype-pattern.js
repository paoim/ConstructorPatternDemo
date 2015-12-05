//Revealing Prototype Pattern Structure

//var Calculator = function(eq){
	//variables defined here
//};

//Calculator.prototype = function(){
	//functions defined here
	
	//return{
		//public members defined here as with revealing module pattern
	//};
//}();

//Example
var Calculator = function(eq){
	this.eqCtl = document.getElementById(eq);
};

Calculator.prototype = function(){
	var add = function(x, y){
		var val = x + y;
		this.eqCtl.innerHTML = val;
	};
	
	return{
		add : add
	};
}();