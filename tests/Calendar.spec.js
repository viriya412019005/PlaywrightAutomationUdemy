const { test, expect } = require("@playwright/test");

test("Calendar Validation", async ({ page }) => {
  const monthNumber = "6";
  const date = "15";
  const year = "2027";
  const expectedList = [monthNumber, date, year];
  await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
  await page.locator(".react-date-picker__inputGroup").click();

  // klik dua kali untuk membuka tampilan tahun
  await page.locator(".react-calendar__navigation__label").click();
  await page.locator(".react-calendar__navigation__label").click();

  // klik tahun
  await page.getByText(year, { exact: true }).click();

  // klik bulan (0-indexed)
  await page
    .locator(".react-calendar__year-view__months__month")
    .nth(Number(monthNumber) - 1)
    .click();

  // klik tanggal
  await page.locator(`//abbr[text()="${date}"]`).click();
  const inputs = await page.locator(".react-date-picker__inputGroup input");
  for (let index = 0; index < inputs.length; index++) {
    const value = inputs[index].getAttribute("value");
    expect(value).toEqual(expectedList[index]);
  }
});
