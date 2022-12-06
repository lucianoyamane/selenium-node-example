const { By } = require('selenium-webdriver');

const driver = global.driver;

module.exports = (() => {

    const __sleepReact = (timeout) => {
        let timeoutValue = timeout?timeout:config.timeout_react;
        return driver.sleep(timeoutValue);
    }

    const __checkedById = async (id) => {
        await __sleepReact(500);
        return await __findElementValueById(id,"getAttribute","checked");
    }

    const __elementById = async (name) => {
        return await driver.findElement(By.id(name));
    }

    const __findElementValueById = async (id, functionName, param) => {
        let element = await __elementById(id);
        return element[functionName](param);
    }

    const __valueById = async (id) => {
        return await __findElementValueById(id,"getAttribute","value");
    }

    return {
        checkedById: __checkedById
    }
})();