describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })


  it('should update display of running total when click number buttons', () => {
    cy.get('#number3').click();
    cy.get('.display').should('contain', '3');
  })

  it('should update display with result of arithmetical operations', () => {
    cy.get('#number5').click();
    cy.get('#operator-add').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '8');
  })

  it('should allow multiple operations to be chained together', () => {
    cy.get('#number5').click();
    cy.get('#operator-add').click();
    cy.get('#number3').click();
    cy.get('#operator-subtract').click();
    cy.get('#number7').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '1');
  })

  it('should have expected output for decimals', () => {
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number8').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0.625');
  })

  it('should have expected output for negative numbers', () => {
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-7');
  })

  it('should have expected output for large numbers', () => {
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '99980001');
  })

  it('should handle divide by zero', () => {
    cy.get('#number9').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Can\'t divide by zero');
  })
})

