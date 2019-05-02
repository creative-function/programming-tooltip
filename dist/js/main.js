"use strict";

new Tooltip('.googlelink', 'Click here Google!');
var twitterOverride = {
  color: 'purple' // backgroundColor: 'orange',
  // getBackgroundColor: 'none',

};
new Tooltip('.twitterlink', 'Click here Twitter!', twitterOverride);
var redditOverride = {
  color: 'white',
  backgroundColor: 'pink'
};
new Tooltip('.redditlink', 'Click here Reddit', redditOverride);
//# sourceMappingURL=main.js.map
