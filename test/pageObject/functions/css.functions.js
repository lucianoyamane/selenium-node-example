const { By } = require('selenium-webdriver');

const driver = global.driver;

module.exports = (() => {

    const __sleepReact = (timeout) => {
        let timeoutValue = timeout?timeout:config.timeout_react;
        return driver.sleep(timeoutValue);
    }

    const __elementByCss = async (css) => {
        return await driver.findElement(By.css(css));
    }

    const __findElementValueByCss = async (name, functionName, param) => {
        let element = await __elementByCss(name);
        return element[functionName](param);
    }

    const _valueByCss = async (name) => {
        return await _findElementValueByCss(name,"getAttribute","value");
    }

    const __clickByCss = async(css) => {
        await __sleepReact(500);
        await __findElementValueByCss(css,"click");
    }

    return {
        clickByCss: __clickByCss
    }
})();