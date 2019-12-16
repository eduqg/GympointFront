describe('Login form', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should be on login page', () => {
    cy.contains('Seu E-mail').should('be.visible');
    cy.contains('Sua senha').should('be.visible');
  });

  it('Should login', () => {
    cy.get('input#email').type('admin@gympoint.com');
    cy.get('input#password').type('123456');
    cy.get('button').click();
  });
});
