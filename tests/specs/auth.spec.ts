import { test } from "../pages/base.page";
import { expect } from "@playwright/test";

const loginUrl = "/admin/login";
const landingPageTitle = "Dashboard";

test.describe('heroku app demo', () => {

  test('should login with auth and logout', async ({ page, loginPage, baseURL }) => {
    await loginPage.openApp(`${baseURL + loginUrl}`);

    await expect(page).toHaveURL(`${baseURL}/admin/`);
    await expect(loginPage.homePageLogo).toHaveAttribute("src", "assets/logo-top.webp");
    await expect(loginPage.dashboardHeader).toContainText(landingPageTitle);
  });

})