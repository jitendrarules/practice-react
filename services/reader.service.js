const fs = require("fs");
const path = require("path");
const { logError } = require("./log.service");

module.exports.getFileDetails = (folderPath) => {
  try {
    const fileTypes = {
      js: 0,
      html: 0,
      css: 0,
      pdf: 0,
      xlsx: 0,
      txt: 0,
      zip: 0,
      rar: 0,
      pptx: 0,
      doc: 0,
      py: 0,
      csv: 0,
      json: 0,
      ipynb: 0,
      other: 0,
    };

    const fileMeta = [];

    if (!fs.existsSync(folderPath)) {
      logError(`Folder not found: ${folderPath}`);
      return { fileTypes, fileMeta };
    }

    const files = fs.readdirSync(folderPath);

    files.forEach((file) => {
      const filePath = path.join(folderPath, file);
      const ext = path.extname(file).toLowerCase();

      const stat = fs.statSync(filePath);

      const fileInfo = {
        fileName: file,
        fileSize: (Math.round((stat.size / 1024) * 100) / 100).toFixed(2),
        fileType: ext,
      };
      fileMeta.push(fileInfo);

      switch (ext) {
        case ".js":
          fileTypes.js++;
          break;
        case ".css":
          fileTypes.css++;
          break;
        case ".rar":
          fileTypes.rar++;
          break;
        case ".html":
          fileTypes.html++;
          break;
        case ".png":
          fileTypes.png++;
          break;
        case ".xlsx":
          fileTypes.xlsx++;
          break;
        case ".txt":
          fileTypes.txt++;
          break;
        case ".zip":
          fileTypes.zip++;
          break;
        case ".pptx":
          fileTypes.pptx++;
          break;
        case ".doc":
        case ".docx":
          fileTypes.doc++;
          break;
        case ".py":
          fileTypes.py++;
          break;
        case ".csv":
          fileTypes.csv++;
          break;
        case ".json":
          fileTypes.json++;
          break;
        case ".ipynb":
          fileTypes.ipynb++;
          break;
        default:
          fileTypes.other++;
          break;
      }
    });

    return { fileTypes, fileMeta };
  } catch (err) {
    logError(err);
  }
};
