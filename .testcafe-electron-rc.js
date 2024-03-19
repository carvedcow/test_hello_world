var arg = String.raw`--helpFile="C:\\example folder\\help.html"`;

module.exports = {
    mainWindowUrl: './resources/app/index.html',
    electronPath: './test.exe',
    appArgs: [`${arg}`]
};