const { By } = require('selenium-webdriver');
const { scoped } = require('../../../scoped.test');
const driver = scoped.drive;

module.exports = (() => {

    const _elementByName = async (name) => {
        return await driver.findElement(By.name(name));
    }

    const _findElementValueByName = async (name, functionName, param) => {
        let element = await _elementByName(name);
        return element[functionName](param);
    }

    const valueByName = async (name) => {
        return await _findElementValueByName(name,"getAttribute","value");
    }

    return {
        valueByName
    }
})();