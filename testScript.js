import { Selector } from 'testcafe';

const { appArgs } = require('./.testcafe-electron-rc.js');

let argument = String.raw`${appArgs[0]}`;

const scriptContent = `
window.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild('After including the escape characters for the backslashes in the argument from the testcafe-electron-rc.js file, it returns: ${argument}');
  });
`;

fixture `Fixture`
  .clientScripts({ content: scriptContent })
  .page('./resources/app/index.html');

test('test', async t => {
  await t.debug();
});