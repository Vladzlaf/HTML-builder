const path = require('path');
const fs = require('fs');
const { readdir } = require('fs')
const fsPromises = fs.promises;

const filesPath = path.join(__dirname ,'/files');
const filesCopyPath = path.join(__dirname, '/file-copy');

readdir(filesCopyPath, (err, files) => {
    if (err) console.log('Error!');
    else {
        for (const file of files) {
            fs.unlink(path.join(__dirname, '/file-copy', file), err => {
                if (err) console.log('err1');
            });
        };
    };
});

fsPromises.mkdir(filesCopyPath, {recursive: true}).then(function(){});

readdir(filesPath, (err, files) => {
    if (err) console.log('Error!');
    else {
        for (const file of files) {
            const filePath = path.join(__dirname ,'/files', file);
            const fileCopyPath = path.join(__dirname, '/file-copy', file);
            fs.copyFile(filePath, fileCopyPath, err =>{
                if (err) console.log('Error!');
                else {
                    console.log('Done!');
                };
            });        

        };
    };
});

