const { expect } = require('chai');
const config = require('../../../config.runner.json');
const { radio1Click, radio2Click, radio1Checked, radio2Checked } = require('../../pageObject/radiobutton.index.html.pageobject');
const { scoped } = require('../../../scoped.test');
const driver = scoped.driver;

describe('radiobutton tests', function() {


    before(async function() {
        await driver.get(`${config.url_base}/`);
    });

    it('radiobutton initial state', async function() { 
        let radio1IsChecked = await radio1Checked(driver);
        expect(radio1IsChecked).to.be.null;

        let radio2IsChecked = await radio2Checked(driver);
        expect(radio2IsChecked).to.be.null;
    });

    it('radiobutton click radio 1', async function() {
        await radio1Click(driver);
        
        let radio1IsChecked = await radio1Checked(driver);
        expect(radio1IsChecked).to.equal('true');
    });

    it('radiobutton click radio 2', async function() {
        await radio2Click(driver);

        let radio2IsChecked = await radio2Checked(driver);
        expect(radio2IsChecked).to.equal('true');
    });
    

    after(async function() {
        await driver.close();
    });

});