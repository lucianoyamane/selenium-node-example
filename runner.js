
const { asyncForEach } = require('./app/asyncforeach');
const { getAllFiles } = require('./app/getallfiles');
const { getPathParam } = require('./app/getpathparam');

(async () => {

    await asyncForEach(["chai"], async (value, index) => {
    
        const result = [];
        
        getAllFiles(getPathParam(), result);
        result.forEach(value => console.log(value));
        console.log(value, index);
    })
})();