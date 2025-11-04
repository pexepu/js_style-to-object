'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylePairs = sourceString
    .split(';')
    .map((item) => item.trim())
    .filter((item) => item !== '')
    .map((item) => item.split(':'));

  const stylesObject = {};

  const callback = (pair) => {
    const property = pair[0].trim();
    const value = pair[1].trim();

    stylesObject[property] = value;
  };

  stylePairs.forEach(callback);

  return stylesObject;
}

module.exports = convertToObject;
