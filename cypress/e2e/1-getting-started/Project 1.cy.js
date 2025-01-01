// reference type="cypress" />

describe ('google test suit' , () => {
    it('Searching for product and verifies the resullt count', () => {


        cy.viewport (550, 750)
        cy.visit ('https://www.google.com/')
     
           cy.wait(4000)
           cy.get('.gLFyf').type('.hello')
           
   
           // parent chil chaining
   


    });



});
