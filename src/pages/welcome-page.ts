import { Page, Locator } from "@playwright/test";

export class WelcomePage {
  readonly welcomeMessage: Locator;

  constructor(public readonly page: Page) {
    this.welcomeMessage = page.getByText(
      `Welcome, ${process.env.MY_USERNAME!}!`,
    );
  }
}
