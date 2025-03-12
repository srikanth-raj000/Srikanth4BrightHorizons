/// <reference typres = "Cypress">

import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import HomePage from "../../../support/pages/HomePage"
import SearchResultsPage from "../../../support/pages/SearchResultsPage";

const homePage = new HomePage();
const searchResultsPage = new SearchResultsPage();

Given('user opens the homepage', function() {
    homePage.openHomePage();
})

Given('user validates the homepage', function() {
    homePage.validateHomePage();
})

When('the user clicks on search icon', function() {
    homePage.rejectLocationSharingReq();
    homePage.rejectCookies();
    homePage.clickSearchIcon();
})

When('verifies if search field is visible on the page', function () {
    homePage.getSearchBar().should('be.visible')
})

When('the user enters {string} in the search field', function(searchText) {
    homePage.searchWithText(searchText);
});

When('clicks on Search button', () => {
    homePage.submitSearch();
})

Then('verify search result has entered search text {string}', function(searchText) {
    searchResultsPage.firstSearchResult().invoke('text').then((text) => {
        cy.log(text)
        expect(text).to.equal(searchText)
    })
})