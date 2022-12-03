
const { asyncForEach } = require('./app/asyncforeach');
const { getAllFiles } = require('./app/getallfiles');

const args = process.argv.slice(2);
const path = args[0];

(async () => {
    await asyncForEach(["chai"], async (value, index) => {
    
        const result = [];
        getAllFiles(path, result);
        result.forEach(value => console.log(value));
        console.log(value, index);
    })
})();