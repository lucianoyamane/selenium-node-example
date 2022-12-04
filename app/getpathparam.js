const { existsSync } = require('fs');
const args = process.argv.slice(2);

module.exports = (() => {
    const _getPathParam = () => {
        let path = args[0] || './test';
        if (existsSync(path)) {
            return path;
        }
        throw new Error('path informado invalido!')
    };

    return {
        pathParam: _getPathParam()
    }
})();