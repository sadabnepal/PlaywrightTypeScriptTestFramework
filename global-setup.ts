import { chromium } from "@playwright/test";
import LoginPage from "./tests/pages/login.page";
import { expect } from "@playwright/test";
import { VendureAdmin } from "./tests/constants/users";

async function globalSetup() {

    const browser = await chromium.launch({ headless: true })
    const context = await browser.newContext();
    const page = await context.newPage();

    const loginPage = new LoginPage(page);
    await loginPage.openApp(`https://demo.vendure.io/admin/login`);
    await loginPage.loginToVendure(VendureAdmin.username, VendureAdmin.password);
    await expect(loginPage.dashboardHeader).toContainText("Dashboard");``
    await page.context().storageState({ path: "./loginAuth.json" });
    await browser.close();
}
export default globalSetup;