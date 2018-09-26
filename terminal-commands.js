const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = () => {
  fs.writeFileSync('i_made_a_file.js')
};

module.exports.mkdir = () => {
  fs.mkdirSync('i_made_a_folder',[0o777])
};
