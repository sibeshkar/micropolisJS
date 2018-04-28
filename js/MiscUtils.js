/* micropolisJS. Adapted by Graeme McCutcheon from Micropolis.
 *
 * This code is released under the GNU GPL v3, with some additional terms.
 * Please see the files LICENSE and COPYING for details. Alternatively,
 * consult http://micropolisjs.graememcc.co.uk/LICENSE and
 * http://micropolisjs.graememcc.co.uk/COPYING
 *
 */

define(function(require, exports, module) {
  "use strict";


  var clamp = function(value, min, max) {
    if (value < min)
      return min;
    if (value > max)
      return max;

    return value;
  };


  var makeConstantDescriptor = function(value) {
    return {configurable: false, enumerable: false,
            writeable: false, value: value};
  };


  var normaliseDOMid = function(id) {
    return (id[0] !== '#' ? '#' : '') + id;
  };


  var reflectEvent = function(message, value) {
    this._emitEvent(message, value);
  };


  var MiscUtils = {
    clamp: clamp,
    makeConstantDescriptor: makeConstantDescriptor,
    normaliseDOMid: normaliseDOMid,
    reflectEvent: reflectEvent
  };


  return MiscUtils;
});
