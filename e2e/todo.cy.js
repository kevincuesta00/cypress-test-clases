describe('Pruebas heroku app', ()=>{

    it('Crear Tarea', () => {

        cy.visit('https://todomvc.com/examples/react/#/')
        cy.get('.new-todo').type("Tarea 1{enter}")
        cy.get('[data-reactid=".0.2.1.4"]').click()
        cy.wait(5000)
        

        
    })
    it('Marcar tarea como completada', () => {

        cy.visit('https://todomvc.com/examples/react/#/')
        cy.get('.new-todo').type("Tarea 2{enter}")
        cy.get('.toggle').click()
        cy.get('[data-reactid=".0.2.1.4"]').click()
        cy.wait(5000)
        
    })
    it('Desmarcar tarea completada', () => {

        cy.visit('https://todomvc.com/examples/react/#/')
        cy.get('.new-todo').type("Tarea 3{enter}")
        cy.get('.toggle').click()
        cy.wait(5000)
        cy.get('.toggle').click()
        cy.get('[data-reactid=".0.2.1.2"] > a').click()
    })

    it('Editar tarea', () => {

        cy.visit('https://todomvc.com/examples/react/#/')
        cy.get('.new-todo').type("Tarea 4{enter}")
        cy.get('.view > label').type("Tarea editada{enter}")
        cy.get('[data-reactid=".0.2.1.2"] > a').click()
    })
})