const {test,expect,request} = require('@playwright/test');
const BASE_URL = 'https://api.restful-api.dev';
const PostPayLoad = {name:"Hiran Munasinghe"}

test('POST Request',async ()=>{

    const apiContext = await request.newContext();
    const POSTResponse = await apiContext.post(`${BASE_URL}/objects`,
    {
        data:PostPayLoad
    });

    expect(POSTResponse).toBeOK();

    expect(POSTResponse.status()).toBe(200);
    console.log("APIs return a 200 status code instead of 201 Created for successful creation:", POSTResponse.status());

});
