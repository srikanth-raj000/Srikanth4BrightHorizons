/**
 * @description This file contains the locators and methods of HomePage
 * @author Srikanth R
 * @created 2025-03-11
 */

const LOCATION_SEARCH_BAR = '[name="addressInput"]:visible'
const COUNT_OF_MATCHING_CENTERS = '[class="resultsNumber"]:visible'
const CENTERS_NAMES = 'h3[class="centerResult__name"]'
const CENTER_ADDRESSES = '[class="centerResult__address"]'
const POPUP_CENTER_NAME = '[class="mapTooltip__headline"]:visible'
const POPUP_CENTER_ADDRESS = '[class="mapTooltip__address"]:visible'

class ChildCareLocatorPage {

    getLocationSearchBar() {
        return cy.get(LOCATION_SEARCH_BAR);
    }

    getCountOfMatchingCenters() {
        return cy.get(COUNT_OF_MATCHING_CENTERS);
    }

    getCenterNames() {
        return cy.get(CENTERS_NAMES);
    }

    getFirstCenterName() {
        return cy.get(CENTERS_NAMES).first();
    }

    getLastCenterName() {
        return cy.get(CENTERS_NAMES).last()
    }

    getCenterAddresses() {
        return cy.get(CENTER_ADDRESSES);
    }

    getFirstCenterAddress() {
        return cy.get(CENTER_ADDRESSES).first();
    }

    getLastCenterAddress() {
        return cy.get(CENTER_ADDRESSES).last();
    }

    getPopUpCenterName() {
        return cy.get(POPUP_CENTER_NAME);
    }

    getPopUpCenterAddress() {
        return cy.get(POPUP_CENTER_ADDRESS);
    }

}

export default ChildCareLocatorPage;