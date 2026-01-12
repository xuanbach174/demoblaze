import { BasePage } from "./BasePage";
import { Page, expect } from "@playwright/test";

export class CartPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    private cartLinkLocator() {
        return this.page.getByRole('link', { name: 'Cart' });
    }

    private productListItems() {
        return this.page.locator('.success');
    }

    private placeOrderButton() {
        return this.page.getByRole('button', { name: 'Place Order' });
    }

    private purchaseButton() {
        return this.page.getByRole('button', { name: 'purchase' });
    }

    private deleteLinkFirst() {
        return this.page.getByRole('link', { name: 'Delete' }).nth(0);
    }

    async accessCartScreen() {
        await this.cartLinkLocator().click();
    }

    async verifyProductsListIsEmpty() {
        await expect(this.productListItems()).toHaveCount(0);
    }

    async clickPlaceOrderButton() {
        await this.placeOrderButton().click();
    }

    async clickPurchaseButton() {
        await this.purchaseButton().click();
    }

    async verifyErrorMessageWithEmptyRequiredFields() {
        const dialogPromise = this.page.waitForEvent('dialog');
        const clickPromise = this.purchaseButton().click();
        const dialog = await dialogPromise;
        const message = dialog.message();
        await dialog.dismiss();
        await clickPromise;
        return message;
    }

    async verifyProductListContainsAllItemsFromOtherBrowsers(product1: string | null, product2: string | null) {
        await this.page.locator('.success:nth-child(1)').waitFor({ state: 'visible', timeout: 5000 })
        const productsList = await this.productListItems().locator('td:nth-child(2)').allInnerTexts();
        expect(productsList).toContain(product1);
        expect(productsList).toContain(product2);
    }

    async deleteAllItems() {
        while (await this.productListItems().nth(0).count() > 0) {
            await this.deleteLinkFirst().click();
            await this.productListItems().nth(0).waitFor({ state: 'hidden' });
        }
    }
}