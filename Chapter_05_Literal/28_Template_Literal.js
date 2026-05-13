//template literal

let firstname = "Prrammod";
let fullname = `Hi ${firstname} Dutta`;
console.log(fullname);

let env = 'staging';
env = "prod";
const userID = 12345;
const apiUrl = `https://api-${env}.tekion.com/users/${userID}`;
console.log(apiUrl);

//Playwright
const rowIndex = 3;
const columnName = "email";
await page.locator(`[data-row="${rowIndex}"] [data-col="${columnName}"])`).click();

//logs
const testName = "Login Test";
const status = "Failed";
const duration = 2.3;
console.log(`[${status}] ${testName} completed in ${duration}s`)

const testCase = "checkout_flow";
const timestamp = Date.now();
await page.screenshot("path:" `screenshots/${timestamp}_${timestamp}.png`)

const userName = "Pramod";
const password = "Password";