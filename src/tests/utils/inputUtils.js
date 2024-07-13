import { Key } from "webdriverio";

export async function clearInput() {
  const value = await this.getValue();
  const n = value.length;
  await this.click();
  for (let i = 0; i < n; i++) {
    await browser.keys(Key.Backspace);
  }
}
