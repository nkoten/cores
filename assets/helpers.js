/**
 * --- helpers --- */

/**
 * --- retorna o objeto passado como um Array
 *  @param objeto - objeto para converter em Array
 *  */
export function oList(objeto) {
  return Object.values(objeto);
}

Object.defineProperty(Object.prototype, "oMap", {
  value: function (cb) {
    return Object.values(this).map(cb);
  },
  enumarable: false,
  configurable: true,
});
