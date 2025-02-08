#For GET Request 
npx playwright test tests/TC1_VerifyGETRequest.spec.js --headed

#For POST Request 
npx playwright test tests/TC2_VerifyPOSTRequest.spec.js --headed

#For Verify POST Attribute Request 
npx playwright test tests/TC3_VerifyPostRequestAttribute.spec.js --headed

#For PUT Request 
npx playwright test tests/TC4_VerifyPUTRequest.spec.js --headed 

#For DELETE Request 
npx playwright test tests/TC5_VerifyDELETERequest.spec.js --headed