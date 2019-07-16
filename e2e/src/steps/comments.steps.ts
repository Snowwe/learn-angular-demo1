import { Before, BeforeAll, setDefaultTimeout, Then, When } from 'cucumber';
import { expect } from 'chai';
import { takeScreenshot } from '../../screenshot';
import { CommentsPo } from '../pages/comments.po';

let comment: CommentsPo;
let commentCount: number;

Before(function() {
    comment = new CommentsPo();
});

BeforeAll(function() {
    setDefaultTimeout(100 * 1000);
});

When('l should see comment list', async function() {
    await comment.getCountComment().then((value: number) => {
        commentCount = value;
    });
    await takeScreenshot(this);
});

Then('I should see comment list + 1', async function() {
    expect(await comment.getCountComment()).to.equal(++commentCount);
});
