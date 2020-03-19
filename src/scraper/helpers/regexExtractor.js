module.exports = (str, regex, groupNumber, returnNullIfNotFound) => {
  let matches = str.match(regex);
  return matches ? matches[groupNumber] : returnNullIfNotFound ? null : str;
};
