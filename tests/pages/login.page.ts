import { Page } from "@playwright/test";

export default class LoginPage {

    constructor(public page: Page) { }

    private get usernameInput() { return this.page.getByPlaceholder("Username") }
    private get passwordInput() { return this.page.getByPlaceholder("Password") }
    private get loginButton() { return this.page.getByText("Log in", { exact: true }) }

    get homePageLogo() { return this.page.locator(".logo") }
    get dashboardHeader() { return this.page.getByTitle("breadcrumb.dashboard") }
    get loginTitle() { return this.page.locator(".login-title") }

    async openApp(url: string) {
        await this.page.goto(url);
    }

    async loginToVendure(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.type(password);
        await this.loginButton.click();
    }

}