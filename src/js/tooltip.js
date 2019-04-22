
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


class Tooltip {
	constructor(className, hoverText, overrideOptions) {

		let $linkEl = document.querySelector(className);

		let $hoverDiv = document.createElement("div");

		let $popupText = document.createTextNode(hoverText);

		let linkPosition = $linkEl.getBoundingClientRect(); 
		
		
		let defaultOptions = {
			color:'black',
			backgroundColor:'yellow',
			// tooltipPosition: {
			// 	 topPosition= linkPosition.top + "100" + 'px';
			// 	bottomPosition = linkPosition.bottom + "100" + "px";
			// }
		}
		
		
		let showTooltip = () => {
			
			
			console.log("showing " + className + " tooltip");
			
			console.log('options before', {defaultOptions, overrideOptions}) // tell me the default options and override options values
			const combinedOptions =  Object.assign({}, defaultOptions, overrideOptions); // make a new object with the following paramaters in this order: curly brakets, then put values of defaultoptions inside, then add/overrite to default with overridetOptions
			console.log('options after', {combinedOptions, defaultOptions, overrideOptions}) // tell me the value of the new object and the old ones too 
			this.options = combinedOptions // .options is a title holder [i.e this.puppy] whenever I refer to this.options [this = this instance aka this Tooltip i.e googleTooolTip], I am talking about the values from combinedOptions
			
			
			//req
			$hoverDiv.appendChild($popupText);
			document.body.appendChild($hoverDiv);
			$hoverDiv.style.position = "absolute";
			$hoverDiv.style.height = "25" + "px";
			$hoverDiv.style.left =linkPosition.right + "100" + 'px';
			
			//optional
			
			
			$hoverDiv.style.top= linkPosition.top + "100" + 'px';
			$hoverDiv.style.backgroundColor= this.options.backgroundColor; //setting
	
		}

		let hideTooltip = () => {
			document.body.removeChild($hoverDiv);
			console.log("deleted tooltip");
		}

		$linkEl.addEventListener("mouseover", showTooltip);

		$linkEl.addEventListener("mouseout", hideTooltip);



	}
}


