import { Page } from 'playwright';
import { LoginPage } from '../pages/LoginPage';
import { testData } from './testData';

async function loginFlow(page: Page) {
    const loginPage = new LoginPage(page);

    // 1. Navigate to the page
    await loginPage.navigateTo(testData.login.url);

    // 2. Perform login
    // Using the test account provided in the previous tests
    await loginPage.login(testData.login.validUsername, testData.login.validPassword);

    // 3. Optional: Wait for the welcome message to ensure login completed
    await loginPage.verifyUserLoginSuccessfully(testData.login.validUsername);
}

export { loginFlow };
