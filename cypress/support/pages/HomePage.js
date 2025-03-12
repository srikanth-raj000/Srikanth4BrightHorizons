/**
 * @description This file contains the locators and methods of HomePage
 * @author Srikanth R
 * @created 2025-03-11
 */

const HAMBURGER_BTN = '[class^="btn-hamburger"]:visible';
const SEARCH_ICON = '[data-navigation-tracking^="Search"] span:visible'
const SEARCH_FIELD = 'input[id="search-field"]:visible'
const FIND_A_CENTER_BTN = '[data-tracking-cta^="Find a Center"]:visible'
const BRIGHT_HORIZONS_LOGO = '[data-navigation-tracking^="BrightHorizons"]:visible'
const CONTACT_US_BTN = '[data-tracking-cta^="Contact Us"]:visible'
const NEVER_ALLOW_BTN = 'button:contains("Never allow")'
const REJECT_COOKIES_BTN = 'button:contains("Reject All")'
const SUBMIT_SEARCH = 'button:contains("Search"):visible'

class HomePage {

    getHamburgerBtn() {
        return cy.get(HAMBURGER_BTN);
    }

    getSearchIcon() {
        return cy.get(SEARCH_ICON);
    }

    getSearchBar() {
        return cy.get(SEARCH_FIELD)
    }

    getFindACenterBtn() {
        return cy.get(FIND_A_CENTER_BTN);
    }

    clickHamburgerBtn() {
        this.getHamburgerBtn().scrollIntoView().click();
    }

    searchWithText(searchText) {
        this.getSearchBar().scrollIntoView().type(searchText);
    }

    clickFindACenterBtn() {
        this.getFindACenterBtn().scrollIntoView().click();
    }

    openHomePage() {
        cy.visit(Cypress.env('test_url'));
        cy.wait('@location').its('response.statusCode').should('eq', 200);
        cy.wait('@features').its('response.statusCode').should('eq', 200);
    }

    brightHorizonsLogo() {
        return cy.get(BRIGHT_HORIZONS_LOGO);
    }

    contactUsBtn() {
        return cy.get(CONTACT_US_BTN);
    }

    validateHomePage() {
        this.brightHorizonsLogo().should('be.visible');
        this.contactUsBtn().should('be.visible')
    }

    rejectLocationSharingReq() {
        cy.get('body').then(($body) => {
            if ($body.find(NEVER_ALLOW_BTN).length > 0) {
              cy.get(NEVER_ALLOW_BTN).click();
            }
          });
    }

    rejectCookies() {
        cy.get('body').then(($body) => {
            if ($body.find(REJECT_COOKIES_BTN).length > 0) {
              cy.get(REJECT_COOKIES_BTN).click();
            }
          });
    }

    clickSearchIcon() {
        cy.get('body').then(($body) => {
            if ($body.find(HAMBURGER_BTN).length > 0) {
              cy.get(HAMBURGER_BTN).scrollIntoView().click();
            }
          });
          cy.get(SEARCH_ICON).scrollIntoView().click();
    }
    
    submitSearch() {
        cy.get(SUBMIT_SEARCH).scrollIntoView().click();
    }
}

export default HomePage;