import {test} from "./test-setup";
import {LoginPage} from "../page-objects/loginPage/login.page";
import {loginData} from "../test-data/loginData";

test.describe("Login Tests",()=>
{
    let loginPage: LoginPage
    test.beforeEach(async ({page})=>{
        loginPage = new LoginPage(page)
        await loginPage.visitPage()
    })
    test("Standard User login",async ()=>
    {
        await loginPage.doLogin(loginData.validUser.username,loginData.validUser.password)
    })
    test("Invalid User login", async ()=>{
        await loginPage.doLogin(loginData.wrongPassword.username,loginData.wrongPassword.password)
    })
})