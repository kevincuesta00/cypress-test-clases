/// <reference types ="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
require('cypress-plugin-tab')

describe('Ejemplo function tab', () =>{
    it("Type con Tab",() =>{ 
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq','DEMOQA')
        cy.get('#userName').type("Kevin").tab().type("kevin@gmail.com").tab().type("Tabuladores")
    })
})
