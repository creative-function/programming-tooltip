"use strict";

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

var Tooltip = // options out here
function Tooltip(className, hoverText, overrideOptions) {
  var _this = this;

  _classCallCheck(this, Tooltip);

  var $linkEl = document.querySelector(className);
  var $hoverDiv = document.createElement("div");
  var $popupText = document.createTextNode(hoverText);
  var linkPosition = $linkEl.getBoundingClientRect();
  console.log('here, this is ', this);
  var defaultOptions = {
    color: 'black',
    backgroundColor: 'yellow',
    direction: 'right' // tooltipPosition: {
    // 	 topPosition= linkPosition.top + "100" + 'px';
    // 	bottomPosition = linkPosition.bottom + "100" + "px";
    // }
    // console.log('options before', {defaultOptions, overrideOptions}) // tell me the default options and override options values

  };
  var combinedOptions = Object.assign({}, defaultOptions, overrideOptions); // make a new object with the following paramaters in this order: curly brakets, then put values of defaultoptions inside, then add/overrite to default with overridetOptions

  console.log('options after', {
    combinedOptions: combinedOptions,
    defaultOptions: defaultOptions,
    overrideOptions: overrideOptions
  }); // tell me the value of the new object and the old ones too 
  // this.options = combinedOptions // .options is a title holder [i.e this.puppy] whenever I refer to this.options [this = this instance aka this Tooltip i.e googleTooolTip], I am talking about the values from combinedOptions
  // in an arrow function, *this* is the class or context where the function lives
  // in a typical function, *this* is the class or context it was called from 

  var showTooltip = function showTooltip() {
    console.log('here, this is ', _this);
    console.log("showing " + className + " tooltip"); //req

    $hoverDiv.appendChild($popupText);
    document.body.appendChild($hoverDiv);
    $hoverDiv.style.position = "absolute"; // $hoverDiv.style.height = "25" + "px";

    $hoverDiv.style.borderRadius = '10px';
    $hoverDiv.style.padding = '10px';
    $hoverDiv.style.boxShadow = '0 5px 10px rgba(0,0,0,0.5)';
    console.log('direction:', combinedOptions.direction);

    if (combinedOptions.direction === 'right') {
      $hoverDiv.style.top = linkPosition.top + 'px';
      $hoverDiv.style.left = linkPosition.right + 'px';
    } else if (combinedOptions.direction === 'left') {
      // window.innerWidth
      $hoverDiv.style.left = linkPosition.right + "100" + 'px';
    } //optional


    $hoverDiv.style.backgroundColor = combinedOptions.backgroundColor; //setting
  };

  var hideTooltip = function hideTooltip() {
    document.body.removeChild($hoverDiv);
    console.log("deleted tooltip");
  };

  $linkEl.addEventListener("mouseover", showTooltip);
  $linkEl.addEventListener("mouseout", hideTooltip);
};
//# sourceMappingURL=tooltip.js.map
