import { CartPage } from "../pages/CartPage";
import { LoginPage } from "../pages/LoginPage";
import { test as base } from "@playwright/test";
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';

type MyFixtures = {
    loginPage: LoginPage;
    cartPage: CartPage;
    homePage: HomePage;
    productPage: ProductPage;
};

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    cartPage: async ({ page }, use) => {
        const cartPage = new CartPage(page);
        await use(cartPage);
    },
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },
    productPage: async ({ page }, use) => {
        const productPage = new ProductPage(page);
        await use(productPage);
    },
});