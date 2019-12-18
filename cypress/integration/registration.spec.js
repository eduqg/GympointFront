describe('Registration CRUD', () => {
  before(() => {
    cy.visit('/');
    cy.get('input#email').type('admin@gympoint.com');
    cy.get('input#password').type('123456');
    cy.get('button').click();
    cy.contains('MATRÍCULAS').click();
  });

  it('Should be on plans page', () => {
    cy.contains('Gerenciar Matrículas').should('be.visible');
  });

  it('Should go to create new registration', () => {
    cy.contains('+ Cadastrar').click();
    cy.contains('Cadastro de Matrícula').should('be.visible');
  });

  it('Should create new registration', () => {
    cy.get('select#student_id').select('Jorge Ribeiro Gomes');
    cy.get('select#plan_id').select('Gold');
    cy.get("input[name='start_date']").click();
    cy.get('.react-datepicker__navigation--next').click();
    cy.get('.react-datepicker__navigation--next').click();
    cy.get('.react-datepicker__navigation--next').click();
    cy.get('.react-datepicker__navigation--next').click();
    cy.get('.react-datepicker__navigation--next').click();
    cy.get('.react-datepicker__day--028')
      .first()
      .click();

    cy.contains('Salvar').click();
    cy.wait(6000);
    cy.contains('Matrícula efetuada com sucesso').should('be.visible', { timeout: 30000 });
    cy.contains('Gerenciar Matrículas').should('be.visible');
  });

  it('Should edit plan', () => {
    cy.get("a[testid='Jorge Ribeiro Gomes']").click();
    cy.get('select#plan_id').select('Start');
    cy.get("input[name='start_date']").click();
    cy.get('.react-datepicker__navigation--next').click();
    cy.get('.react-datepicker__navigation--next').click();
    cy.get('.react-datepicker__navigation--next').click();
    cy.get('.react-datepicker__navigation--next').click();
    cy.get('.react-datepicker__navigation--next').click();
    cy.get('.react-datepicker__day--022')
      .first()
      .click();

    cy.contains('Salvar').click();
    cy.contains('Matrícula atualizada com sucesso').should('be.visible');
  });

  it('Should delete registration', () => {
    cy.contains('Gerenciar Matrículas').should('be.visible');

    cy.get("button[testid='Jorge Ribeiro Gomes']").click();
    cy.contains('Matrícula deletada.').should('be.visible');
  });
});
