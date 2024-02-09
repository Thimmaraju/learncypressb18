describe('check box', () => {
    it.only('checkbox', () => {

      cy.visit('https://register.rediff.com/register/register.php')

      cy.get('.nomargin').check().should('be.checked')

      cy.wait(2000)

      cy.get('.nomargin').uncheck().should('not.be.checked')



    })


    it("check box 2", ()=>{


        cy.visit('https://bit.ly/3vswFBe')

        cy.get('input[type="checkbox"]').eq(1).check()

        cy.wait(2000)

        cy.get('input[type="checkbox"]').uncheck()

        cy.wait(3000)

        cy.get('input[type="checkbox"]').check(["HTML", "Javascript"])

        cy.wait(2000)
        cy.get('input[type="checkbox"]').uncheck(["HTML", "Javascript"])
    })
  })