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

var Tooltip = function Tooltip(className, hoverText, overrideOptions, requiredOptions) {
  _classCallCheck(this, Tooltip);

  var $linkEl = document.querySelector(className);
  var $hoverDiv = document.createElement("div");
  var $popupText = document.createTextNode(hoverText);
  var defaultOptions = {
    color: 'black',
    backgroundColor: 'yellow',
    tooltipPosition: null
  };
  $linkEl.addEventListener("mouseover", function () {
    $hoverDiv.appendChild($popupText);
    document.body.appendChild($hoverDiv);
    var linkPosition = $linkEl.getBoundingClientRect();
    $hoverDiv.style.position = "absolute";
    $hoverDiv.style.height = "25" + "px";
    $hoverDiv.style.left = linkPosition.right + "100" + 'px';
    $hoverDiv.style.top = linkPosition.top + "100" + 'px';
    $hoverDiv.style.backgroundColor = 'orange';
    console.log("showing tooltip");
  });
  $linkEl.addEventListener("mouseout", function () {
    document.body.removeChild($hoverDiv);
    console.log("deleted tooltip");
  });
};
//# sourceMappingURL=tooltip.js.map
