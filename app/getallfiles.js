const { readdirSync, lstatSync } = require('fs');
const { join } = require("path");

const pathIsFile = function(currentPath){
    return lstatSync(currentPath).isFile() 
}
const pathIsDirectory = function(currentPath) {
    return lstatSync(currentPath).isDirectory() 
}
const getAllFiles = function(currentPath, result) {
    
    if(pathIsFile(currentPath)){
        return [currentPath]
    }

    let subPaths = readdirSync(currentPath)

    subPaths.forEach(subPath => {
        let composedPath = `${currentPath}/${subPath}`
        if (pathIsDirectory(composedPath)) {
            getAllFiles(composedPath, result)
        } else {
            result.push(join(__dirname, composedPath))
        }
    })
}

module.exports.getAllFiles = getAllFiles;