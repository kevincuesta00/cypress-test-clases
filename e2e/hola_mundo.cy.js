/// <reference types="cypress"/>
describe('Primer Test con Cypress', () =>{
   it("Esto es un hola mundo desde Cypress",() =>{
        cy.log("Bienvenidos a Cypeher")
        cy.visit('https://testingqarvn.com.es/contacto/')
        cy.get("#et_pb_contact_name_0").type("kevin")
        cy.get("#et_pb_contact_email_0").type("kevincuestagarcia@gmail.com")
        cy.wait(3000)
        cy.get("#et_pb_contact_message_0").type("pruebas")
        cy.wait(3000)
        

})
})