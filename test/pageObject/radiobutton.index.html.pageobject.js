const { clickByCss } = require('./functions/css.functions');
const { checkedById } = require('./functions/id.functions');


const radio1Click = async (driver) => {
    await clickByCss(driver, "div:nth-child(1) > .radio");
}

const radio2Click = async (driver) => {
    await clickByCss(driver, "div:nth-child(2) > .radio");
}

const radio1Checked = async (driver) => {
    return await checkedById(driver, "radio_1");
}

const radio2Checked = async (driver) => {
    return await checkedById(driver, "radio_2");
}

module.exports = {
    radio1Checked,
    radio1Click,
    radio2Checked,
    radio2Click
}