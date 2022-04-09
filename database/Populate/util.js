const lineReader = require('line-reader');
const fs = require('fs').promises;

function readFileLineByLine(path){
    return new Promise((resolve, reject) => {
        list = []
        lineReader.eachLine(path, (line, last) => {
            list.push(line)
            if(last)
                resolve(list)
        });
    })
}

module.exports = {readFileLineByLine}