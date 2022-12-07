const { By } = require('selenium-webdriver');
const { scoped } = require('../../../scoped.test');
const driver = scoped.driver;
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

// module.exports = (() => {

//     const _sleepReact = (timeout) => {
//         let timeoutValue = timeout?timeout:config.timeout_react;
//         return driver.sleep(timeoutValue);
//     }

//     const checkedById = async (id) => {
//         await _sleepReact(500);
//         return await _findElementValueById(id,"getAttribute","checked");
//     }

//     const _elementById = async (name) => {
//         return await driver.findElement(By.id(name));
//     }

//     const _findElementValueById = async (id, functionName, param) => {
//         let element = await _elementById(id);
//         return element[functionName](param);
//     }

//     const valueById = async (id) => {
//         return await _findElementValueById(id,"getAttribute","value");
//     }

//     return {
//         checkedById,
//         valueById
//     }
// })();