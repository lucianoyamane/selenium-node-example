const { valueById } = require('./functions/id.functions');

const nameValue = async (driver) => {
    return await valueById(driver, "name");
}

module.exports = {
    nameValue
}


// module.exports = (() => {
    
//     const nameValue = async () => {
//         return await valueById("name");
//     }

//     return {
//         nameValue: nameValue
//     }
// })();