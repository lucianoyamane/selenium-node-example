const { expect } = require('chai');
const config = require('../../../config.runner.json');
const { radio1Click, radio2Click, radio1Checked, radio2Checked } = require('../../pageObject/index.html.pageobject');
const driver = global.driver;

describe('radiobutton default', function() {


    before(async function() {
        await driver.get(`${config.url_base}/`);
    });

    it('radiobutton screen initial state', async function() { 
        let radio1IsChecked = await radio1Checked();
        expect(radio1IsChecked).to.be.null;

        let radio2IsChecked = await radio2Checked();
        expect(radio2IsChecked).to.be.null;
    });

    it('radiobutton click radio 1', async function() {
        await radio1Click();
        
        let radio1IsChecked = await radio1Checked();
        expect(radio1IsChecked).to.equal('true');
    });

    it('radiobutton click radio 2', async function() {
        await radio2Click();

        let radio2IsChecked = await radio2Checked();
        expect(radio2IsChecked).to.equal('true');
    });
    

    after(async function() {
        await driver.close();
    });

});