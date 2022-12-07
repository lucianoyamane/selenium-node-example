const { valueById, inputById } = require('./functions/id.functions');

const nameValue = async (driver) => {
    return await valueById(driver, 'name');
}

const nameInput = async (driver, text) => {
    await inputById(driver, 'name', text);
}

module.exports = {
    nameValue,
    nameInput
}