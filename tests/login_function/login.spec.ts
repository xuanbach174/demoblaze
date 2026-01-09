import { expect } from '@playwright/test';
import { test } from '../../fixtures/fixture';
import { testData } from './testData';
import { log } from 'node:console';

    test.describe('Test Login Function', () => {

        test.beforeEach(async ({ loginPage }) => {
            await loginPage.navigateTo(testData.login.url);
        })

        test('Login with valid credentials', async ({ loginPage }) => {
            await loginPage.login(testData.login.validUsername, testData.login.validPassword);
            await loginPage.verifyUserLoginSuccessfully(testData.login.validUsername);
        })

        test('Login with invalid credentials', async ({ loginPage }) => {
            const dialog = await loginPage.loginWithInvalidCredentials(testData.login.invalidUsername, testData.login.invalidPassword);
            await loginPage.verifyErrorMessageWithInvalidCredentials(testData.login.errorMessage, dialog);
        })

        test('Login with empty username', async ({loginPage})=>{
            const message = await loginPage.loginWithEmptyUsername(testData.login.invalidPassword);
            await loginPage.verifyErrorMessageWithEmptyUsername(testData.login.errorMessageWithEmptyUsername, message);
        })

        test ('Verify the application can handle SQL injection to bypass login', async ({loginPage}) => {
            const dialog = await loginPage.loginWithInvalidCredentials(testData.login.usernameSQLInjection, testData.login.passwordSQLInjection);
            await loginPage.verifyErrorMessageWithSQLInjection(testData.login.errorMessage, dialog);
        })

    })
