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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('openHomePage', () => {
    cy.visit(Cypress.env('test_url'));
})

Cypress.Commands.add('clickButtonUsingText', (text) => {
    cy.contains(text).scrollIntoView().click();
})

Cypress.Commands.add("waitForPageToLoad", () => {
    cy.window().should((win) => {
      expect(win.document.readyState).to.eq("complete");
    });
  });

Cypress.Commands.add("waitForElements", (selector, timeout = 10000) => {
    cy.get(selector, { timeout }).should("be.visible");
  });
  
Cypress.Commands.add("waitForAPIs", () => {
    cy.intercept("**/*").as("allRequests");
    cy.wait("@allRequests", { timeout: 10000 });
  });