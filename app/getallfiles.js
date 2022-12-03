const { readdirSync, lstatSync } = require('fs');
const { join } = require("path");


module.exports = (() => {
    const _pathIsFile = function(currentPath){
        return lstatSync(currentPath).isFile() 
    }
    const _pathIsDirectory = function(currentPath) {
        return lstatSync(currentPath).isDirectory() 
    }

    const _getAllFiles = function(currentPath, result) {
        if(_pathIsFile(currentPath)){
            return [currentPath]
        }
    
        let subPaths = readdirSync(currentPath)
    
        subPaths.forEach(subPath => {
            let composedPath = `${currentPath}/${subPath}`
            if (_pathIsDirectory(composedPath)) {
                _getAllFiles(composedPath, result)
            } else {
                result.push(join(__dirname, composedPath))
            }
        })
    };

    return {
        getAllFiles: _getAllFiles
    }
})();