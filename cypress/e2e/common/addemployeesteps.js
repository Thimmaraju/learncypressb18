import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import dashboard from "../../pages/dashboardpage.po";
import addemployee from "../../pages/addemployeepage.po";

And('User clicks on PIM', () => {

    cy.contains(dashboard.pimmenu()).click()

})

And('User clicks on Add employee sub menu', () => {

    cy.contains(addemployee.addemployeesubmenu()).click()

})

And('User Enter firstname {string} and lastname as {string}', (firstname, lastname) => {

    cy.get(addemployee.firstnameInput()).type(firstname)
    cy.get(addemployee.lastbnameInput()).type(lastname)


})

And('User clicks on save button', () => {

    cy.get(addemployee.savebutton()).click()

})

Then('User should get successfully saved message', () => {

    cy.contains(addemployee.successmessage()).should("be.visible")

})