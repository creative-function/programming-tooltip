"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*

	// link to the googlelink class in html


	//add event listener "mouseover"

	 //on mouserove, fly the tooltip up and display the text
		 // create a div
		 //add it ot the page
		 // make it slide up 

	 //on mouseout, remove tooltip 
		 // remove the div
		 
		 //FUNCTIONS I NEED 
	//functionNamehere = () => {}  // this is how you write a fat arrow function 
	//createTooltip = (selector, text) => {} // parameters in () and formula in {}
	//showTooltip = () => {}  
	//hideTooltip
	//setupListeners
*/
console.log("HW3 Take 2");

var Tooltip = function Tooltip(className, hoverText, overrideOptions, requiredOptions) {
  var _this = this;

  _classCallCheck(this, Tooltip);

  var $linkEl = document.querySelector(className);
  var $hoverDiv = document.createElement("div");
  var $popupText = document.createTextNode(hoverText);
  var defaultOptions = {
    color: 'black',
    backgroundColor: 'yellow',
    override: overrideOptions,
    tooltipPosition: 'none'
  };

  var showTooltip = function showTooltip() {
    var linkPosition = $linkEl.getBoundingClientRect();
    $hoverDiv.appendChild($popupText);
    document.body.appendChild($hoverDiv);
    $hoverDiv.style.position = "absolute";
    $hoverDiv.style.height = "25" + "px";
    $hoverDiv.style.left = linkPosition.right + "100" + 'px';
    $hoverDiv.style.top = linkPosition.top + "100" + 'px';
    $hoverDiv.style.backgroundColor = defaultOptions.backgroundColor;
    console.log("showing " + className + " tooltip");
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

    _this.options = combinedOptions; // .options is a title holder [i.e this.puppy] whenever I refer to this.options [this = this instance aka this Tooltip i.e googleTooolTip], I am talking about the values from combinedOptions

    console.log('bg before', _this.options.backgroundColor); // tell me the value of backgroundColor right now ['yellow']

    if (_this.options.override) {
      // if this variable name contains "something".. [function, string, whatever]
      console.log('override', {
        type: _typeof(_this.options.override),
        // tell us the value of it  and what type of value it is
        getBG: _this.options.backgroundColor
      }); // getBG is a title that can be set to anything // use getBG: tell me the color

      if (typeof _this.options.override == 'function') {
        // if the value type is a function [not a string or intiger, etc]
        _this.options.backgroundColor = _this.options.overrideOptions(); //  THIS IS WHERE THE CALLBACK FUNCTION IS CALLED!  run the callback function [getBackhroundColor()] and assign result as new value of parameter [backgroundColor] 
      }
    }
  };

  var hideTooltip = function hideTooltip() {
    document.body.removeChild($hoverDiv);
    console.log("deleted tooltip");
  };

  $linkEl.addEventListener("mouseover", showTooltip()); // $linkEl.addEventListener("mouseout", hideTooltip());
  //object.assign takes given paramerters and merges them into new paramaters, going in order. The last parameter will always be "required options" as they will be passed last 
  //defatultOptions{ color: red, font: 100, opactiy:0}
  //OverrideOptions { color: blue, font: 300, opacity:1}
  //.... additonal parameters (OPTIONAL)
  //*LAST* requiredOptions {font:200}
  // combinedOptions = Object.assign({}, defaultOptions, overrideOptions, requriedOptions) 
  // combinedOptions { color: blue, font: 200, opacity:1}  
};
//# sourceMappingURL=tooltip.js.map
