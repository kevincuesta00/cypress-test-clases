Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
describe('Seccion 1 Validando el titulo ', () =>{
    it("Test Validar el titulo",() =>{ 
         cy.visit('https://demoqa.com/text-box')
         cy.title().should('eq','DEMOQA')
         cy.log("ok la funcion funciona")   
    })

    
 })//Cierre