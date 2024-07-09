import { LoginPage } from "../../po/pages/login.page.js";
import { InventoryPage } from "../../po/pages/inventory.page.js";

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

describe("login page", () => {
  beforeEach(async () => {
    await loginPage.open();
  });

  it("UC-1: should display an error when username is not entered", async () => {
    const { usernameInput, passwordInput, loginButton, errorMessage } =
      loginPage.loginComponent;

    await usernameInput.setValue("standard_user");
    await passwordInput.setValue("secret_sauce");

    await usernameInput.clearValue();
    await passwordInput.clearValue();

    await loginButton.click();

    await expect(errorMessage).toBeDisplayed();
    const errorText = await errorMessage.getText();
    expect(errorText).toContain("Username is required");
  });

  it("UC-2: should not login with only username credentials", async () => {
    const { usernameInput, passwordInput, loginButton, errorMessage } =
      loginPage.loginComponent;

    await usernameInput.setValue("standard_user");
    await passwordInput.setValue("secret_sauce");

    await passwordInput.clearValue();
    await loginButton.click();

    await expect(errorMessage).toBeDisplayed();
    const errorText = await errorMessage.getText();
    expect(errorText).toContain("Password is required");
  });

  it("UC-3: should login with valid credentials", async () => {
    const { usernameInput, passwordInput, loginButton } =
      loginPage.loginComponent;
    const { titleText } = inventoryPage.headerComponent;

    await usernameInput.setValue("standard_user");
    await passwordInput.setValue("secret_sauce");
    await loginButton.click();

    const text = await titleText;
    expect(text).toContain("Swag Labs");
  });
});
