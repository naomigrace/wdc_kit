const groupBy = key => array =>
  Array.isArray(array) ? array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key];
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, []) : array;

export default groupBy