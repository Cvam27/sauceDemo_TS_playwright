import {Page, Locator} from '@playwright/test'

export class LoginPage {
    page: Page
    usernameInput : Locator
    passwordInput : Locator
    loginButton : Locator

    constructor(page:Page) {
        this.page = page
        this.usernameInput = page.getByTestId('username');
        this.passwordInput = page.getByTestId('password')
        this.loginButton = page.getByTestId('login-button')
    }

    async visitPage(){
        await this.page.goto('https://www.saucedemo.com/')
    }
    async doLogin(username: string, password: string){
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginButton.click()
    }
}