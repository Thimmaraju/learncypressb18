describe('Radio button', () => {
    it.only('Radio box ', () => {

      cy.visit('https://register.rediff.com/register/register.php')

      cy.get('input[value="f"]').check().should('be.checked')

      cy.wait(2000)

      cy.get('input[value="m"]').should('not.be.checked')


      cy.get('input[value="m"]').check().should('be.checked')



    })


  })