const { timeout_react } = require('../../../config.runner.json');


const sleepReact = (driver, timeout) => {
    let timeoutValue = timeout?timeout:timeout_react;
    return driver.sleep(timeoutValue);
}

module.exports.sleepReact = sleepReact;