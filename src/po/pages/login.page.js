import { BasePage } from "./base.page.js";
import { LoginComponent } from "../components/login/login.component.js";

export class LoginPage extends BasePage {
  constructor() {
    super("");
    this.loginComponent = new LoginComponent();
  }
}
