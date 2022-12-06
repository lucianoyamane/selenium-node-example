const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

let runChrome = async (browser) => {
    try {
        let options = new chrome.Options();
        options.setChromeBinaryPath('/usr/bin/google-chrome');
        // options.addArguments('--headless');screenmode false
        // options.addArguments('--disable-gpu');screenmode false
        options.addArguments('--error-console');
        options.addArguments('--log-level=2');
        options.addArguments('--window-size=1200,900');
        return await new Builder().forBrowser(browser).setChromeOptions(options).build();
    } catch(error) {
        console.log(error)
        throw new Error(`Browser ${browser} nao encontrado`)
    }

}

module.exports.runChrome = runChrome;