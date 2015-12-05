//Prototype Pattern Structure

//Create Namespance
var myNS = myNS || {};//if has another myNS, it will use that myNS; otherwise, it will use {}

//Create Class by using Prototype Pattern
myNS.Calculator = function(eq){
	this.eqCtl = document.getElementById(eq);
};

myNS.Calculator.prototype = {
		add : function(x, y){
			return x + y;
		},
		
		subtract : function(x, y){
			return x - y;
		},
		
		mutiply : function(x, y){
			return x * y;
		},
		
		devide : function(x, y){
			if(y == 0)
				alert("Cannot devide by 0");
			return x / y;
		},
		
		setVal : function(val){
			this.eqCtl.innerHTML = val;
		}
};