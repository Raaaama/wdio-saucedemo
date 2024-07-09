import { LoginPage } from "../../po/pages/login.page.js";
import { InventoryPage } from "../../po/pages/inventory.page.js";
import loginData from "../data/login.data.js";

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

      await usernameInput.setValue(testCase.username);
      await passwordInput.setValue(testCase.password);

      if (testCase.id === "UC-1") {
        await usernameInput.clearValue();
        await passwordInput.clearValue();
      } else if (testCase.id === "UC-2") {
        await passwordInput.clearValue();
      }

      await loginButton.click();

      if (testCase.expectedError) {
        await expect(errorMessage).toBeDisplayed();
        const errorText = await errorMessage.getText();
        expect(errorText).toContain(testCase.expectedError);
      } else if (testCase.expectedTitle) {
        const { title } = inventoryPage.headerComponent;
        const titleText = await title.getText();
        expect(titleText).toContain(testCase.expectedTitle);
      }
    });
  });
});
