const { By } = require('selenium-webdriver');

class PageObject {
    constructor(driver) {
        this.driver = driver;
    }

    sleepReact(timeout) {
        let timeoutValue = timeout?timeout:config.timeout_react;
        return this.driver.sleep(timeoutValue);
    }

    async valueByName(name){
        return await this.findElementValueByName(name,"getAttribute","value");
    }

    async elementByName(name) {
        return await this.driver.findElement(By.name(name));
    }

    async findElementValueByName(name, functionName, param){
        let element = await this.elementByName(name);
        return element[functionName](param);
    }

    async checkedById(id){
        await this.sleepReact(500);
        return await this.findElementValueById(id,"getAttribute","checked");
    }

    async elementById(name) {
        return await this.driver.findElement(By.id(name));
    }

    async findElementValueById(id, functionName, param){
        let element = await this.elementById(id);
        return element[functionName](param);
    }

    async valueById(id){
        return await this.findElementValueById(id,"getAttribute","value");
    }

    async valueByCss(css){
        return await this.findElementValueByCss(css,"getAttribute","value");
    }

    async elementByCss(css){
        return await this.driver.findElement(By.css(css));
    }

    async findElementValueByCss(name, functionName, param){
        let element = await this.elementByCss(name);
        let result = await element[functionName](param);
        return result;
    }

    async clickByCss(css){
        await this.sleepReact(500);
        await this.findElementValueByCss(css,"click");
    }

}

module.exports.PageObject = PageObject;


module.exports.cssFunctions = () => {

    const __sleepReact = (driver, timeout) => {
        let timeoutValue = timeout?timeout:config.timeout_react;
        return driver.sleep(timeoutValue);
    }

    const __elementByCss = async (driver, css) => {
        return await driver.findElement(By.css(css));
    }

    const __findElementValueByCss = async (driver, name, functionName, param) => {
        let element = await __elementByCss(driver, name);
        return element[functionName](param);
    }

    const _valueByCss = async (name) => {
        return await _findElementValueByCss(name,"getAttribute","value");
    }

    const __clickByCss = async(driver, css) => {
        await __sleepReact(driver, 500);
        await __findElementValueByCss(driver, css,"click");
    }

    return {
        clickByCss: __clickByCss
    }
};

module.exports.nameFunctions = (driver) => {

    const _elementByName = async (name) => {
        return await driver.findElement(By.name(name));
    }

    const _findElementValueByName = async (name, functionName, param) => {
        let element = await _elementByName(name);
        return element[functionName](param);
    }

    const _valueByName = async (name) => {
        return await _findElementValueByName(name,"getAttribute","value");
    }

    return {
        valueByName: _valueByName
    }
};