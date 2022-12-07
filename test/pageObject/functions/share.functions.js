const { timeout_react } = require('../../../config.runner.json');
const { scoped } = require('../../../scoped.test');
// const driver = scoped.driver;


const sleepReact = (driver, timeout) => {
    let timeoutValue = timeout?timeout:timeout_react;
    return driver.sleep(timeoutValue);
}

module.exports.sleepReact = sleepReact;

// module.exports.shareFunctions = (driver) => {

    

//     return {
//         sleepReact
//     }
// };