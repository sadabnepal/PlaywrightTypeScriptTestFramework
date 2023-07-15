import { expect, test } from "@playwright/test";
import mock_data from "../data/mock-data.json";
import { bufferToParsedString } from "../helper/formatter";

test.describe("mock demo", () => {

    test("should display mocked response", async ({ page }) => {
        await page.route("**/api/books", (route) => route.fulfill({ contentType: "application/json", body: JSON.stringify(mock_data) }))

        let data: any;

        page.on('request', async (request) => {
            if (request.url().includes("/api/books")) {
                request.response().then(async res => data = bufferToParsedString(await res?.body()))
            }
        })

        await page.goto("https://danube-web.shop/");
        expect(await page.locator(".shop-content>ul>li").count()).toEqual(1)
        expect(data).toEqual(mock_data);
    })

})