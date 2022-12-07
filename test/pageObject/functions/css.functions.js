const { By } = require('selenium-webdriver');
const { scoped } = require('../../../scoped.test');
const { sleepReact } = require('./share.functions')
// const driver = scoped.driver;


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

module.exports.clickByCss = clickByCss;

// module.exports = () => {

//     const _elementByCss = async (css) => {
//         return await driver.findElement(By.css(css));
//     }

//     const _findElementValueByCss = async (name, functionName, param) => {
//         let element = await _elementByCss(name);
//         return element[functionName](param);
//     }

//     const _valueByCss = async (name) => {
//         return await _findElementValueByCss(name,"getAttribute","value");
//     }

//     const clickByCss = async (css) => {
//         await sleepReact(driver);
//         await _findElementValueByCss(css,"click");
//     }

//     return {
//         clickByCss
//     }
// };