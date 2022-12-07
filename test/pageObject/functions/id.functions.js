const { By } = require('selenium-webdriver');
const { scoped } = require('../../../scoped.test');
const driver = scoped.drive;

module.exports = (() => {

    const _sleepReact = (timeout) => {
        let timeoutValue = timeout?timeout:config.timeout_react;
        return driver.sleep(timeoutValue);
    }

    const checkedById = async (id) => {
        await _sleepReact(500);
        return await _findElementValueById(id,"getAttribute","checked");
    }

    const _elementById = async (name) => {
        return await driver.findElement(By.id(name));
    }

    const _findElementValueById = async (id, functionName, param) => {
        let element = await _elementById(id);
        return element[functionName](param);
    }

    const _valueById = async (id) => {
        return await _findElementValueById(id,"getAttribute","value");
    }

    return {
        checkedById
    }
})();