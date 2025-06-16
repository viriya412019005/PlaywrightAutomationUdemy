import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto(
    "http://172.24.16.243:8080/coweb_reyner/faces/login_new.xhtml"
  );
  await page.locator('[id="loginForm:nik"]').click();
  await page.locator('[id="loginForm:nik"]').press("ControlOrMeta+c");
  await page.locator('[id="loginForm:nik"]').fill("2004007277");
  await page.locator('[id="loginForm:nik"]').press("Tab");
  await page.locator('[id="loginForm:password"]').fill("1");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("button", { name: "Ya" }).click();
  await page.getByRole("link", { name: "Ada 1 Komplain" }).click();
  await page.getByRole("link", { name: "25F0035727" }).click();
  await page.goto(
    "http://172.24.16.243:8080/coweb_reyner/faces/complaint/detail_complaint.xhtml?destination=0&ticketid=18258987&status=2"
  );
  await page.getByRole("button", { name: "Selesaikan" }).click();
  await page.getByRole("button", { name: "OK" }).click();
});
