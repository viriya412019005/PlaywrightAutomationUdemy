const {test, expect} = require('@playwright/test');

test('Client App Login', async ({ page }) => {
    const productName  = "ADIDAS ORIGINAL";
    const products = page.locator(".card-body");
    await page.goto('https://rahulshettyacademy.com/client');
    await page.locator('#userEmail').fill('anshika@gmail.com');
    await page.locator('#userPassword').fill('Iamking@000');
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
    const count = await products.count();
    for(let i = 0; i < count; ++i) {
        if(await products.nth(i).locator("b").textContent() === productName) {
            await products.nth(i).locator("text=Add To Cart").click();
            break;
        }
    }
    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").first().waitFor();
    const boolean = await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
    expect(boolean).toBeTruthy();

    await page.locator("text=Checkout").click();
    await page.locator("[placeholder*='Country']").pressSequentially('ind');

    const dropdown = page.locator(".ta-results");
    await dropdown.waitFor();

    const optionCount = await dropdown.locator("button").count();
    for(let i = 0; i< optionCount; ++i) {
        const text = await dropdown.locator("button").nth(i).textContent();
        if(text === " Indonesia") {
            await dropdown.locator("button").nth(i).click();
            break;
        }
    }

    await page.pause(); // Pause to inspect the page

});