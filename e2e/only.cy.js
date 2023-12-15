/// <reference types ="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
describe('Only', () =>{ //Solo corre el only , el que tu le digas
    it.only("Type pageUp",() =>{ 
         cy.visit('https://demoqa.com/text-box')
         cy.title().should('eq','DEMOQA')
         cy.get("#userName").type('{pageup}')
         cy.wait(5000)   
         cy.get("#userEmail").type('{pagedown}')   

    })

})