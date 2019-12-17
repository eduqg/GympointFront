describe('Students CRUD', () => {
  before(() => {
    cy.visit('/');
    cy.get('input#email').type('admin@gympoint.com');
    cy.get('input#password').type('123456');
    cy.get('button').click();
  });

  it('Should be on students page', () => {
    cy.contains('Gerenciar Alunos').should('be.visible');
  });

  it('Should go to create new student', () => {
    cy.contains('+ Cadastrar').click();
    cy.contains('Criar aluno').should('be.visible');
  });

  it('Should create new student', () => {
    cy.contains('Criar aluno').should('be.visible');
    cy.get('input#name').type('Maria Alves Ribeiro');
    cy.get('input#email').type('maria@gympoint.com');
    cy.get('input#idade').type('22');
    cy.get('input#peso').type('60.5');
    cy.get('input#altura').type('1.7');
    cy.contains('Salvar').click();
    cy.contains('Estudante criado com sucesso').should('be.visible');
    cy.contains('Gerenciar Alunos').should('be.visible');
  });

  it('Should edit student', () => {
    cy.get("a[testid='Maria Alves Ribeiro']").click();
    cy.contains('Edição de aluno').should('be.visible');
    cy.get('input#idade').clear();
    cy.get('input#idade').type('25');
    cy.get('input#peso').clear();
    cy.get('input#peso').type('59.5');
    cy.get('input#altura').clear();
    cy.get('input#altura').type('1.7');
    cy.contains('Salvar').click();
    cy.contains('Estudante atualizado com sucesso').should('be.visible');
  });

  it('Should delete student', () => {
    cy.contains('Gerenciar Alunos').should('be.visible');

    cy.get("button[testid='Maria Alves Ribeiro']").click();
    cy.contains('Estudante deletado.').should('be.visible');
  });
});
