
const availablefixtures = [
  {
    "name": "datadriven/register",
    "context": "Raju"
  },
  {
    "name": "datadriven/ganesh",
    "context": "2"
  },
  {
    "name": "datadriven/mahalakshmi",
    "context": "3"
  }
]



describe("verify addemployee functionality", function () {

  availablefixtures.forEach((afixture) => {
    describe(afixture.context, () => {
      //Mostly used for Setup Part
      before(function () {
        cy.fixture(afixture.name).then(function (data) {
          this.data = data;
        })
      })

      it('Cypress Test Case - add employee', function () {
      
        cy.visit('https://shop.demoqa.com/my-account/')
        cy.get('#reg_username').type(this.data.username)
        cy.get('#reg_email').type(this.data.emailaddress)
        cy.get('#reg_password').type(this.data.weakpassword)
        cy.get('.woocommerce-Button').should("be.disabled")

        //or

        cy.get('.woocommerce-Button').should("have.attr", "disabled", "disabled")
        // cy.get('#reg_password').clear()
        // cy.get('#reg_password').type(this.data.strongpassword)
        cy.get('#reg_password').clear().type(this.data.strongpassword)

        cy.wait(10000)
        cy.get('.woocommerce-Button').click()


        cy.get('#username').should("have.attr", "value", this.data.username)
        //or

        cy.get('#username').should("have.value", this.data.username)


      })

    })
  })
})