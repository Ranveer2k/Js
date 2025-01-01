describe('OrangeHRM Login Tests', () => {
  const username = 'Admin';
  const password = 'admin123';
  const usernamePasswordLocator='.oxd-input'

  beforeEach(() => {
    // Visit the base URL (no need to specify the full URL)
    cy.visit("/login");
  });

  it('should display the login page elements', () => {
    // Verify that the input fields and login button are visible
    cy.get('.oxd-input').should('have.length', 2); // Username and Password fields
    cy.get('.orangehrm-login-button').should('be.visible'); // Login button
  });

  it('should login successfully with valid credentials', () => {
    // Enter valid username and password
    cy.get(this.usernamePasswordLocator).eq(0).type(username); // Username field
    cy.get('.oxd-input').eq(1).type(password); // Password field
    cy.get('.orangehrm-login-button').click(); // Login button

    // Verify successful login by checking the URL or dashboard presence
    cy.url().should('not.include', '/auth/login');
    cy.get('.oxd-topbar-header-title').should('contain', 'Dashboard');
  });

  it('should display error message for invalid credentials', () => {
    // Enter invalid username and password
    cy.get('.oxd-input.oxd-input--active').eq(0).type('invalidUser');
    cy.get('.oxd-input.oxd-input--active').eq(1).type('invalidPass');
    cy.get('.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button').click();

    // Verify error message is displayed
    cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
  });

  it('should display validation error for empty fields', () => {
    // Attempt to submit without entering any credentials
    cy.get('.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button').click();

    // Verify validation messages
    cy.get('.oxd-input-group__message').should('contain', 'Required');
  });
});
