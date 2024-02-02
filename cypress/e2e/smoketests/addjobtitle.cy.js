import data from "../../fixtures/Admin/addjobtitle.json"
describe('Verify Add Job title functionality', () => {
    it('Verify adding job title', () => {
     

        cy.visit(`iregnvoier`)

        //cy.wait(20000)

        cy.get('input[placeholder="Username"]', {timeout:40000}).type(Cypress.env('username'))
        cy.get('input[name="password"]').type(Cypress.env("password"))
        cy.get('button[type="submit"]').click()
        cy.contains('Time at Work').should('be.visible')
        //or
        cy.contains('Dashboard').should('be.visible')

       cy.contains('Admin').click()
       cy.contains('Job').click()
       cy.contains('Job Titles').click()
       cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()

       let randomtext = (Math.random() + 1).toString(36).substring(7);
       cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > input').type(data.jobtitle+randomtext)
       cy.get('textarea[placeholder="Type description here"]').type(data.jobdescription)
       cy.get('button[type="submit"]').click()
       cy.contains('Successfully Saved').should("be.visible")
    })
  })