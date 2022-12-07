const { By } = require('selenium-webdriver');
const { scoped } = require('../../../scoped.test');
const driver = scoped.drive;

module.exports = (() => {

    const _sleepReact = (timeout) => {
        let timeoutValue = timeout?timeout:config.timeout_react;
        return driver.sleep(timeoutValue);
    }

    const _elementByCss = async (css) => {
        return await driver.findElement(By.css(css));
    }

    const _findElementValueByCss = async (name, functionName, param) => {
        let element = await _elementByCss(name);
        return element[functionName](param);
    }

    const _valueByCss = async (name) => {
        return await _findElementValueByCss(name,"getAttribute","value");
    }

    const clickByCss = async (css) => {
        await _sleepReact(500);
        await _findElementValueByCss(css,"click");
    }

    return {
        clickByCss
    }
})();