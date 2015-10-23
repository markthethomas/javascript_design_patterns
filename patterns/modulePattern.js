const _ = require('lodash');

// Wrap in IIFE to take advantage of closures
(function module() {
  console.log('hi');
})();

// Use the bang operator or the + operator to get ordering in your evaluation
// useful for concatenation
!function bang() {
  console.log('bang!');
}();

// Extend another module
((_) => {
  _.printMessage = (message) => console.log(message);
})(_);

_.printMessage('Hello!');

// Using exports and assignment
const anotherModule = ((exports) => {
  let exports = {};
  exports.aMethod = () => {
    console.log('called aMethod!');
  };
  return exports;
})(anotherModule || {});

anotherModule.aMethod();

// Sub module pattern
anotherModule.sub = ((exports) => {
  let exports = {};
  exports.aMethod = () => {
    console.log('called aMethod!');
  };
  return exports;
})(anotherModule.sub || {});

anotherModule.aMethod();

// Module that checks whether it's running in node or the browser
const smartModule = ((root) => {
  const moduleObject = {};
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = moduleObject;
  } else {
    root.moduleObject = moduleObject;
  }
})(this);
