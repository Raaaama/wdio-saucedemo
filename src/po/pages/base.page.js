export class BasePage {
  constructor(url) {
    this.url = `https://www.saucedemo.com/${url}`;
  }

  open() {
    return browser.url(this.url);
  }
}
