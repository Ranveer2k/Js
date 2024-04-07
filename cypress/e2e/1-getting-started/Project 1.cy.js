// reference type="cypress" />

describe('google test suit', () => {
    it('Searching for product and verifies the result count', () => {
        cy.viewport(550, 750);
        cy.visit('https://www.google.com/');

        cy.wait(4000);
        cy.get('.gLFyf').type('.hello').type('{enter}'); // Type the search query and press Enter

        cy.get('.product').should('have.length.greaterThan', 0.5); // Verifying search results are present
    });
});
