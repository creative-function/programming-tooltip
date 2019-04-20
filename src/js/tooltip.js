import { timingSafeEqual } from "crypto";

 
console.log("connected");



//a callback function is placing a function as a paramater(argument) to be called later, not run instantly [ i.e using () ] 

// callback function example:

class Tooltip {

	//FUNCTIONS I NEED 
	//functionNamehere = () => {}  // this is how you write a fat arrow function 
	//createTooltip = (selector, text) => {} // parameters in () and formula in {}
	//showTooltip = () => {}  
	//hideTooltip
	//setupListeners

	constructor(selector, text, overrideOptions){

		const defaultOptions = {
			backgroundColor: 'yellow',
			//getBackgroundColor: null ... getBackgroundColor is a placeholder that can be passed a optional paramater later
			getBackgroundColor: function(){}, // i.e a function passed as a parameter, to be run when called, and not instantanouesly [unless told to run using ()]
			color: 'black',
			tooltipSpeed: 100,
		}

		//object.assign takes given paramerters and merges them into new paramaters, going in order. The last parameter will always be "required options" as they will be passed last 
		//defatultOptions{ color: red, font: 100, opactiy:0}
		//OverrideOptions { color: blue, font: 300, opacity:1}
		//.... additonal parameters (OPTIONAL)
		//*LAST* requiredOptions {font:200}
		// combinedOptions = Object.assign({}, defaultOptions, overrideOptions, requriedOptions) 
		// combinedOptions { color: blue, font: 200, opacity:1}  


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
}



//////////////////////THIS IS FOR THE OTHER PAGE WHERE THE ACUTAL TOOLTIPS ARE CALLED

//the 'DEFAULT OPTIONS' ARE ALREADY SET INSIDE THE TOOLTIP FUNCTION <<see above>>

function makeItPink(){
	return 'Pink'
}

const googleOverrideOptions = {
	fontSize: '20px',
	backgroundColor: 'yellow',
	tooltipSpeed:2000,
	getBackgroundColor: makeItPink //do not call makItPink() otherwise funciton will run instantly. Just use name, no ();
}

const twitterOverrideOptions = {
	fontSize: '50px',
	tooltipSpeed:100,
	backgroundColor: 'orange',
}

const googleTooltip = new Tooltip('.google-link', 
								'Click here Google',
								//default options are given in the function
								googleOverrideOptions); // new options stored in a variable 

const twitterTooltip = new Tooltip('.twitter-link', 
									'Click here Twitter',
									//default options are given in the function 
									twitterOverrideOptions);