'use strict';

var update = require('./update');
var MutationObserver = window.MutationObserver;
var instances = require('./instances');

module.exports = function (element) {
  if (MutationObserver === null || MutationObserver === undefined) {
    // MutationObserver is not supported
    return;
  }

  var i = instances.get(element);
  var onMutationObserver = function () {
    update(element);
  };

  i.observer = new MutationObserver(onMutationObserver);
  onMutationObserver();

  var config = { childList: true, subtree: true };
  i.observer.observe(element, config);
};
