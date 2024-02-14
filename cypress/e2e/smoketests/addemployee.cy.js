import logindata from '../../fixtures/logincreds.json'
import addemployeedata from '../../fixtures/PIM/addemployee.json'

import login from '../../pages/loginpage.po'
import dashboard from '../../pages/dashboardpage.po'
import addemployee from '../../pages/addemployeepage.po'

describe("Verify Add employee functiobality", function(){

 var   creds = {
        username : "Admin",
        password: "admin123"
    }

 var   menuitems = {
        menu1: "Admin",
        menu2: "PIM",
        menu3: "Leave",
        menu4: "Time",
        menu5: "Recruitment",
        menu6: "My Info",
        menu7: "Performance",
        menu8: "Dashboard"
    }

 var menus = ["Admin", "PIM"]

    it.only("verify add employee with mandatory details", function(){

     
        cy.visit('/web/index.php/auth/login')
        login.loginwithcreds(logindata.username, logindata.password)
        cy.contains(dashboard.timeandworkcard()).should('be.visible')
        //or
        cy.contains(dashboard.dashboardmenu()).should('be.visible')

        for(let item in menuitems){

            cy.contains(menuitems[item]).should('be.visible')

        }


        for(let i of menus){
    
            cy.contains(i).should('be.visible')

        }
        
       cy.addemployee()

        cy.contains(addemployee.successmessage()).should("be.visible")
    })

    it("verify add employee mandoatory fields", function(){

     
        cy.visit('/web/index.php/auth/login')
        cy.get('input[placeholder="Username"]').type("Admin")
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
        cy.contains('Time at Work').should('be.visible')
        //or
        cy.contains('Dashboard').should('be.visible')

        cy.contains('PIM').click()

        cy.contains('Add Employee').click()

        cy.get('button[type="submit"]').click()

       cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.orangehrm-employee-container > div.orangehrm-employee-form > div:nth-child(1) > div.oxd-grid-1.orangehrm-full-width-grid > div > div > div.--name-grouped-field > div:nth-child(1) > span').should("be.visible")
       cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.orangehrm-employee-container > div.orangehrm-employee-form > div:nth-child(1) > div.oxd-grid-1.orangehrm-full-width-grid > div > div > div.--name-grouped-field > div:nth-child(3) > span').should("be.visible")
    })
})