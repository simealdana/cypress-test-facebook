// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("getAll", (url,callback,postId) => {
    cy.request('GET',url).then((res)=>{
        callback(res,postId)
    })
});

Cypress.Commands.add("postCustom", (url,callback) => {
    cy.request('POST',url).then((res)=>{
        callback(res)
    })
});

Cypress.Commands.add("deleteCustom", (url,callback) => {
    cy.request('DELETE',url).then((res)=>{
        expect(res).to.have.property('status',200)
        expect(res.body.data).to.not.be.null
        callback(res)
    })
});

// commands de login by UI

Cypress.Commands.add("login", ({ email, password} ) => {
    cy.get("a[class='_42ft _4jy0 _3obb _4jy6 _4jy1 selected _51sy']").click();
    cy.get("#email").type(email);
    cy.get("#pass").type(password);
    cy.get("#loginbutton").click();
  });

  Cypress.Commands.add("posting", (text) => {
    cy.get("div[aria-label='Crear publicación']").click();
    cy.get("div[class='_1mf _1mj']").type(text);
    cy.get('.dati1w0a > .oajrlxb2').click();
  });

  Cypress.Commands.add("getPost", () => {
    cy.get('.f530mmz5 > .kvgmc6g5')
  });

  Cypress.Commands.add("visitPage", () => {
    cy.get('.f530mmz5 > .kvgmc6g5')
  });
