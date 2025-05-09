Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    text: 'Teste.',
    phone: '61981228384'
}) => {
    
    cy.get('#firstName').type(data.firstName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#open-text-area').type(data.text)
    cy.get('#phone-checkbox').click()
    cy.get('#phone').type(data.phone)
    cy.contains('button', 'Enviar').click()
})