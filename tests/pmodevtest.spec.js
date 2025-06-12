import { test, expect } from "@playwright/test";

//Test Happy Login
test("login and check for NARUJI", async ({ page }) => {
  await page.goto("https://itpmodev.indomaret.co.id/pmowebws/login.xhtml");
  await page.getByRole("textbox", { name: "NIK" }).fill("0992000133");
  await page.getByRole("textbox", { name: "Password ESS" }).fill("123");
  await page.getByRole("button", { name: "LOGIN" }).click();

  // Expect 'NARUJI' to be visible on the page
  await expect(page.getByText("NARUJI")).toBeVisible();
});

//test negatif
test.only("test", async ({ page }) => {
  await page.goto("https://itpmodev.indomaret.co.id/pmowebws/login.xhtml");
  await page.getByRole("textbox", { name: "NIK" }).click();
  await page.getByRole("textbox", { name: "NIK" }).fill("0992000133");
  await page.getByRole("textbox", { name: "Password ESS" }).click();
  await page.getByRole("textbox", { name: "Password ESS" }).fill("");
  await page.getByRole("button", { name: "LOGIN" }).click();
  await expect(
    page
      .locator("div")
      .filter({ hasText: /^ErrorIncorrect Username \/ Password\.$/ })
      .locator("span")
  ).toBeVisible();
});
