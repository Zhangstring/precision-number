'use strict';

function strip(num, precision = 12) {
  return parseFloat(num.toPrecision(precision))
}
var index = { strip };

module.exports = index;
