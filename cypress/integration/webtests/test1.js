describe('My first test suite', function() {
    it('My first test case', function() {
        cy.log(Cypress.env('test_url'))
        cy.visit(Cypress.env('test_url'));
        cy.wait(10000)
        cy.get('body').then(($body) => {
            if ($body.find('button:contains("Never allow")').length > 0) {
                cy.wait(5000)
              cy.get('button:contains("Never allow")').click();
            }
          });
          cy.get('body').then(($body) => {
            cy.wait(5000)
            if ($body.find('button:contains("Reject All")').length > 0) {
              cy.get('button:contains("Reject All")').click();
            }
          });
          expect(20).to.eq(21)
    })
    // it('My second test case', function() {
    //     cy.log("Dummy step")
    // })
})