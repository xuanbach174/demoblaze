import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductPage extends BasePage {
    readonly addToCartButton: Locator;

    constructor(page: Page) {
        super(page);
        this.addToCartButton = page.locator('.btn-success');
    }

    private itemName (){
        return this.page.locator('.row .name');
    }

    async addToCart() {
        const dialogPromise = this.page.waitForEvent('dialog');
        const itemName = await this.itemName().textContent();
        await this.addToCartButton.click();
        const dialog = await dialogPromise;
        await dialog.accept();
        return itemName
    }
}
