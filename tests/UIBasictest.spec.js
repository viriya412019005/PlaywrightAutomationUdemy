const {test, expect} = require('@playwright/test');


test.only('Browser context Playwright test', async ({ browser }) => {
    // chrome - plugins/ cookies
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://itpmodev.indomaret.co.id/pmowebws/login.xhtml');
    console.log(await page.title());

    //css
    await page.locator("input[id='j_idt11:username']").fill('0993000380');
    await page.locator("input[id='j_idt11:password']").fill('123');
    await page.locator("button[id='j_idt11:login'] span[class='ui-button-text ui-c']").click();
});

test('Page Playwright test', async ({ page }) => {
    await page.goto('http://google.com');
    console.log(await page.title());
    await expect(await page.title()).toContain('Google');
});