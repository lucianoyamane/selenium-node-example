
const { expect } = require('chai');
const config = require('../../../config.runner.json');
const { scoped } = require('../../../scoped.test');
const driver = scoped.driver;
const { nameValue, nameInput } = require('../../pageObject/input.name.index.html.pageobject');

describe('input name tests', function() {

    before(async function() {
        await driver.get(`${config.url_base}/`);
    });

    it('input name initial state', async function() { 
        let nameValueInitial = await nameValue(driver);
        expect(nameValueInitial).to.eq('');
    });

    it('input name fill value', async function() {
        await nameInput(driver, 'test fill text')
        
        let nameValueResult = await nameValue(driver);
        expect(nameValueResult).to.eq('test fill text');
    });

    after(async function() {
        await driver.close();
    });

})