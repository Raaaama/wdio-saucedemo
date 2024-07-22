import { LoginPage } from "../../po/pages/login.page.js";
import { InventoryPage } from "../../po/pages/inventory.page.js";
import { usernames, passwords, errorMessages } from "../data/login.data.js";
import { logger } from "../../config/logger.js";
import { clearInput } from "../utils/inputUtils.js";

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();
browser.addCommand("clearInput", clearInput, true);

describe("login page", () => {
  beforeEach(async () => {
    await loginPage.open();
  });

  it("UC-1: should display an error when username is not entered", async () => {
    const { loginButton, errorMessage } = loginPage.loginComponent;

    logger.info("UC-1: Setting username and password inputs");
    await loginPage.loginComponent.setCredentials(
      usernames.valid,
      passwords.valid
    );

    logger.info("UC-1: Clearing username and password inputs");
    await loginPage.loginComponent.clearInputs();

    logger.info("UC-1: Clicking the login button");
    await loginButton.click();

    logger.info("UC-1: Checking for expected error message");
    const errorText = await errorMessage.getText();
    expect(errorText).toContain(errorMessages.usernameRequired);
    logger.info(`UC-1: Error message verified: ${errorText}`);
  });

  it("UC-2: should display an error when password is not entered", async () => {
    const { passwordInput, loginButton, errorMessage } =
      loginPage.loginComponent;

    logger.info("UC-2: Setting username and password inputs");
    await loginPage.loginComponent.setCredentials(
      usernames.valid,
      passwords.valid
    );

    logger.info("UC-2: Clearing password input");
    await passwordInput.clearInput();

    logger.info("UC-2: Clicking the login button");
    await loginButton.click();

    logger.info("UC-2: Checking for expected error message");
    const errorText = await errorMessage.getText();
    expect(errorText).toContain(errorMessages.passwordRequired);
    logger.info(`UC-2: Error message verified: ${errorText}`);
  });

  it("UC-3: should login with valid credentials", async () => {
    const { loginButton } = loginPage.loginComponent;

    logger.info("UC-3: Setting username and password inputs");
    await loginPage.loginComponent.setCredentials(
      usernames.valid,
      passwords.valid
    );

    logger.info("UC-3: Clicking the login button");
    await loginButton.click();

    logger.info("UC-3: Checking for expected title on the inventory page");
    const { title } = inventoryPage.headerComponent;
    const titleText = await title.getText();
    expect(titleText).toContain("Swag Labs");
    logger.info(`UC-3: Title verified: ${titleText}`);
  });
});
