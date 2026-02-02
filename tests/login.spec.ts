import {test} from "./test-setup";
import {LoginPage} from "../page-objects/loginPage/login.page";
import {loginData} from "../test-data/loginData";

test.describe("Login Tests",()=>
{
    test("Standard User login",async ({page})=>
    {
        let loginPage = new LoginPage(page)
        await loginPage.visitPage()
        await loginPage.doLogin(loginData.validUser.username,loginData.validUser.password)
    })
})