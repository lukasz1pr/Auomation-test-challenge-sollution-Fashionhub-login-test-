import { test, expect } from "@playwright/test";
import { LoginPage } from "../src/pages/login-page";
import { WelcomePage } from "../src/pages/welcome-page";

test.describe("Login to the application", () => {
  test(
    "Login to the application with valid credentials",
    {
      tag: ["@smoke", "@regression", "@login"],
    },
    async ({ page }) => {
      const loginPage = new LoginPage(page);
      const welcomePage = new WelcomePage(page);

      await test.step("Given a valid user provides the right username & password", async () => {
        await page.goto("login.html");
      });

      await test.step("When the user tries to login", async () => {
        await loginPage.login();
      });

      await test.step("Then user should see a welcome message somewhere with his username", async () => {
        await expect(welcomePage.welcomeMessage).toBeVisible();
      });
    },
  );

  test(
    "Login to the application with invalid username",
    {
      tag: ["@regression", "@login"],
    },
    async ({ page }) => {
      const loginPage = new LoginPage(page);

      await test.step("Given the user is on the login page", async () => {
        await page.goto("login.html");
      });

      await test.step("When the user tries to login with an invalid username", async () => {
        await loginPage.login({ username: "invalid_username" });
      });

      await test.step("Then the user should see an error message", async () => {
        await expect(loginPage.errorMessage).toBeVisible();
      });
    },
  );

  test(
    "Login to the application with invalid password",
    {
      tag: ["@regression", "@login"],
    },
    async ({ page }) => {
      const loginPage = new LoginPage(page);

      await test.step("Given the user is on the login page", async () => {
        await page.goto("login.html");
      });

      await test.step("When the user tries to login with an invalid password", async () => {
        await loginPage.login({ password: "invalid_password" });
      });

      await test.step("Then the user should see an error message", async () => {
        await expect(loginPage.errorMessage).toBeVisible();
      });
    },
  );
});
