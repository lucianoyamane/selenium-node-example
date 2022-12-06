const { PageObject } = require('./pageobject');

class IndexHtmlPageObject extends PageObject{

    constructor(drive) {
        super(drive);
    }

    async radio1Click() {
        await this.clickByCss("div:nth-child(1) > .radio");
    }

    async radio2Click() {
        await this.clickByCss("div:nth-child(2) > .radio");
    }

    async radio1Checked() {
        return await this.checkedById("radio_1");
    }

    async radio2Checked() {
        return await this.checkedById("radio_2");
    }

}

module.exports.IndexHtmlPageObject = IndexHtmlPageObject;
