/**
 * @description This file contains the locators and methods of HomePage
 * @author Srikanth R
 * @created 2025-03-11
 */

const ALL_SEARCH_RESULTS = 'h3[class="title"]:visible';

class SearchResultsPage {

    allSearchResults() {
        return cy.get(ALL_SEARCH_RESULTS);
    }

    firstSearchResult() {
        return cy.get(ALL_SEARCH_RESULTS).first();
    }

    lastSearchResultInThePage() {
        return cy.get(ALL_SEARCH_RESULTS).last();
    }

}

export default SearchResultsPage;