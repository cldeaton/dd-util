// defaults
const defaults = function (object, ...sources) {
  for (var i = 0; i < sources.length; i++) {
    let source = sources[i];
    let sourceKeys = Object.keys(source);
    sourceKeys.forEach(sourceKey => {
      if (object.hasOwnProperty(sourceKey)===false) {
      object[sourceKey] = source[sourceKey];
    }
    });
}
  return object;
}

// defaultsDeep
const defaultsDeep = function (object, ...sources) {
  let ogKey = Object.keys(object);
  for (i = 0; i < sources.length; i++){
    let source = sources[i];
    let sourceKeys = Object.keys(source);
    sourceKeys.forEach(topKey => {
      if (object.hasOwnProperty(topKey) === false){
        object[topKey] = source[topKey];
      } else {
        let subKeys = Object.keys(source[topKey]);
        subKeys.forEach(subKey => {
          if (object[topKey].hasOwnProperty(subKey) === false){
            object[topKey][subKey] = source[topKey][subKey];
          }
        });
      }
    });
  }
  return object;
}

// diff
const diff = function (obj1, obj2) {
  function diffFunc (different, key)  {
    if (obj1[key] === obj2[key]) return difference
    return {
      ...difference,
      [key]: obj2[key]
    }
  };

  Object.keys(obj2).reduce((diffFunc), {});
  return different;
}


module.exports = {
  defaults,
  defaultsDeep,
  diff
};
