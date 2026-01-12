import { expect } from '@playwright/test';
import { test } from '../../fixtures/fixture';
import { testData } from '../login_function/testData';
import { log } from 'node:console';
import { LoginPage } from '../../pages/LoginPage';
import { CartPage } from '../../pages/CartPage';
import { HomePage } from '../../pages/HomePage';
import { ProductPage } from '../../pages/ProductPage';

test.describe('Test Login Function', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigateTo(testData.login.url);
    await loginPage.login(testData.login.validUsername, testData.login.validPassword)
  });

  test('Verify Products list is empty at 1st time visit', async ({ cartPage }) => {
    await cartPage.accessCartScreen();
    await cartPage.verifyProductsListIsEmpty();
  });

  test('Verify users can not proceed to purchase when they let required fields be empty', async ({ cartPage }) => {
    await test.step('Access Cart Screen', async () => {
      await cartPage.accessCartScreen();
      await cartPage.verifyProductsListIsEmpty();
    });
    await test.step('verify error message when users purchase with empty required fields', async () => {
      await cartPage.clickPlaceOrderButton();
      await cartPage.verifyErrorMessageWithEmptyRequiredFields();
    })
  })

  test('Verify [Cart] screen synchronizes data when users are using multiple browsers', async ({ cartPage, productPage, homePage, browser }) => {
    let productName1: string | null;
    let productName2: string | null;
    await test.step('Use Browser 1 to add an item', async () => {
      await homePage.selectRandomProduct();
      productName1 = await productPage.addToCart();
      await homePage.goto();
      console.log(productName1);
    });

    await test.step('Use Browser 2 to add an item', async () => {
      const context2 = await browser.newContext();
      const page2 = await context2.newPage();
      const login2 = new LoginPage(page2);
      const homePage2 = new HomePage(page2);
      const cartPage2 = new CartPage(page2);
      const productPage2 = new ProductPage(page2);
      await login2.navigateTo(testData.login.url);
      await login2.login(testData.login.validUsername, testData.login.validPassword)
      await homePage2.selectRandomProduct()
      productName2 = await productPage2.addToCart();
      await homePage.goto();
      console.log(productName2);
    });

    await test.step('Verify Product List in Browser 1 contains all added items', async () => {
      productName1 = productName1?.trim() ?? null;
      productName2 = productName2?.trim() ?? null;
      await cartPage.accessCartScreen();
      await cartPage.verifyProductListContainsAllItemsFromOtherBrowsers(productName1, productName2);
      await cartPage.deleteAllItems();
    });

  });

})
