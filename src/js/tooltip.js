import { timingSafeEqual } from "crypto";

/*

	// link to the googlelink class in html


	//add event listener "mouseover"

	 //on mouserove, fly the tooltip up and display the text
		 // create a div
		 //add it ot the page
		 // make it slide up 

	 //on mouseout, remove tooltip 
	 	// remove the div 
*/
 
console.log("connected");


class Tooltip {
	constructor(className, hoverText,) {

		let $linkEl = document.querySelector(className);

		let $hoverDiv = document.createElement("div");

		let $popupText = document.createTextNode(hoverText);


		$linkEl.addEventListener("mouseover", function(){
			$hoverDiv.appendChild($popupText);

			document.body.appendChild($hoverDiv);

			let linkPosition = $linkEl.getBoundingClientRect();

			$hoverDiv.style.position = "absolute";
			$hoverDiv.style.height = "25" + "px";
			$hoverDiv.style.left = linkPosition.right + "100" + 'px';
			$hoverDiv.style.top= linkPosition.top + "100" + 'px';
			$hoverDiv.style.backgroundColor='yellow';
			

			console.log("showing tooltip");

		})

		$linkEl.addEventListener("mouseout", function(){
			document.body.removeChild($hoverDiv);

			console.log("deleted tooltip");

		})


	}
}


//a callback function is placing a function as a paramater(argument) to be called later, not run instantly [ i.e using () ] 

// callback function example:

constructor(selector, text, overrideOptions){

	const defaultOptions = {
		backgroundColor: 'yellow',
		//getBackgroundColor: null ... getBackgroundColor is a placeholder that can be passed a optional paramater later
		getBackgroundColor: function(){}, // i.e a function passed as a parameter, to be run when called, and not instantanouesly [unless told to run using ()]
		color: 'black',
		tooltipSpeed: 100,
	}




	console.log('options before', {defaultOptions, overrideOptions}) // tell me the default options and override options values
	const combinedOptions =  Object.assign({}, defaultOptions, overrideOptions); // make a new object with the following paramaters in this order: curly brakets, then put values of defaultoptions inside, then add/overrite to default with overridetOptions
	console.log('options after', {combinedOptions, defaultOptions, overrideOptions}) // tell me the value of the new object and the old ones too 
	this.options = combinedOptions // .options is a title holder [i.e this.puppy] whenever I refer to this.options [this = this instance aka this Tooltip i.e googleTooolTip], I am talking about the values from combinedOptions

	console.log('bg before', this.options.backgroundColor) // tell me the value of backgroundColor right now ['yellow']
	if(this.options.getBackgroundColor){ // if this variable name contains "something".. [function, string, whatever]
		console.log('getBackgroundcolor', {type: typeof this.options.getBackgroundColor,  // tell us the value of it  and what type of value it is
											getBG: this.options.getBackgroundColor}) // getBG is a title that can be set to anything // use getBG: tell me the color
		if (typeof this.options.getBackgroundColor == 'function'){  // if the value type is a function [not a string or intiger, etc]
			this.options.backgroundColor = this.options.getBackgroundColor() //  THIS IS WHERE THE CALLBACK FUNCTION IS CALLED!  run the callback function [getBackhroundColor()] and assign result as new value of parameter [backgroundColor] 
		}
	}



}


//////////////////////THIS IS FOR THE OTHER PAGE WHERE THE ACUTAL TOOLTIPS ARE CALLED


function makeItPink(){
	return 'Pink'
}

const googleTooltip = new Tooltip('.google-link', 
								'Click here Google',
								{ fontSize: '20px',
								tooltipSpeed:2000,
								getBackgroundColor: makeItPink //do not call makItPink() otherwise funciton will run instantly. Just use name, no ();

									}


);