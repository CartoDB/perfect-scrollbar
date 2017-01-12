'use strict';

var update = require('./update');
var instances = require('./instances');

module.exports = function (element) {
  var i = instances.get(element);

  var onMutationObserver = function () {
    update(element);
  };

  i.event.bind(window, 'resize', onMutationObserver);
};
