import {World} from 'cucumber';
import {browser} from 'protractor';

export async function takeScreenshot(world: World) {
  const image = await browser.takeScreenshot();

  await world.attach(image, 'image/png');
}
