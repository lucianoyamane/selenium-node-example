let asyncForEach = async (arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
        try {
            await cb(arr[i], i);
        } catch(error) {
            console.log("\x1b[31m%s\x1b[0m", error.message)
        }
    }
};

module.exports.asyncForEach = asyncForEach;