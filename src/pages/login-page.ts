import { Page, Locator } from "@playwright/test";

export class LoginPage {
  readonly errorMessage: Locator;
  readonly loginButton: Locator;
  readonly passwordInput: Locator;
  readonly usernameInput: Locator;

  constructor(public readonly page: Page) {
    this.errorMessage = page.getByText("Invalid username or password");
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.passwordInput = page.getByRole("textbox", { name: "Password" });
    this.usernameInput = page.getByRole("textbox", { name: "Username" });
  }
  async login({
    username = process.env.MY_USERNAME!,
    password = process.env.MY_PASSWORD!,
  } = {}) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
