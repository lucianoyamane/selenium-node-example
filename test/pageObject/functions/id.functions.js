const { By } = require('selenium-webdriver');
const { sleepReact } = require('./share.functions');

const _elementById = async (driver, name) => {
    return await driver.findElement(By.id(name));
}

const _executeFunctionById = async (driver, id, functionName, param) => {
    let element = await _elementById(driver, id);
    return element[functionName](param);
}

const inputById = async(driver, id, texto) => {
    await _executeFunctionById(driver, id, "sendKeys", texto);
    await sleepReact(driver, 2000);
}

const checkedById = async (driver, id) => {
    await sleepReact(driver, 500);
    return await _executeFunctionById(driver, id, "getAttribute", "checked");
}

const valueById = async (driver, id) => {
    return await _executeFunctionById(driver, id, "getAttribute", "value");
}

module.exports = {
    checkedById, 
    valueById,
    inputById
}