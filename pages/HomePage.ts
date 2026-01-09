import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
    readonly productLinks: Locator;

    constructor(page: Page) {
        super(page);
        this.productLinks = page.locator('.card-title a');
    }

    async goto() {
        await this.navigateTo('/');
    }

    async selectRandomProduct() {
        await this.productLinks.first().waitFor();
        const count = await this.productLinks.count();
        if (count === 0) throw new Error('No products found');
        const randomIndex = Math.floor(Math.random() * count);
        await this.productLinks.nth(randomIndex).click();
    }
}
