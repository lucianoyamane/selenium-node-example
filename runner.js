
const { asyncForEach } = require('./app/asyncforeach');
const { getJSFiles } = require('./app/getallfiles');
const { pathParam } = require('./app/getpathparam');

(async () => {

    await asyncForEach(["chai"], async (value, index) => {
        const jsFiles = getJSFiles(pathParam);
        jsFiles.forEach(value => console.log(value));
        console.log(value, index);
    })
})();