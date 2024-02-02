describe('Verify google search', () => {


  it('verify searching some keywords', () => {
   
      cy.visit("https://www.google.com/")

      cy.get('#APjFqb').type("India{enter}")


  })
})