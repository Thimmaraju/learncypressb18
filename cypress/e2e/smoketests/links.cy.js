
describe('Automation - Working With Links', function () {

  it('Cypress Test Case - Understanding Links and how to work with Links', function () {
    cy.visit('https://www.wikipedia.org/');

    cy.get("a").should('have.length', 356)

    cy.get('a').contains('Commons').click();


    cy.origin('https://commons.wikimedia.org', () => {

      cy.url().should("include", "wiki/Main_Page")

      cy.url().should("eq", "https://commons.wikimedia.org/wiki/Main_Page")

      cy.get('.mainpage-welcome-sitename').should('contain.text', 'Wikimedia Commons');

      //cy.get('a').should('have.length', 698)

      cy.get('a').its('length').then((elelength) => {
        var lengthcount = elelength
        cy.log(lengthcount)

       // expect(lengthcount).to.equal(698)

        expect(lengthcount).to.be.within(600, 700)
      })


      cy.get('.vector-menu-content-list').eq(6).find('a').its('length').then((elelength) => {
        cy.log(elelength)
        expect(elelength).to.equal(5)
      })

      
      cy.get('.mw-halign-right +div').last().then((txt) =>{

           var eletext = txt.text()

           cy.log(eletext)
           
      })

      cy.get('a[href="/wiki/Commons:Community_portal"] >span').then((raju) =>{

        var eletext2 = raju.text()

        cy.log(eletext2)
        
     })

      //  //****interview questions */
      // cy.get('a[href="/wiki/Commons:Community_portal"]>span').then((txt)=>{
         
      //   var linktext = txt.text()
      //   cy.log(linktext)

        

      // })

    })

    
  })

  it.only("interview question and answer", ()=>{

   cy.visit('https://www.flipkart.com/')

   cy.get('div._3sdu8W.emupdz > a:nth-child(2) > div > div > span > span').then((txt) =>{

    var eletext = txt.text()

    cy.log(eletext)
    cy.writeFile('cypress/fixtures/module1/test3.txt', eletext)

    cy.writeFile('cypress/fixtures/module1/flipcart2.json', { menutext: eletext });
    //expect(eletext).to.equal("Raju")
    
   })

  })

})

