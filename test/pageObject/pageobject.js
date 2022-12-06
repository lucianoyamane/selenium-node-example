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

    async checkedById(id){
        await this.sleepReact(500);
        return await this.findElementValueById(id,"getAttribute","checked");
    }

    async findElementValueByName(name, functionName, param){
        let element = await this.elementByName(name);
        return element[functionName](param);
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