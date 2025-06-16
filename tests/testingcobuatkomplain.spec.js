import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto(
    "http://172.24.16.243:8080/coweb_reyner/faces/login_new.xhtml"
  );
  await page.locator('[id="loginForm\\:nik"]').click();
  await page.locator('[id="loginForm\\:nik"]').fill("20110003221");
  await page.locator('[id="loginForm\\:password"]').click();
  await page.locator('[id="loginForm\\:nik"]').click();
  await page.locator('[id="loginForm\\:nik"]').fill("2011000322");
  await page.locator('[id="loginForm\\:password"]').click();
  await page.locator('[id="loginForm\\:password"]').fill("1");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("button", { name: "Ya" }).click();
  await page.getByRole("link", { name: "Buat Komplain", exact: true }).click();
  await page.locator('[id="formId\\:complaintType"] span').click();
  await page.getByRole("option", { name: "Toko Indomaret" }).click();
  await page.locator('button[name="formId\\:j_idt66"]').click();
  await page
    .locator('iframe[title="Pilih Masalah"]')
    .contentFrame()
    .getByRole("textbox", { name: "Filter by Pelaksana" })
    .click();
  await page
    .locator('iframe[title="Pilih Masalah"]')
    .contentFrame()
    .getByRole("textbox", { name: "Filter by Pelaksana" })
    .click();
  await page
    .locator('iframe[title="Pilih Masalah"]')
    .contentFrame()
    .getByRole("textbox", { name: "Filter by Pelaksana" })
    .fill("edp");
  await page
    .locator('iframe[title="Pilih Masalah"]')
    .contentFrame()
    .getByRole("textbox", { name: "Filter by Pelaksana" })
    .press("Enter");
  await page
    .locator('iframe[title="Pilih Masalah"]')
    .contentFrame()
    .locator('button[name="j_idt5:tableId:9:selectBtn"]')
    .click();
  await page.getByRole("textbox", { name: "Deskripsi Masalah*" }).click();
  await page
    .getByRole("textbox", { name: "Deskripsi Masalah*" })
    .fill("testing 3 dhika");
  await page
    .locator("#j_idt32 div")
    .filter({
      hasText:
        "HomeKomplainBuat Baru KomplainInformasi User Lokasi Asal KALIBARU 06KALIBARU",
    })
    .click();
  await page.getByRole("button", { name: "Simpan" }).click();
  await page.getByRole("button", { name: "OK" }).click();
});
