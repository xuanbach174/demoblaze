import { BasePage } from "./BasePage";
import { Page, expect } from "@playwright/test";

export class CartPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    private cartLinkLocator(){
        return this.page.getByRole('link', { name: 'Cart'});
    }

    private productListItems(){
        return this.page.locator('.success');
    }

    private placeOrderButton(){
        return this.page.getByRole('button',{name:'Place Order'});
    }

    private purchaseButton(){
        return this.page.getByRole('button', {name:'purchase'});
    }

    async accessCartScreen(){
        await this.cartLinkLocator().click();
    }

    async verifyProductsListIsEmpty(){
        await expect(this.productListItems()).toHaveCount(0);
    }

    async clickPlaceOrderButton(){
        await this.placeOrderButton().click();
    }

    async clickPurchaseButton(){
        await this.purchaseButton().click();
    }

    async verifyErrorMessageWithEmptyRequiredFields(){
        const dialogPromise = this.page.waitForEvent('dialog');
        const clickPromise = this.purchaseButton().click();
        const dialog = await dialogPromise;
        const message = dialog.message();
        await dialog.dismiss();
        await clickPromise;
        return message;
    }
}