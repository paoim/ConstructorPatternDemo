//Revealing Module Pattern Structure

//var calculator = function(){
	//private variables
	//private functions
	
	//return{
		//public functions
	//};
//}();

//Example
var calculator = function(eq){
	var eqCtl = document.getElementById(eq),
	doAdd = function(x, y){
		var val = x + y;
		eqCtl.innerHTML = val;
	};
	
	return{
		//Expose public member
		add : doAdd
	};
}('output');