/**
 * Constructor/Prototype Pattern
 */

function ConProController(jsonTable){
	this.jsonTable = jsonTable;
}

ConProController.prototype.drawTable = function(){
	var data = this.jsonTable;
	var container = document.getElementById("tableContainer");
	
	//Draw Table's Header
	displayContent(data.headers, container);
	
	//Content of table
	$.map(data.rows, function(row){
		displayContent(row, container);
	});
};

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