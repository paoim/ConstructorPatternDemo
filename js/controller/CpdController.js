function CpdController() {}

CpdController.prototype.init = function() {
	var jsonTable = {
		headers : [ "First Name", "Last Name", "Age" ],
		rows : [
		        [ "Pao", "Im", 30 ],
		        [ "John", "Doe", 30 ],
		        [ "Jane", "Doe", 27 ],
		        [ "Mac", "Smith", 52 ]
		       ]
	};
	
	var cpc = new ConProController(jsonTable);
	cpc.drawTable();
};