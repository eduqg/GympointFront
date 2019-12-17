describe('Plan CRUD form', () => {
  before(() => {
    cy.visit('/');
    cy.get('input#email').type('admin@gympoint.com');
    cy.get('input#password').type('123456');
    cy.get('button').click();
    cy.contains('PLANOS').click();
  });

  it('Should be on plans page', () => {
    cy.contains('Gerenciar Planos').should('be.visible');
  });

  it('Should go to create new plan', () => {
    cy.contains('+ Cadastrar').click();
    cy.contains('Cadastro de Plano').should('be.visible');
  });

  it('Should create new plan', () => {
    cy.get('input#title').type('Plano not Smart');
    cy.get('input#duration').type('48');
    cy.get('input#price').type('99.99');
    cy.contains('Salvar').click();
    cy.contains('Plano criado com sucesso').should('be.visible');
    cy.contains('Gerenciar Planos').should('be.visible');
  });

  it('Should edit plan', () => {
    cy.get("a[testid='Plano not Smart']").click();
    cy.contains('Edição de Plano').should('be.visible');
    cy.get('input#title').clear();
    cy.get('input#title').type('Plano now Smart');
    cy.get('input#duration').clear();
    cy.get('input#duration').type('30');
    cy.get('input#price').clear();
    cy.get('input#price').type('45.60');
    cy.contains('Salvar').click();
    cy.contains('Plano atualizado com sucesso').should('be.visible');
  });

  it('Should delete student', () => {
    cy.contains('Gerenciar Planos').should('be.visible');

    cy.get("button[testid='Plano now Smart']").click();
    cy.contains('Plano deletado.').should('be.visible');
  });
});
