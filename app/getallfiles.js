const { readdirSync, lstatSync } = require('fs');
const { join } = require("path");


module.exports = (() => {
    const _pathIsFile = (currentPath) => {
        return lstatSync(currentPath).isFile() 
    }
    const _pathIsDirectory = (currentPath) => {
        return lstatSync(currentPath).isDirectory() 
    }
    const _fileType = (dirPath, type) => {
        return dirPath.endsWith(type)
    }

    const _getAllFiles = (absolutePath, currentPath, result) => {
        if(_pathIsFile(currentPath)){
            return [join(absolutePath, currentPath)]
        }

        result = result || []
    
        let subPaths = readdirSync(currentPath)
    
        subPaths.forEach(subPath => {
            let composedPath = `${currentPath}/${subPath}`
            if (_pathIsDirectory(composedPath)) {
                _getAllFiles(absolutePath, composedPath, result)
            } else {
                result.push({ path: join(absolutePath, composedPath), file: subPath, fullName: composedPath.replace("./", "").replaceAll("/", "-")});
            }
        })
        return result;
    };

    const _getTestJSFiles = (absolutePath, currentPath) => {
        let result = _getAllFiles(absolutePath, currentPath);
        return result.filter(item => _fileType(item.file, 'test.js'));
    }

    return {
        getTestJSFiles: _getTestJSFiles,
        getAllFiles: _getAllFiles
    }
})();