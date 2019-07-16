import { Before, BeforeAll, setDefaultTimeout, Then } from 'cucumber';
import { expect } from 'chai';

import { ToolbarPo } from '../pages/toolbar.po';
import { takeScreenshot } from '../../screenshot';

let toolbar: ToolbarPo;

BeforeAll( function() {
  setDefaultTimeout(100 * 1000);
});

Before(function() {
    toolbar = new ToolbarPo();
});

Then('I should see {int} buttons', async function(count: number) {
    expect(await toolbar.getCountToolbarButtons()).to.equal(count);
    await takeScreenshot(this);
});

Then('I should see {int} buttons in menuList', async function(count: number) {
    expect(await toolbar.getCountMenuButtons()).to.equal(count);
    await takeScreenshot(this);
});
