import { test } from "../pages/base.page";
import { expect } from "@playwright/test";

const loginUrl = "/admin/login";
const pageTitle = "Vendure";
const landingPageTitle = "Dashboard";

test.describe('Vendure app demo', () => {

  test.beforeEach(async ({ baseURL, loginPage }) => {
    await loginPage.openApp(`${baseURL + loginUrl}`);
  });

  test('should validate title and url', async ({ page, baseURL }) => {
    await expect(page).toHaveTitle(pageTitle);
    await expect(page).toHaveURL(`${baseURL}/admin/`);
  });

  test('should login and logout', async ({ baseURL, loginPage, page }) => {
    await expect(page).toHaveURL(`${baseURL}/admin/`);
    await expect(loginPage.homePageLogo).toHaveAttribute("src", "assets/logo-top.webp");
    await expect(loginPage.dashboardHeader).toContainText(landingPageTitle);
  });

  test.fixme('should skip fixme', async ({ page }) => {
    await expect(page).toHaveTitle(pageTitle);
  });

  test('should skip conditional', async ({ page, browserName }) => {
    test.skip(browserName === "chromium", "runs only when runs in chrome");
    await expect(page).toHaveTitle(pageTitle);
  });

})