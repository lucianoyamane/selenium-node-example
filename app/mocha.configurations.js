let reporterConfig = (mocha, testCase) => {
    mocha.reporter('mochawesome', {
        reportFilename: `[status]-${testCase.fullName}-report`,
        quiet: false,
    });
}

let deleteCache = (mocha) => {
    mocha.suite.on('require', function (module, file) {
        delete require.cache[file];
    });
};

let initTest = (mocha, testCase) => {
    console.log(`Running ${testCase.path}`);
    mocha.addFile(testCase.path);
}
module.exports = {
    reporterConfig, 
    deleteCache, 
    initTest
}