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
		
		//if the user inputs gauge, convert to mm 
		if(thickSystem == 'gauge') {
			
			thickValue = convertToMM(thickValue);
			console.log('thickSystem is gauge, value is: ', thickValue);
			
			//error handling -- a gauge was entered that isn't in our system
			if(thickValue == 0) {
				
				$('#answer').text("You'e entered a gauge we can't account for. Please try again.");
			
			}
		}
		
		//if the user inputs a size in US ring sizes, get the diameter of that size. 
		if(inputSystem == 'us') {
			
			inputSize = convertToDia(inputSize);
			
			//error handling
			if(inputSize == 0) {
				
				$('#answer').text("You'e entered a size we can't account for. Please round up or down to the nearest half-size, or enter an inner diameter instead, and try again.");
			}
		}
		
		//once we have all units in mm, run the formula.
		calculateRingSize();
		
	})
	
	function convertToMM(val) {
		
		switch(Number(val)) {
			
			case 10: 	
				return 2.6;
				break;
				
			case 12: 
				return 2.1;
				break;
			
			case 14: 
				return 1.6;
				break;
				
			case 16:
				return 1.3;
				break;
				
			case 18:
				return 1;
				break;
			
			case 20:
				return .8;
				break;
				
			default: 
				return 0;
				break;	
		
		}
		
	}
	
	function convertToDia(val) {
		
		switch(Number(val)) {
			
			case 1:
				
				return 12.4;
				break;
				
			case 1.5:
				
				return 12.8;
				break;
				
			case 2:
			
				return 13.2;
				break;
			
			case 2.5:
			
				return 13.6;
				break;
				
			case 3:
				return 14;
				break;
				
			case 3.5:
				return 14.4;
				break;
				
			case 4:
				return 14.8;
				break;
				
			case 4.5:
				return 15.2;
				break;
				
			case 5:
				return 15.6;
				break;
				
			case 5.5:
				return 16;
				break;
				
			case 6:
				return 16.4;
				break;
				
			case 6.5:
				return 16.8;
				break;
				
			case 7:
				return 17.2;
				break;
				
			case 7.5:
				return 17.6;
				break;
				
			case 8:
				return 18;
				break;
				
			case 8.5:
				return 18.4;
				break;
				
			case 9:
				return 18.8;
				break;
				
			case 9.5:
				return 19.2;
				break;
				
			case 10:
				return 19.6;
				break;
				
			case 10.5:
				return 20;
				break;
				
			case 11:
				return 20.4;
				break;
				
			case 11.5:
				return 20.8;
				break;
				
			case 12:
				return 21.2;
				break;
				
			case 12.5:
				return 21.6;
				break;
				
			case 13:
				return 22.0;
				break;
				
			case 13.5:
				return 22.7;
				break;
				
			case 14: 
				return 23.1;
				break;
				
			default:
				return 0;
				break;
				
		}
	}
	
	function calculateRingSize() {
		
		//(diameter [of finished ring] + thickness of the stock) x Pi
		
		inputSize = Number(inputSize);
		thickValue = Number(thickValue);
		
		//var temp = inputSize + thickValue;
		//console.log('formula is: ', inputSize, '+', thickValue, "* PI");
		
		var size = ((inputSize + thickValue) * 3.14).toFixed(1);
		
		$('#size-return').removeClass('hidden');
		$('#answer').text(size + " mm in length. If your band is wider than 4mm, add .5mm to the length.");
	}
})
