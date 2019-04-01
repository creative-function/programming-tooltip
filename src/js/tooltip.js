class Tooltip {

	constructor(selector, text, options) {

		options = Object.assign({
			background: '#42dcf4'
		}, options)
		
		this.$triggerElement = document.querySelector(selector);
		if (!this.$triggerElement) {
			console.error('Could not find trigger element for tooltip: ', options.selector);
			return false;
		}

		this.$triggerElement.addEventListener('mouseover', this.showTooltip.bind(this))
		this.$triggerElement.addEventListener('mouseout', this.hideTooltip.bind(this))
	
		this.$tooltip = document.createElement('div');
		this.$tooltip.innerHTML = text;

		this.$tooltip.style.position = 'absolute';
		this.$tooltip.style.background = options.background;
		this.$tooltip.style.borderRadius = '5px';
		this.$tooltip.style.padding = '10px';
		this.$tooltip.style.transition = '1s';
		
		
	}
	
	showTooltip() {
		console.log('show tooltip')
		this.$tooltip.style.left = this.$triggerElement.getBoundingClientRect().right + 10 + "px";
		this.$tooltip.style.top = this.$triggerElement.getBoundingClientRect().top + 50 + "px";
		this.$tooltip.style.opacity = 0;
		document.body.appendChild(this.$tooltip);
		
		// this is a hack. you have to give the css time to put the element in the DOM at 0 opacity, then 
		// change the opacity to 1, otherwise the transition won't work.
		setTimeout(() => {
			this.$tooltip.style.top = this.$triggerElement.getBoundingClientRect().top - 10 + "px";
			this.$tooltip.style.opacity = 1;
		}, 1)
	}

	hideTooltip() {
		console.log('hide tooltip')
		document.body.removeChild(this.$tooltip);
	}

}