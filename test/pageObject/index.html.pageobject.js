const { clickByCss } = require('./functions/css.functions');
const { checkedById } = require('./functions/id.functions');


module.exports = (() => {
    
    const __radio1Click = async () => {
        await clickByCss("div:nth-child(1) > .radio");
    }

    const __radio2Click = async () => {
        await clickByCss("div:nth-child(2) > .radio");
    }

    const __radio1Checked = async () => {
        return await checkedById("radio_1");
    }

    const __radio2Checked = async () => {
        return await checkedById("radio_2");
    }

    return {
        radio1Click: __radio1Click,
        radio2Click: __radio2Click,
        radio1Checked: __radio1Checked,
        radio2Checked: __radio2Checked
    }
})();