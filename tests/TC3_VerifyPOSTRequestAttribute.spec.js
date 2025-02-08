const {test,expect,request} = require('@playwright/test');
const PostPayLoad = {name:"Hiran Munasinghe"};
const BASE_URL = 'https://api.restful-api.dev';

test('Verify POST Request Attribute',async ()=>{

    const apiContext = await request.newContext();
    const POSTResponse = await apiContext.post(`${BASE_URL}/objects`,
    {
        data:PostPayLoad
    });

    expect(POSTResponse.ok()).toBeTruthy();

    const POSTResponseBody = await POSTResponse.json();
    console.log("POST Request Response: ",POSTResponseBody);

    const post_name = POSTResponseBody.name;
    console.log("Extracted POST Name: ", post_name);
    expect(post_name).toBeTruthy();
    
    const getID = POSTResponseBody.id;
    console.log("Extracted ID: ", getID);
    expect(getID).toBeTruthy();

    await new Promise(resolve => setTimeout(resolve, 2000));

    const GETReq = await apiContext.get(`${BASE_URL}/objects/${getID}`);
    //console.log(GETReq);
    expect(GETReq.ok).toBeTruthy();

    const GETResponse = await GETReq.json();
    console.log("GET Response Validation:", GETResponse); 

    const get_name = GETResponse.name;
    console.log("Extracted GET Name: ", get_name);
    expect(get_name).toBeTruthy();

    //expect(POSTResponseBody.name).toEqual(GETResponse.name);
    console.log(POSTResponseBody.name);
    console.log(GETResponse.name);
    //console.log(expect(POSTResponseBody.name).toEqual(GETResponse.name));

    expect(POSTResponse.status()).toBe(200);
    console.log("APIs return a 200 OK status code instead of 201 Created for successful creation:", POSTResponse.status());

});
