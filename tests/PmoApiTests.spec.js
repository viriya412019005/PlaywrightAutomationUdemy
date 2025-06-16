const { test, expect, request } = require("@playwright/test");
// const loginPayload = {userEmail:"", userName:""};

test.beforeAll(async () => {
  const apiContext = await request.newContext();
  const loginResponse = await apiContext.post("", {
    data: loginPayload,
  }); //
  expect(loginResponse.ok()).toBeTruthy();
  const loginResponseJson = await loginResponse.json();
  const token = await loginResponse.token;
  console.log(token);
});
