import { LoginPage } from "../../po/pages/login.page.js";
import { InventoryPage } from "../../po/pages/inventory.page.js";
import loginData from "../data/login.data.js";
import { logger } from "../../config/logger.js";
import { clearInput } from "../utils/inputUtils.js";

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

describe("login page", () => {
  beforeEach(async () => {
    await loginPage.open();
  });

  loginData.forEach((testCase) => {
    it(`${testCase.id}: ${testCase.description}`, async () => {
      const { usernameInput, passwordInput, loginButton, errorMessage } =
        loginPage.loginComponent;

      logger.info(`Test case: ${testCase.id} - ${testCase.description}`);

      await usernameInput.setValue(testCase.username);
      await passwordInput.setValue(testCase.password);

      if (testCase.id === "UC-1") {
        logger.info("UC-1: Clearing username and password inputs");
        await clearInput(usernameInput, testCase.username.length);
        await clearInput(passwordInput, testCase.password.length);
      } else if (testCase.id === "UC-2") {
        logger.info("UC-2: Clearing password input");
        await clearInput(passwordInput, testCase.password.length);
      }

      await loginButton.click();

      if (testCase.expectedError) {
        logger.info("Checking for expected error message");
        await expect(errorMessage).toBeDisplayed();
        const errorText = await errorMessage.getText();
        expect(errorText).toContain(testCase.expectedError);
        logger.info(`Error message verified: ${errorText}`);
      } else if (testCase.expectedTitle) {
        logger.info("Checking for expected title on the inventory page");
        const { title } = inventoryPage.headerComponent;
        const titleText = await title.getText();
        expect(titleText).toContain(testCase.expectedTitle);
        logger.info(`Title verified: ${titleText}`);
      }

      logger.info(`Test case completed: ${testCase.id}`);
    });
  });
});
