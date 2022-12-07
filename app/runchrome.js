const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const { screen_mode } = require('../config.runner.json');

module.exports.runChrome = async (browser) => {
    try {
        let options = new chrome.Options();
        options.setChromeBinaryPath('/usr/bin/google-chrome');
        if (!screen_mode) {
            options.addArguments('--headless');
            options.addArguments('--disable-gpu');
        }
        options.addArguments('--error-console');
        options.addArguments('--log-level=2');
        options.addArguments('--window-size=1200,900');
        return await new Builder().forBrowser(browser).setChromeOptions(options).build();
    } catch(error) {
        console.log(error)
        throw new Error(`Browser ${browser} nao encontrado`)
    }

};