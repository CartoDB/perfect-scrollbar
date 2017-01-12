'use strict';

var update = require('./update');
var instances = require('./instances');

module.exports = function (element) {
  var CSS = 'position:absolute;left:0;top:-100%;width:100%;height:100%;margin:1px 0 0;border:none;opacity:0;visibility:hidden;pointer-events:none;';

  var i = instances.get(element);

  var onMutationObserver = function () {
    update(element);
  };

  var resizer = function (element, handler) {
    var frame = document.createElement('iframe');
    frame.style.cssText = CSS;
    element.appendChild(frame);
    i.event.bind(frame.contentWindow, 'resize', handler);
    return frame;
  };

  i.resizer = resizer(element, onMutationObserver);
};
