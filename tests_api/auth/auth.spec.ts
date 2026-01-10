import { expect } from '@playwright/test';
import { test } from '../../fixtures/api_fixture';
import { apiTestData } from '../testData';

test.describe('Test Login with API', () => {
    test('Login with valid credentials', async ({ authService }) => {
        const response = await authService.login(apiTestData.auth.validCredentials);
        
        expect(response.status()).toBe(200);
        
        const responseData = await response.json();
        console.log(responseData);
    });
});
