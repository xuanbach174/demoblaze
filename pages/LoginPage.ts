import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    
    constructor(page: Page) {
        super(page);
    }

    private loginLinkLocator () {
        return this.page.locator('#login2');
    }

    private emailInputLocator () {
        return this.page.locator('#loginusername');
    }

    private passwordInputLocator () {
        return this.page.locator('#loginpassword');
    }

    private loginButtonLocator () {
        return this.page.getByRole('button', { name: 'Log in' });
    }

    private closeButtonInLoginModalLocator () {
        return this.page.getByRole('button', { name: 'Close' });
    }

    private welcomeUserLocator () {
        return this.page.locator('#nameofuser');
    }

    async login(email: string, password: string) {
        await this.loginLinkLocator().click();
        await this.emailInputLocator().fill(email);
        await this.passwordInputLocator().fill(password);
        await this.loginButtonLocator().click();
    }

    async loginWithInvalidCredentials(email: string, password: string) {
        await this.loginLinkLocator().click();
        await this.emailInputLocator().fill(email);
        await this.passwordInputLocator().fill(password);
        const dialogPromise = this.page.waitForEvent('dialog');
        await this.loginButtonLocator().click();
        return dialogPromise;
    }

    async loginWithEmptyUsername(password: string){
        await this.page.waitForLoadState("domcontentloaded");
        await this.loginLinkLocator().click();
        await this.emailInputLocator().fill('');
        await this.passwordInputLocator().fill(password);
        const dialogPromise = this.page.waitForEvent('dialog');
        const clickPromise = this.loginButtonLocator().click();
        const dialog = await dialogPromise;
        const message = dialog.message();
        await dialog.dismiss();
        await clickPromise;
        return message;
    }
    
    async verifyUserLoginSuccessfully(username: string) {
        await expect(this.welcomeUserLocator()).toContainText(username);
    }

    async verifyErrorMessageWithInvalidCredentials(errorMessage: string[], dialog){
        expect(errorMessage).toContain(dialog.message());
        await dialog.dismiss();
    }

    async verifyErrorMessageWithEmptyUsername(errorMessage: string, message: string){
        expect(message).toContain(errorMessage);
    }

    async verifyErrorMessageWithSQLInjection (errorMessage: string[], dialog){
        expect(errorMessage).toContain(dialog.message());
        await dialog.dismiss();
    }
}