import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page'
import loginPage from '../pageobjects/login.page'
import profilePage from '../pageobjects/profile.page'
import signupPage from '../pageobjects/signup.page'
import cartPage from '../pageobjects/cart.page'
import { generateFakeUser } from '../utils/userGenerator';

describe('Create a new account', () => {

    it('should create a new account with valid information', async () => {

        const user = generateFakeUser()

        homePage.openMenu('profile')
        await loginPage.signUpButton.click()
        await signupPage.create(user)
        await homePage.openCart()
        await cartPage.goBack()
        await homePage.openMenu('profile')
        expect(await profilePage.profileName(`${user.firstName} ${user.lastName}`)).toBeDisplayed()
    })

})
