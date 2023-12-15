/// <reference types ="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
describe('Click Sencillo', () =>{
    it("Click sencillo",() =>{ 
         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
         cy.get('.oxd-button').should("be.visible").click()
         cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').should("be.visible").click()
              
    })
    it.only("Click force true",() =>{ 
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').should("be.visible").click()
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').should("be.visible").click({force: true})
             
   })
    
})
