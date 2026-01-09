import { expect } from '@playwright/test';
import { test } from '../../fixtures/fixture';
import { testData } from '../login_function/testData';
import { log } from 'node:console';
import { LoginPage } from '../../pages/LoginPage';
import { CartPage } from '../../pages/CartPage';

test.describe('Test Login Function', () => {
      test.beforeEach(async ({ loginPage }) => {
        await loginPage.navigateTo(testData.login.url);
        await loginPage.login(testData.login.validUsername, testData.login.validPassword)
      });
    
      test('Verify Products list is empty at 1st time visit', async ({ cartPage }) => {
        await cartPage.accessCartScreen();
        await cartPage.verifyProductsListIsEmpty();
      });

      test('Verify users can not proceed to purchase when they let required fields be empty', async({cartPage}) =>{
        await test.step('Access Cart Screen', async () => {
            await cartPage.accessCartScreen();
            await cartPage.verifyProductsListIsEmpty();
        });
        await test.step('verify error message when users purchase with empty required fields', async()=>{
            await cartPage.clickPlaceOrderButton();
            await cartPage.verifyErrorMessageWithEmptyRequiredFields();
        })
      })

      test('Verify [Cart] screen synchronizes data when users are using multiple browsers', async () => {
        
      });

})
