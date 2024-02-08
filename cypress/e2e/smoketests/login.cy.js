
import data from "../../fixtures/logincreds.json"

import login from '../../pages/loginpage.po'
import dashboard from "../../pages/dashboardpage.po"
describe('Verify Login functionality', () => {

    
    before("launch app",()=>{
    
        cy.log("this section will run befoire all")

    })
     
    after("launch app",()=>{
    
        cy.log("this section will run after all")

    })
    beforeEach("launch app",()=>{
          
        //cy.viewport("ipad-mini")
        cy.visit('/web/index.php/auth/login')
        cy.get(login.logo()).should('be.visible')

    })

    afterEach("launch app",()=>{
          
        cy.log(Cypress.mocha.getRunner().suite.ctx.currentTest.title+"  completed")

    })

    // var username = "Admin"
    // var password = "admin123"

    var creds = {

        username : "Raju",
        password : "admin123"
    }

    var credentials = ["Admin", "admin123"]
    specify.only('Verify login with Valid credentials', () => {

   
        cy.xpath(login.usernameInput()).type(credentials[0])
        cy.get(login.passwordInput()).type(credentials[1])
        cy.get(login.submitbutton).click()
        cy.contains(dashboard.timeandworkcard()).should('be.visible')
        //or
        cy.contains(dashboard.dashboardmenu()).should('be.visible')

        //or

        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

        //or

        cy.url().should("include", "web/index.php/dashboard/index")


    
    })

    it('Verify Login with valid username and invalid password', () => {

        var username = "irujihrufh"
        var password ="jerbfehriugf"
        
        cy.get(login.usernameInput()).type(username)
        cy.get(login.passwordInput()).type('dfihifhri')
        cy.get(login.submitbutton).click() 

        cy.contains(login.loginerrormessage()).should('be.visible')
      
    
    })


    it('Verify login with invalid username and valid password', () => {
      cy.viewport("ipad-mini")
        
        cy.get(login.usernameInput()).type("fhireuhf")
        cy.get(login.passwordInput()).type('admin123')
        cy.get(login.submitbutton).click() 

        cy.contains(login.loginerrormessage()).should('be.visible')
    
    })

    it('Verify login with invalid unsernam and invalid password', () => {
        cy.viewport("iphone-3","landscape")
      
        cy.get(login.usernameInput()).type('juhreghgiuerh')
        cy.get(login.passwordInput()).type('ferungub')
        // cy.get(login.entercreds('username')).type("Admrguhruiin")
        // cy.get(login.entercreds('password')).type('dfihifhri')
        cy.get(login.submitbutton).click() 

        cy.contains(login.loginerrormessage()).should('be.visible')
    
    })
  })