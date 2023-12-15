/// <reference types ="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
describe('Ejemplo de type pageUp, pageDown', () =>{
    it("Type pageUp",() =>{ 
         cy.visit('https://demoqa.com/text-box')
         cy.title().should('eq','DEMOQA')
         cy.get("#userName").type('{pageup}')
         cy.wait(5000)   
         cy.get("#userEmail").type('{pagedown}')   

    })

})
