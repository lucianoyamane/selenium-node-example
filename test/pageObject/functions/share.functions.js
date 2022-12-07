const { timeout_react } = require('../../../config.runner.json');
const { scoped } = require('../../../scoped.test');
const driver = scoped.drive;

module.exports = (() => {

    const sleepReact = (timeout) => {
        let timeoutValue = timeout?timeout:timeout_react;
        return driver.sleep(timeoutValue);
    }

    return {
        sleepReact
    }
})();