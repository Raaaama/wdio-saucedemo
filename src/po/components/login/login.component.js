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

  async setCredentials(username, password) {
    await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password);
  }

  async clearInputs() {
    await this.usernameInput.clearInput();
    await this.passwordInput.clearInput();
  }
}
