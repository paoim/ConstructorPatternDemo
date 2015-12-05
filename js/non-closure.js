/** Draw Content of table **/
function doDrawTableContent(){
	//Static Data
	var jsonTable = {
		headers : [ "First Name", "Last Name", "Age" ],
		rows : [
		        [ "Pao", "Im", 30 ],
		        [ "John", "Doe", 30 ],
		        [ "Jane", "Doe", 27 ],
		        [ "Mac", "Smith", 52 ]
		     ]
	};
	
	//Get table's container
	var container = document.getElementById("tableContainer");
	
	//Draw Table's Header
	displayContent(jsonTable.headers, container);
	
	//Content of table
	$.map(jsonTable.rows, function(row){
		displayContent(row, container);
	});
}

function displayContent(values, container){
	var rowContainer = document.createElement("tr"); //create row
	container.appendChild(rowContainer); //add or append to table
	
	$.map(values, function(value){
		var colContainer = document.createElement("td"); //create column
		var textContainer = document.createTextNode(value); // add or append to row
		
		rowContainer.appendChild(colContainer);
		colContainer.appendChild(textContainer);
		colContainer.setAttribute("style", "padding-right: 10px;");
	});
};