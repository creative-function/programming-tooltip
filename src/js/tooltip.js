
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
 
console.log("HW3 Take 2");


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
			$hoverDiv.style.left =linkPosition.right + "100" + 'px';
			$hoverDiv.style.top=linkPosition.top + "100" + 'px';
			$hoverDiv.style.backgroundColor='orange';
			

			console.log("showing tooltip");

		})

		$linkEl.addEventListener("mouseout", function(){
			document.body.removeChild($hoverDiv);

			console.log("deleted tooltip");

		})


	}
}


