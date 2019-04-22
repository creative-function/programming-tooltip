// import { timingSafeEqual } from "crypto";

 
console.log("class notes");



/* /a callback function is placing a function as a paramater(argument) to be called later, not run instantly [ i.e using () ] 

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.log("connected"); //a callback function is placing a function as a paramater(argument) to be called later, not run instantly [ i.e using () ] 
// callback function example:

var Tooltip = //FUNCTIONS I NEED 
//functionNamehere = () => {}  // this is how you write a fat arrow function 
//createTooltip = (selector, text) => {} // parameters in () and formula in {}
//showTooltip = () => {}  
//hideTooltip
//setupListeners
function Tooltip(selector, text, overrideOptions) {
  _classCallCheck(this, Tooltip);

  var defaultOptions = {
    backgroundColor: 'yellow',
    //getBackgroundColor: null ... getBackgroundColor is a placeholder that can be passed a optional paramater later
    getBackgroundColor: function getBackgroundColor() {},
    // i.e a function passed as a parameter, to be run when called, and not instantanouesly [unless told to run using ()]
    color: 'black',
    tooltipSpeed: 100 //object.assign takes given paramerters and merges them into new paramaters, going in order. The last parameter will always be "required options" as they will be passed last 
    //defatultOptions{ color: red, font: 100, opactiy:0}
    //OverrideOptions { color: blue, font: 300, opacity:1}
    //.... additonal parameters (OPTIONAL)
    //*LAST* requiredOptions {font:200}
    // combinedOptions = Object.assign({}, defaultOptions, overrideOptions, requiredOptions={ 

	let $selector = document.querySelector()
    // combinedOptions { color: blue, font: 200, opacity:1}  

  };
  console.log('options before', {
    defaultOptions: defaultOptions,
    overrideOptions: overrideOptions
  }); // tell me the default options and override options values

  var combinedOptions = Object.assign({}, defaultOptions, overrideOptions); // make a new object with the following paramaters in this order: curly brakets, then put values of defaultoptions inside, then add/overrite to default with overridetOptions

  console.log('options after', {
    combinedOptions: combinedOptions,
    defaultOptions: defaultOptions,
    overrideOptions: overrideOptions
  }); // tell me the value of the new object and the old ones too 

  this.options = combinedOptions; // .options is a title holder [i.e this.puppy] whenever I refer to this.options [this = this instance aka this Tooltip i.e googleTooolTip], I am talking about the values from combinedOptions

  console.log('bg before', this.options.backgroundColor); // tell me the value of backgroundColor right now ['yellow']

  if (this.options.getBackgroundColor) {
    // if this variable name contains "something".. [function, string, whatever]
    console.log('getBackgroundcolor', {
      type: _typeof(this.options.getBackgroundColor),
      // tell us the value of it  and what type of value it is
      getBG: this.options.getBackgroundColor
    }); // getBG is a title that can be set to anything // use getBG: tell me the color

    if (typeof this.options.getBackgroundColor == 'function') {
      // if the value type is a function [not a string or intiger, etc]
      this.options.backgroundColor = this.options.getBackgroundColor(); //  THIS IS WHERE THE CALLBACK FUNCTION IS CALLED!  run the callback function [getBackhroundColor()] and assign result as new value of parameter [backgroundColor] 
    }
  }
}; //////////////////////THIS IS FOR THE OTHER PAGE WHERE THE ACUTAL TOOLTIPS ARE CALLED
//the 'DEFAULT OPTIONS' ARE ALREADY SET INSIDE THE TOOLTIP FUNCTION <<see above>>


function makeItPink() {
  return 'Pink';
}

var googleOverrideOptions = {
  fontSize: '20px',
  backgroundColor: 'yellow',
  tooltipSpeed: 2000,
  getBackgroundColor: makeItPink //do not call makItPink() otherwise funciton will run instantly. Just use name, no ();

};
var twitterOverrideOptions = {
  fontSize: '50px',
  tooltipSpeed: 100,
  backgroundColor: 'orange'
};
var googleTooltip = new Tooltip('.google-link', 'Click here Google', //default options are given in the function
googleOverrideOptions); // new options stored in a variable 

var twitterTooltip = new Tooltip('.twitter-link', 'Click here Twitter', //default options are given in the function 
twitterOverrideOptions);

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
		// combinedOptions = Object.assign({}, defaultOptions, overrideOptions, requiredOptions={
	 

		let $selector = document.querySelector()
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

		var $linkEl = document.querySelector(className);
  		var $hoverDiv = document.createElement("div");
		var $popupText = document.createTextNode(hoverText);

		$linkEl.addEventListener("mouseover", function () {
		$hoverDiv.appendChild($popupText);
		document.body.appendChild($hoverDiv);
		var linkPosition = $linkEl.getBoundingClientRect();
		$hoverDiv.style.position = "absolute";
		$hoverDiv.style.height = "25" + "px";
		$hoverDiv.style.left = linkPosition.right + "100" + 'px';
		$hoverDiv.style.top = linkPosition.top + "100" + 'px';
		$hoverDiv.style.backgroundColor = 'yellow';
		console.log("showing tooltip");
		});

		$linkEl.addEventListener("mouseout", function () {
			document.body.removeChild($hoverDiv);
			console.log("deleted tooltip");
		});

	}
}
*/

class Tooltip {

	constructor(className, text, overrideOptions, requiredOptions){
		
		const defaultOptions={
			backgroundColor: 'yellow',
			color:'black',
			position: null
		}

		const requiredOptions={}

		let $className = document.querySelector(className);
		
		//showTooltip = () => {}  
		createTooltip = () => {
			
			let $hoverDiv = document.createElement("div");
			let $hoverText = document.createTextNode(text);
			$hoverDiv.appendChild($hoverText);
			document.body.appendChild($hoverDiv);
			
			showTooltip = () => {

				var linkPosition = $className.getBoundingClientRect();
				$hoverDiv.style.position = "absolute";
				$hoverDiv.style.height = "25" + "px";
				$hoverDiv.style.left = linkPosition.right + "100" + 'px';
				$hoverDiv.style.top = linkPosition.top + "100" + 'px';
				$hoverDiv.style.backgroundColor = 'yellow';
				console.log("showing tooltip");
	
			}

			showTooltip();

		}

		hideTooltip = () => {
			document.body.removeChild($hoverDiv);
			console.log("deleted tooltip");

		}

		$className.addEventListener("mouseover", createTooltip);
	
		$className.addEventListener("mouseout", hideTooltip);
	}
}


