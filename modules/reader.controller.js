const { logError, logInfo } = require("../services/log.service");
const { getFileDetails } = require("../services/reader.service");
const folderPath = 'C:\\Users\\jiten\\OneDrive\\Desktop\\practice';

const getFiles = (req, res) => {
  try {
    const fileCounts = getFileDetails(folderPath);
    logInfo(`Requested IP: ${req.ip}`)
    return res.json(fileCounts);
  } catch (error) {
    logError(error)
  }
};

module.exports = {
  getFiles,
};
