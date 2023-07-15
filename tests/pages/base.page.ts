import { test as base } from "@playwright/test";
import LoginPage from "./login.page";


type pages = {
    loginPage: LoginPage;
}
export const test = base.extend<pages>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    }
})