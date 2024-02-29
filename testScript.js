import { Selector } from 'testcafe';

fixture `Fixture`
  .page('./resources/app/index.html');

test('test', async t => {
  await t.debug();
});