
const { expect } = require('chai');
const config = require('../../../config.runner.json');
const { scoped } = require('../../../scoped.test');
const driver = scoped.driver;
const { nameValue } = require('../../pageObject/input.name.index.html.pageobject');

describe('input name tests', function() {

    before(async function() {
        await driver.get(`${config.url_base}/`);
    });

    it('input name initial state', async function() { 
        let nameValueInitial = await nameValue(driver);
        expect(nameValueInitial).to.eq('');
    });

    after(async function() {
        await driver.close();
    });

})