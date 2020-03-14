module.exports = (str, regex, groupNumber) => {
  let matches = str.match(regex);
  return matches ? matches[groupNumber] : str;
};
