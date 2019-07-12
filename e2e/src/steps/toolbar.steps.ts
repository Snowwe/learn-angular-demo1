import { Before, Then } from 'cucumber';
import { expect } from 'chai';

import { ToolbarPo } from '../pages/toolbar.po';

let toolbar: ToolbarPo;

Before(() => {
    toolbar = new ToolbarPo();
});

Then('I should see {int} buttons', async (count: number) => {
    expect(await toolbar.getCountToolbarButtons()).to.equal(count);
});

Then('I should see {int} buttons in menuList', async (count: number) => {
    expect(await toolbar.getCountMenuButtons()).to.equal(count);
});
