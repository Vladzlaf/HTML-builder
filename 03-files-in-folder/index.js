const path = require('path');
const fs = require('fs/promises');
const { readdir } = require('fs/promises')

const folderPath = path.join(__dirname, '/secret-folder');

async function ShowFiles () {
    const files = await readdir(folderPath,{withFileTypes: true});
    for (const file of files){
    const extension = path.extname(file.name);
    const name = path.basename(file.name, path.extname(file.name));
    const size = (await fs.stat(folderPath+'/'+file.name)).size / 1000;
    if (file.isFile() === true) {
    console.log(`${name} - ${extension.split('.').pop()} - ${size}kb`);
    };
  };
};

ShowFiles()