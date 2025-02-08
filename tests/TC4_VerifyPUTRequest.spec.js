const {test,expect,request} = require('@playwright/test');
const PostPayLoad = {name:"Hiran Munasinghe"};
const PUTData = {name:"Hiran Windika Munasinghe",data:1995};
const BASE_URL = 'https://api.restful-api.dev';

test('PUT Request',async ()=>{

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

    
    const PUTResponse = await apiContext.put(`${BASE_URL}/objects/${getID}`,
    {
        data:PUTData
    });

    expect(PUTResponse.ok()).toBeTruthy();

    const PUTResponseBody = await PUTResponse.json();
    console.log("POST Request Response: ",PUTResponseBody);

    const put_name = PUTResponseBody.name;
    console.log("Extracted POST Name: ", put_name);
    expect(put_name).toBeTruthy();
    
    const getupdatedID = PUTResponseBody.id;
    console.log("Extracted ID: ", getupdatedID);
    expect(getupdatedID).toBeTruthy();

    await new Promise(resolve => setTimeout(resolve, 2000));

    const GETReq = await apiContext.get(`${BASE_URL}/objects/${getupdatedID}`);
    expect(GETReq.ok()).toBeTruthy();

    const GETResponse = await GETReq.json();
    console.log("GET Response Validation:", GETResponse); 

    const get_name = GETResponse.name;
    console.log("Extracted GET Name: ", get_name);
    expect(get_name).toBeTruthy();

    expect(PUTResponseBody.name).toEqual(GETResponse.name);
    console.log(POSTResponseBody.name);
    console.log(PUTResponseBody.name);
    console.log(GETResponse.name);
    console.log(expect(PUTResponseBody.name).toEqual(GETResponse.name));

    const GETReqest = await apiContext.get(`${BASE_URL}/objects/${getID}`);
    expect(GETReqest.status()).toBe(200); 
    console.log("GET Status:", GETReqest.status());

});
