/// <reference types="Cypress" />

context('Assertions', () => {
  beforeEach(() => {
    // cy.visit('https://example.cypress.io/commands/assertions')
    cy.visit('http://localhost:4200/home');
  })

  it('discription', ()=>{
    cy.get('.button-authorization').click();
    cy.get('.mat-input-email').focus().type('2@2').blur();
    cy.get('.mat-input-password').focus().type('1234qwerty').blur();

    cy.get('.mat-button-login').click();

  })
})
