const { readdirSync, lstatSync } = require('fs');
const { join } = require("path");


module.exports = (() => {
    const _pathIsFile = function(currentPath){
        return lstatSync(currentPath).isFile() 
    }
    const _pathIsDirectory = function(currentPath) {
        return lstatSync(currentPath).isDirectory() 
    }
    const _fileType = function(dirPath, type){
        return dirPath.endsWith(type)
    }

    const _getAllFiles = function(currentPath, result) {
        if(_pathIsFile(currentPath)){
            return [currentPath]
        }

        result = result || []
    
        let subPaths = readdirSync(currentPath)
    
        subPaths.forEach(subPath => {
            let composedPath = `${currentPath}/${subPath}`
            if (_pathIsDirectory(composedPath)) {
                _getAllFiles(composedPath, result)
            } else {
                result.push(join(__dirname, composedPath))
            }
        })
        return result;
    };

    const _getJSFiles = function(currentPath) {
        let result = _getAllFiles(currentPath);
        return result.filter(file => _fileType(file, '.js'));
    }

    return {
        getJSFiles: _getJSFiles,
        getAllFiles: _getAllFiles
    }
})();