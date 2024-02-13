describe('Drag and Drop', () => {
    it('passes', () => {
      cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop')

      //cy.get('.sourceitem').drag('.targetitem')

   



      //cy.get('#menu-hamburger').drag('#plate-items')


      const dataTransfer = new DataTransfer();

      cy.get('#menu-fried-chicken').trigger('dragstart',{
       
       dataTransfer
     })
   
     cy.get('#plate-items').trigger('drop',{
   
       dataTransfer
     })

     cy.get('#menu-hamburger').trigger('dragstart',{
    
        dataTransfer
      })
    
      cy.get('#plate-items').trigger('drop',{
    
        dataTransfer
      })

      cy.get('#menu-ice-cream').trigger('dragstart',{
    
        dataTransfer
      })
    
      cy.get('#plate-items').trigger('drop',{
    
        dataTransfer
      })
     // cy.get('#menu-ice-cream').drag('#plate-items')

    })
  })