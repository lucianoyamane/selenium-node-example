const { expect } = require('chai');
const config = require('../../config.runner.json');

const { IndexHtmlPageObject } = require('../pageObject/index.html.pageobject');

describe('radiobutton default', function() {

    const driver = global.driver;

    before(async function() {
        await driver.get(`${config.url_base}/`);
        this.pageObject = new IndexHtmlPageObject(driver);
    });

    it('radiobutton screen initial state', async function() { 
        let radio1Checked = await this.pageObject.radio1Checked();
        expect(radio1Checked).to.be.null;

        let radio2Checked = await this.pageObject.radio2Checked();
        expect(radio2Checked).to.be.null;
    });

    it('radiobutton click radio 1', async function() {
        await this.pageObject.radio1Click();
        
        let radio1Checked = await this.pageObject.radio1Checked();
        expect(radio1Checked).to.equal('true');
    });

    it('radiobutton click radio 2', async function() {
        await this.pageObject.radio2Click();

        let radio2Checked = await this.pageObject.radio2Checked();
        expect(radio2Checked).to.equal('true');
    });
    

    after(async function() {
        await driver.close();
    });

});