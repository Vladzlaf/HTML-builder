const path = require('path');
const fs = require('fs');
const { readdir } = require('fs')

const stylesPath = path.join(__dirname, '/styles');
const mergePath = path.join(__dirname, '/project-dist', '/bundle.css')

readdir(stylesPath, {withFileTypes: true}, (err, files) => {
    if (err) console.log('Error!');
    else {
        files.forEach(file => {
            if(path.extname(file.name) === '.css' && file.isFile()) {
                const stylePath = path.join(__dirname, '/styles', file.name);
               const stream = fs.ReadStream(stylePath, {encoding: 'utf-8'});
               stream.on('readable', () =>{
                   const data = stream.read();
                   if (data !== null){
                    fs.appendFile(mergePath, data,  err => {
                        if (err) console.log(err)
                        else console.log('Done!')
                    });                                        
                   };
               });
            };
        });
    };
});
