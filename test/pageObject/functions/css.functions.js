const { By } = require('selenium-webdriver');
const { sleepReact } = require('./share.functions');

const _elementByCss = async (driver, css) => {
    return await driver.findElement(By.css(css));
}

const _findElementValueByCss = async (driver, name, functionName, param) => {
    let element = await _elementByCss(driver, name);
    return element[functionName](param);
}

const clickByCss = async (driver, css) => {
    await sleepReact(driver);
    await _findElementValueByCss(driver, css,"click");
}

module.exports = {
    clickByCss
};