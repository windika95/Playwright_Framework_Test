const {test,expect,request} = require('@playwright/test');
const BASE_URL = 'https://api.restful-api.dev';

test('GET Request',async ()=>{

    const apiContext = await request.newContext();
    const GETResponse = await apiContext.get(`${BASE_URL}/objects`);
    await expect(GETResponse).toBeOK();

    expect(GETResponse.status()).toBe(200);
    console.log("GET Status Code:",GETResponse.status());

// const response = await request.get(`/objects`);
// console.log(response);
// const GETRes = await response.json();
// expect(GETRes.ok).toBeTruthy();
// console.log(await response.json());


})