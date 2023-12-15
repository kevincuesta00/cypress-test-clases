/// <reference types ="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
describe('Assets', () =>{
    it("Demo Assets",() =>{ 
         cy.visit('https://demoqa.com/automation-practice-form')
         cy.title().should('eq','DEMOQA')
         cy.wait(1000)
         cy.get('#firstName').should("be.visible").type("Kevin")//validar campos si esta existente
         cy.get('#lastName').should("be.visible").type("Kevin")
         cy.get('#userEmail').should("be.visible").should("be.enabled").type("kevin@gmail.com")

    })
})