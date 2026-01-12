import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    private addToCartButton() {
        return this.page.locator('.btn-success');
    }

    private itemName() {
        return this.page.locator('.row .name');
    }

    async addToCart() {
        const dialogPromise = this.page.waitForEvent('dialog');
        const itemName = await this.itemName().textContent();
        await this.addToCartButton().click();
        const dialog = await dialogPromise;
        await dialog.accept();
        return itemName
    }
}
