const {test, expect} = require('@playwright/test');

test('Browser context Playwright test', async ({ browser }) => {
    // chrome - plugins/ cookies
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator("#username")
    const signIn = page.locator("#signInBtn");
    const cardTitles = page.locator(".card-body a");
    await page.goto('http://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());

    //css
    await userName.fill('rahulshetty');
    await page.locator("[type='password']").fill('learning');
    await signIn.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");

    //type-fill
    await userName.fill('');
    await userName.fill('rahulshettyacademy');
    await signIn.click();
    console.log(await cardTitles.first().textContent());
    console.log(await cardTitles.nth(1).textContent());
    const allCardTitles = await cardTitles.allTextContents();
    console.log(allCardTitles);
});

test('Page Playwright test', async ({ page }) => {
    await page.goto('http://rahulshettyacademy.com/loginpagePractise/');
    const userName = page.locator("#username");
    const signIn = page.locator("#signInBtn");
    const documentLink = page.locator("[href*='documents-request']");
    const dropdown = page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();
    console.log(await page.locator(".radiotextsty").last().isChecked());
    await expect(page.locator(".radiotextsty").last()).toBeChecked();
    await page.locator("#terms").click();
    await expect(page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    // await expect(page.locator("#terms")).not.toBeChecked();
    expect(await page.locator("#terms").isChecked()).toBeFalsy();
    await expect(documentLink).toHaveAttribute('class', 'blinkingText');
});

test.only("Handling Child Windows",async ({browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://rahulshettyacademy.com/loginpagePractise/');
    const documentLink = page.locator("[href*='documents-request']");

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        documentLink.click()
    ]);

    const text = await newPage.locator(".red").textContent();
    const arrayText = text.split("@");
    const domain = arrayText[1].split(' ')[0];
    console.log(domain);
    await page.locator("#username").fill(domain);
    console.log(await page.locator("#username").textContent());
    await page.pause();
})