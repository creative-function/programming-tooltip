"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Tooltip = function Tooltip(selector, text, options) {
  var _this = this;

  _classCallCheck(this, Tooltip);

  _defineProperty(this, "showTooltip", function () {
    console.log('show tooltip');
    _this.$tooltip.style.left = _this.$triggerElement.getBoundingClientRect().right + 10 + "px";
    _this.$tooltip.style.top = _this.$triggerElement.getBoundingClientRect().top + 50 + "px";
    _this.$tooltip.style.opacity = 0;
    document.body.appendChild(_this.$tooltip); // this is a hack. you have to give the css time to put the element in the DOM at 0 opacity, then 
    // change the opacity to 1, otherwise the transition won't work.

    setTimeout(function () {
      _this.$tooltip.style.top = _this.$triggerElement.getBoundingClientRect().top - 10 + "px";
      _this.$tooltip.style.opacity = 1;
    }, 1);
  });

  _defineProperty(this, "hideTooltip", function () {
    console.log('hide tooltip');
    document.body.removeChild(_this.$tooltip);
  });

  options = Object.assign({
    background: '#42dcf4'
  }, options);
  this.$triggerElement = document.querySelector(selector);

  if (!this.$triggerElement) {
    console.error('Could not find trigger element for tooltip: ', options.selector);
    return false;
  }

  this.$triggerElement.addEventListener('mouseover', this.showTooltip);
  this.$triggerElement.addEventListener('mouseout', this.hideTooltip);
  this.$tooltip = document.createElement('div');
  this.$tooltip.innerHTML = text;
  this.$tooltip.style.position = 'absolute';
  this.$tooltip.style.background = options.background;
  this.$tooltip.style.borderRadius = '5px';
  this.$tooltip.style.padding = '10px';
  this.$tooltip.style.transition = '1s';
};
//# sourceMappingURL=tooltip.js.map
