module.exports = function check(str, bracketsConfig) {
    for (let i = 0; i < bracketsConfig.length; i++) {
        if (str.includes(bracketsConfig[i][0] + bracketsConfig[i][1])) {
            str = str.replace(bracketsConfig[i][0] + bracketsConfig[i][1], "");
            i = -1;
        }
    }
    return str == "" ? true : false;
};
