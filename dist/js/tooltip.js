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
*/
console.log("connected");

var Tooltip = function Tooltip(className, hoverText) {
  _classCallCheck(this, Tooltip);

  var $linkEl = document.querySelector(className);
  var $hoverDiv = document.createElement("div");
  var $popupText = document.createTextNode(hoverText);
  $linkEl.addEventListener("mouseover", function () {
    $hoverDiv.appendChild($popupText);
    document.body.appendChild($hoverDiv);
    var linkPosition = $linkEl.getBoundingClientRect();
    $hoverDiv.style.position = "absolute";
    $hoverDiv.style.height = "25" + "px";
    $hoverDiv.style.right = linkPosition.right + "100" + 'px';
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
