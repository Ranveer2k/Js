/// <reference types="cypress" />

describe ('Greenkart test suit' , () => {
  it('Searching for product and verifies the resullt count', () => {
    
    cy.viewport (550, 750)
    cy.visit ('https://rahulshettyacademy.com/seleniumPractise/#/')
       
        cy.wait(4000)
        cy.get('.product').should('have.length', 2)
        
        // parent-chil chaining

        cy.get ('.products').find ('.product').should('have.length', 2)


        
      })
    })
    
    

  it('this is our first test case' , () => {

  })