Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
require('cypress-plugin-tab')

describe('Primer Reto', () =>{
    it("Primer reto",() =>{ 
        cy.visit('https://demoqa.com/webtables')
        cy.viewport(1300,800)
        cy.title().should('eq','DEMOQA')
        cy.get("#delete-record-1 > svg >path").should("be.visible").click({force: true})
        cy.get("#delete-record-2 > svg >path").should("be.visible").click({force: true})
        cy.get("#delete-record-3 > svg >path").should("be.visible").click({force: true})
        cy.get('#addNewRecordButton').should("be.visible").click()
        cy.get('#firstName').should("be.visible").type("Kevin").tab().type("Cuesta").tab().type("kevin@gmail.com").tab().type("23").tab().type("5000").tab().type("Follador")
        cy.get('#submit').should("be.visible").click({force: true})
        cy.get('#addNewRecordButton').should("be.visible").click()
        cy.get('#firstName').should("be.visible").type("Pau").tab().type("Gomez").tab().type("Gomez@gmail.com").tab().type("26").tab().type("800").tab().type("Colmenero")
        cy.get('#submit').should("be.visible").click({force: true})
        cy.get('#addNewRecordButton').should("be.visible").click()
        cy.get('#firstName').should("be.visible").type("Vicent").tab().type("Ramos").tab().type("Vicent@gmail.com").tab().type("49").tab().type("1500").tab().type("Jefe")
        cy.get('#submit').should("be.visible").click({force: true})
        cy.get('#addNewRecordButton').should("be.visible").click()
        cy.get('#firstName').should("be.visible").type("Alvaro").tab().type("GM").tab().type("Eldelbar@gmail.com").tab().type("31").tab().type("1000").tab().type("JesusELdELBAr")
        cy.get('#submit').should("be.visible").click({force: true})
    })
})