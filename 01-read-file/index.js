const fs = require('fs');
const path = require('path');

const textPath = path.join(__dirname, '/text.txt');
const stream = new fs.ReadStream(textPath, {encoding: 'utf-8'});

stream.on('readable', function() {
    const data = stream.read();
    if(data != null){
        console.log(data)
    };
});