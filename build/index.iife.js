var PN = (function () {
  'use strict';

  function strip(num, precision = 12) {
    return parseFloat(num.toPrecision(precision))
  }
  var index = { strip };

  return index;

}());
