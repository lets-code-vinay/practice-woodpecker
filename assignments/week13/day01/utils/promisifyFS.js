var fs = require("fs");

module.exports = {
  readFilePromise: function(filePath) {
    return new Promise(function(resolve, reject) {
      // Read file normally.
      fs.readFile(filePath, { encoding: "utf-8" }, function(err, data) {
        if (err)
          reject(err);
        else resolve(data);
      });
    });
  },
  writeFilePromise: function(filePath, data) {
    return new Promise(function(resolve, reject) {
      fs.writeFile(filePath, data, function(err) {
        if (err)
          reject(err);
        else resolve("File written successfully");
      });
    });
  }
};
