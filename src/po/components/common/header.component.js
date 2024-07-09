import { BaseComponent } from "./base.component.js";

export class HeaderComponent extends BaseComponent {
  constructor() {
    super("//div[@data-test='primary-header']");
  }

  get title() {
    return this.rootEl.$("//div[contains(@class, 'app_logo')]");
  }
}
