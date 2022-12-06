const { asyncForEach } = require('./app/asyncforeach');
const { getTestJSFiles } = require('./app/getallfiles');
const { pathParam } = require('./app/getpathparam');
const { runChrome } = require('./app/runchrome');

const Mocha = require('mocha');

(async () => {

    await asyncForEach(["chrome"], async (value, index) => {
        const jsFiles = getTestJSFiles(__dirname, pathParam);
        var passes = 0;
        var failures = 0;
        var sum = 0;
        await asyncForEach(jsFiles, async (testCase) => {
            global.driver = await runChrome(value);
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
                        passes++;
                        sum++;
                    })
                    .on('fail', (test,err) => {  
                        failures++;
                        sum++;     
                        reject(new Error(`Selenium test (${testCase}) failed.`))
                    })
                    .on('end', () => {
                        console.log('\x1b[33m%s\x1b[0m', `\r${sum} - ${passes} passed. ${failures} failed.`);
                        resolve()
                    });
            })
        });
    })
})();