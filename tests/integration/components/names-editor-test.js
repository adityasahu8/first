import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, pauseTest, fillIn, click, find, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | names-editor', function(hooks) {
  setupRenderingTest(hooks);

  test('it adds the full name to the list', async function(assert) {

    await render(hbs`{{names-editor}}`);
    await fillIn('.first-name', 'Bugs');
    await fillIn('.last-name', 'Bunny');
    await click('.add-btn');

    assert.equal(find('.first-name').value, '', 'First name gets blank');
    assert.equal(find('.last-name').value, '', 'Last name gets blank');

    assert.equal(
      findAll('.full-name-info-container').length,
      1,
      'expected number of info components render');


    let spans = findAll('.full-name-info-container span');
      assert.equal(
        spans[0].innerHTML,
        'Bugs Bunny',
        'first element full names matches'
      );


    await pauseTest();
  });
});
