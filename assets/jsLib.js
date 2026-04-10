/**
 * --- jsLib ---
 *  */
/**
 * --- object.values() = [ ... ] ---
 *  */
Object.defineProperty(Object.prototype, "values", {
  value: function () {
    return [...Object.values(this)];
  },
  enumerable: false,
  writable: true,
  configurable: true,
});

/**
 * --- object.mapValues( () => {} ) ---
 *  */
Object.defineProperty(Object.prototype, "mapValues", {
  value: function (callback) {
    const objects = [...Object.values(this)];
    const list = [];

    for (let i = 0; i < objects.length; i++) {
      if (i in objects) {
        list[i] = callback(objects[i], i, objects);
      }
    }

    // 5. Retornamos a nova coleção transformada
    return list;
  },
  enumerable: false, // Não aparece no for...in
  writable: true, // Permite alterar o valor depois
  configurable: true, // Permite deletar ou alterar essa config depois
});

/**
 * --- object.mapKeys() ---
 *  */
Object.defineProperty(Object.prototype, "mapKeys", {
  value: function (cb) {
    const objects = [...Object.keys(this)];
    const list = [];
    for (let i = 0; i < objects.length; i++) {
      if (i in objects) {
        list[i] = cb(objects[i], i, objects);
      }
    }
    return list;
  },
});
