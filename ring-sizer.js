$(document).ready(function() {
	
	var thickValue;			//the thickness of material input by the user
	var thickSystem;		//the system of the thick measurement
	var inputSize; 			//the ring size input by the user
	var inputSystem;		//whether the ring size is in US ring sizes or mm
	var shankSize;			//the number returned for the user
	
	
	$('#calculate').click(function(e) {
		
		e.preventDefault();
		
		
		thickValue = $('#thick').val();
		thickSystem = $('#thickSystem').val();
		inputSize = $('#size').val();
		inputSystem = $('#sizeSystem').val();
		
		
		console.log("calculate clicked: ", thickValue, thickSystem, inputSize, inputSystem);
	})
	
	
})
