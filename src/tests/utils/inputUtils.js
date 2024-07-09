import { Key } from "webdriverio";

export async function clearInput(inputElement, n) {
  const element = await inputElement;
  await element.click();
  for (let i = 0; i < n; i++) {
    await browser.keys(Key.Backspace);
  }
}
