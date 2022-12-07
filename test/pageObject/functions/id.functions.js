const { By } = require('selenium-webdriver');
const { sleepReact } = require('./share.functions');

const _elementById = async (driver, name) => {
    return await driver.findElement(By.id(name));
}

const _findElementValueById = async (driver, id, functionName, param) => {
    let element = await _elementById(driver, id);
    return element[functionName](param);
}

const checkedById = async (driver, id) => {
    await sleepReact(driver, 500);
    return await _findElementValueById(driver, id,"getAttribute","checked");
}

const valueById = async (driver, id) => {
    return await _findElementValueById(driver, id,"getAttribute","value");
}

module.exports = {
    checkedById, 
    valueById
}