
const { asyncForEach } = require('./app/asyncforeach');
const { getJSFiles } = require('./app/getallfiles');
const { pathParam } = require('./app/getpathparam');

(async () => {

    await asyncForEach(["chai"], async (value, index) => {
        const jsFiles = getJSFiles(pathParam);
        await asyncForEach(jsFiles, async (testCase) => {
            console.log(
                `Running ${testCase}`
            );
            
        });
    })
})();