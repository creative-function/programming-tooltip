"use strict";

new Tooltip('.googlelink', 'Click here Google!');
var twitterOverride = {
  color: 'white',
  backgroundColor: '#00aced',
  getBackgroundColor: 'none',
  tooltipPosition: 'none'
};
new Tooltip('.twitterlink', 'Click here Twitter!', twitterOverride);
//# sourceMappingURL=main.js.map
