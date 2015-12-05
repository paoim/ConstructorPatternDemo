
/** Create Closure to display table's content **/
var GenerateTableContent = function(){
	//Private Variables
	var jsonTable = {
		headers : [ "First Name", "Last Name", "Age" ],
		rows : [
		        [ "Pao", "Im", 30 ],
		        [ "John", "Doe", 30 ],
		        [ "Jane", "Doe", 27 ],
		        [ "Mac", "Smith", 52 ]
		     ]
	}, container = document.getElementById("tableContainer");
	
	//Nested Function (private function)
	var displayContent = function(){
		
		//Draw Table's Header
		createTableBody(jsonTable.headers, container);
		
		//Content of table
		$.map(jsonTable.rows, function(row){
			createTableBody(row, container);
		});
	},
	createTableBody = function(values, container){
		var rowContainer = document.createElement("tr"); //create row
		container.appendChild(rowContainer); //add or append to table
		
		$.map(values, function(value){
			var colContainer = document.createElement("td"); //create column
			var textContainer = document.createTextNode(value); //create display text
			
			rowContainer.appendChild(colContainer);
			colContainer.appendChild(textContainer);
			colContainer.setAttribute("style", "padding-right: 10px;");
		});
	};
	
	return {
		//public function
		displayContent : displayContent
	};
};