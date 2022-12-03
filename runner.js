const { readdirSync, lstatSync } = require('fs');
const { join } = require("path");
const { asyncForEach } = require('./app/async.for.each');


(async () => {
    await asyncForEach(["chai"], async (value, index) => {
        console.log(value, index);

        const pathIsFile = function(currentPath){
            return lstatSync(currentPath).isFile() 
        }
        const pathIsDirectory = function(currentPath) {
            return lstatSync(currentPath).isDirectory() 
        }
        const getAllFiles = function(currentPath, arrayOfFiles) {
            
            if(pathIsFile(currentPath)){
                return [currentPath]
            }

            let subPaths = readdirSync(currentPath)
        
            subPaths.forEach((subPath) => {
                let composedPath = `${currentPath}/${subPath}`
                if (pathIsDirectory(composedPath)) {
                    getAllFiles(composedPath, arrayOfFiles)
                } else {
                    arrayOfFiles.push(join(__dirname, composedPath))
                }
            })
        }
        const result = [];

        getAllFiles("./node_modules/chai", result);
        result.forEach(value => console.log(value));
    })
})();