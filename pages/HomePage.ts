import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    private productLinks() {
        return this.page.locator('.card-title a');
    }

    async goto() {
        await this.navigateTo(process.env.API_BASE_URL || "https://www.demoblaze.com/");
    }

    async selectRandomProduct() {
        await this.productLinks().first().waitFor();
        const count = await this.productLinks().count();
        if (count === 0) throw new Error('No products found');
        const randomIndex = Math.floor(Math.random() * count);
        await this.productLinks().nth(randomIndex).click();
    }
}
