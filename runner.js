const Mocha = require('mocha');
const { asyncForEach } = require('./app/asyncforeach');
const { getTestJSFiles } = require('./app/getallfiles');
const { pathParam } = require('./app/getpathparam');
const { runChrome } = require('./app/runchrome');
const { scoped } = require('./scoped.test');
const { browsers, timeout } = require('./config.runner.json');

const {
    EVENT_RUN_END,
    EVENT_TEST_FAIL,
    EVENT_TEST_PASS,
  } = Mocha.Runner.constants;

const GENERATE_REPORTER = process.env.REPORTER_ENV == 'true';

(async () => {
    await asyncForEach(browsers, async (value, index) => {
        const testJsFiles = getTestJSFiles(__dirname, pathParam);
        await asyncForEach(testJsFiles, async (testCase, index) => {
            scoped.driver = await runChrome(value);
            return new Promise((resolve, reject) => {
                const mocha = new Mocha({
                    timeout: timeout
                });
                
                if (GENERATE_REPORTER) {
                    mocha.reporter('mochawesome', {
                        reportFilename: `[status]-${testCase.fullName}-report`,
                        quiet: false,
                    });
                }

                mocha.suite.on('require', function (module, file) {
                    delete require.cache[file];
                });
                console.log(
                    `Running ${testCase.path} on ${value}`
                );

                mocha.addFile(testCase.path);
                mocha.run()
                    .on(EVENT_TEST_PASS, test => {
                        scoped.passes++;
                        scoped.sum++;
                    })
                    .on(EVENT_TEST_FAIL, (test,err) => {  
                        scoped.failures++;
                        scoped.sum++;     
                        reject(new Error(`Selenium test (${testCase.path}) failed.`))
                    })
                    .on(EVENT_RUN_END, () => {
                        console.log('\x1b[33m%s\x1b[0m', `\r${scoped.sum} - ${scoped.passes} passed. ${scoped.failures} failed.`);
                        resolve()
                    });
            })
        });
    })
})();