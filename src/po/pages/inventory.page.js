import { BasePage } from "./base.page.js";
import { HeaderComponent } from "../components/common/header.component.js";

export class InventoryPage extends BasePage {
  constructor() {
    super("inventory");
    this.headerComponent = new HeaderComponent();
  }
}
