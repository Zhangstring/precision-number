(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.PN = factory());
}(this, function () { 'use strict';

  function strip(num, precision) {
      if (precision === void 0) { precision = 12; }
      return parseFloat(num.toPrecision(precision));
  }
  var index = { strip: strip };

  return index;

}));
