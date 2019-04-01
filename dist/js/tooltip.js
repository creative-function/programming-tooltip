'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tooltip = function () {
	function Tooltip(selector, text, options) {
		_classCallCheck(this, Tooltip);

		options = Object.assign({
			background: '#42dcf4'
		}, options);

		this.$triggerElement = document.querySelector(selector);
		if (!this.$triggerElement) {
			console.error('Could not find trigger element for tooltip: ', options.selector);
			return false;
		}

		this.$triggerElement.addEventListener('mouseover', this.showTooltip.bind(this));
		this.$triggerElement.addEventListener('mouseout', this.hideTooltip.bind(this));

		this.$tooltip = document.createElement('div');
		this.$tooltip.innerHTML = text;

		this.$tooltip.style.position = 'absolute';
		this.$tooltip.style.background = options.background;
		this.$tooltip.style.borderRadius = '5px';
		this.$tooltip.style.padding = '10px';
		this.$tooltip.style.transition = '1s';
	}

	_createClass(Tooltip, [{
		key: 'showTooltip',
		value: function showTooltip() {
			var _this = this;

			console.log('show tooltip');
			this.$tooltip.style.left = this.$triggerElement.getBoundingClientRect().right + 10 + "px";
			this.$tooltip.style.top = this.$triggerElement.getBoundingClientRect().top + 50 + "px";
			this.$tooltip.style.opacity = 0;
			document.body.appendChild(this.$tooltip);

			// this is a hack. you have to give the css time to put the element in the DOM at 0 opacity, then 
			// change the opacity to 1, otherwise the transition won't work.
			setTimeout(function () {
				_this.$tooltip.style.top = _this.$triggerElement.getBoundingClientRect().top - 10 + "px";
				_this.$tooltip.style.opacity = 1;
			}, 1);
		}
	}, {
		key: 'hideTooltip',
		value: function hideTooltip() {
			console.log('hide tooltip');
			document.body.removeChild(this.$tooltip);
		}
	}]);

	return Tooltip;
}();
//# sourceMappingURL=tooltip.js.map
