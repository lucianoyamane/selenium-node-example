const { By } = require('selenium-webdriver');
const { scoped } = require('../../../scoped.driver');
const driver = scoped.drive;

module.exports = (() => {

    const __elementByName = async (name) => {
        return await driver.findElement(By.name(name));
    }

    const __findElementValueByName = async (name, functionName, param) => {
        let element = await __elementByName(name);
        return element[functionName](param);
    }

    const __valueByName = async (name) => {
        return await __findElementValueByName(name,"getAttribute","value");
    }

    return {
        valueByName: __valueByName
    }
})();