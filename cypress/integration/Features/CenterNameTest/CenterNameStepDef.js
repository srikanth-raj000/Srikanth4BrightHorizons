import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../support/pages/HomePage"
import ChildCareLocatorPage from "../../../support/pages/ChildCareLocatorPage";

const homePage = new HomePage();
const childCareLocatorPage = new ChildCareLocatorPage();

Given('user opens the homepage', function() {
    // homePage.openHomePage();
    cy.openHomePage();
})

Given('user validates the homepage', function() {
    homePage.validateHomePage();
    homePage.rejectLocationSharingReq();
    homePage.rejectCookies();
})

When('the user clicks on Find a Center option', () => {
    homePage.clickFindACenterBtn();
    cy.wait('@location').its('response.statusCode').should('eq', 200);
});

Then('verify that newly open page contains {string} as a part of its URL', (url_path) => {
    cy.url().should('include', url_path);
});

When('the user types {string} into search box and presses Enter', (searchText) => {
    childCareLocatorPage.getLocationSearchBar()
    .clear()
    .type('New York', { delay: 1000 })
    .type('{enter}', { delay: 2000 });
    cy.wait('@GetViewportInfo').its('response.statusCode').should('eq', 200);
    cy.waitForPageToLoad();
    cy.waitForElements("body");
    cy.waitForAPIs();
});

Then('verify if a number of found centers is the same as a number of centers displayed on the below list', () => {
    childCareLocatorPage.getCountOfMatchingCenters().invoke('text').then((countText) => {
    const expectedCount = parseInt(countText.trim(), 10);
    childCareLocatorPage.getCenterNames().should('have.length', expectedCount);
  });
});

When('the user clicks on the first center on the list', () => {
  childCareLocatorPage.getFirstCenterName().scrollIntoView().click();
});

Then('verify if center name and address are the same on the list and popup', () => {
    let expectedName, expectedAddress;
    let actualName, actualAddress;
    childCareLocatorPage.getFirstCenterName().click();
    childCareLocatorPage.getFirstCenterName().invoke('text').then((name) => {
        expectedName = name.trim();
        cy.log(expectedName);
    })
    childCareLocatorPage.getFirstCenterAddress().invoke('text').then((address) => {
        expectedAddress = address.trim();
        cy.log(expectedAddress);
    })
    childCareLocatorPage.getPopUpCenterName().invoke('text').then((name) => {
        actualName = name.trim();
        cy.log(actualName)
        expect(actualName).to.eq(expectedName);
    })
    childCareLocatorPage.getPopUpCenterAddress().invoke('text').then((address) => {
        actualAddress = address.trim();
        cy.log(actualAddress)
        expect(actualAddress).to.eq(expectedAddress);
    })

  // Validate name and address on the details page
//   cy.get('.center-details-name').invoke('text').should((actualName) => {
//     expect(actualName.trim()).to.eq(expectedName);
//   });

//   cy.get('.center-details-address').invoke('text').should((actualAddress) => {
//     expect(actualAddress.trim()).to.eq(expectedAddress);
//   });
});
