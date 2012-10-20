/*global define*/
(function (root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd && define.amd.jQuery) {
    define(function (require) {
      var jQuery = require('jquery');
      factory(jQuery, root);
    });
  } else {
    factory(jQuery, root);
  }
} (this, function ($, window, undefined) {
  'use strict';
  $.fn.max = function (array) {
    return Math.max.apply(null, array);
  };
  $.fn.min = function (array) {
    return Math.min.apply(null, array);
  };
}));