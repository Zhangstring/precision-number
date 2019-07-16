var PN = (function () {
  'use strict';

  function strip(num, precision) {
      if (precision === void 0) { precision = 12; }
      return parseFloat(num.toPrecision(precision));
  }
  var index = { strip: strip };

  return index;

}());
