//Module Pattern Structure

//var Calculator = function(){
	//private variables
	//private functions
	
	//return{
		//public functions
	//};
//};

//Example
//Create Class by using Module Pattern
var Calculator = function(eq){
	//private member
	var eqCtl = document.getElementById(eq);
	
	//private function
	var add = function(x, y){
		return x + y;
	},
	subtract = function(x, y){
		return x - y;
	},
	multiply = function(x, y){
		return x * y;
	},
	devide = function(x, y){
		if(y == 0)
			alert("Cannot devide by 0");
		return x/y;
	},
	setVal = function(val){
		eqCtl.innerHTML = val;
	};
	
	return{
		add : add,
		subtract : subtract,
		multiply : multiply,
		devide : devide,
		setVal : setVal
	};
};