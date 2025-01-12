const colors = require('colors');

const logInfo = (message) => {
  console.log('[INFO]: '.blue + message);
};

const logError = (message) => {
  console.log('[ERROR]: '.red + message);
};

const logSuccess = (message) => {
  console.log('[SUCCESS]: '.green + message);
};

const logOrigin = (message) => {
  console.log('[ORIGIN]: '.yellow + message);
};

module.exports = {
  logInfo,
  logError,
  logSuccess,
  logOrigin
};
