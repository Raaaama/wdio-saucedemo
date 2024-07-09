import { BaseComponent } from "../common/base.component.js";

export class LoginComponent extends BaseComponent {
  constructor() {
    super("//div[contains(@class, 'login-box')]");
  }

  get usernameInput() {
    return this.rootEl.$("//input[@id='user-name']");
  }

  get passwordInput() {
    return this.rootEl.$("//input[@id='password']");
  }

  get loginButton() {
    return this.rootEl.$("//input[@id='login-button']");
  }

  get errorMessage() {
    return this.rootEl.$("//div[contains(@class, 'error')]");
  }
}
