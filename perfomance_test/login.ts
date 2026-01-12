import { Page } from 'playwright';
import { LoginPage } from '../pages/LoginPage';
import { testData } from './testData';

async function loginFlow(page: Page) {
    const loginPage = new LoginPage(page);
    await loginPage.navigateTo(testData.login.url);
    await loginPage.login(testData.login.validUsername, testData.login.validPassword);
    await loginPage.verifyUserLoginSuccessfully(testData.login.validUsername);
}

export { loginFlow };
