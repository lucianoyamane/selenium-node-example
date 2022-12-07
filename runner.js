const { asyncForEach } = require('./app/asyncforeach');
const { getTestJSFiles } = require('./app/getallfiles');
const { pathParam } = require('./app/getpathparam');
const { runChrome } = require('./app/runchrome');
const { scoped } = require('./scoped.test');

const Mocha = require('mocha');

(async () => {

    await asyncForEach(["chrome"], async (value, index) => {
        const jsFiles = getTestJSFiles(__dirname, pathParam);
        await asyncForEach(jsFiles, async (testCase) => {
            scoped.drive = await runChrome(value);
            return new Promise((resolve, reject) => {
                const mocha = new Mocha({
                    timeout: 10000
                });

                mocha.suite.on('require', function (module, file) {
                    delete require.cache[file];
                });
                console.log(
                    `Running ${testCase} on ${value}`
                );

                mocha.addFile(`${testCase}`);
                mocha.run()
                    .on('pass', test => {
                        scoped.passes++;
                        scoped.sum++;
                    })
                    .on('fail', (test,err) => {  
                        scoped.failures++;
                        scoped.sum++;     
                        reject(new Error(`Selenium test (${testCase}) failed.`))
                    })
                    .on('end', () => {
                        console.log('\x1b[33m%s\x1b[0m', `\r${scoped.sum} - ${scoped.passes} passed. ${scoped.failures} failed.`);
                        resolve()
                    });
            })
        });
    })
})();