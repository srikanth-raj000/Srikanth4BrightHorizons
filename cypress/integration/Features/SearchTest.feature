@Smoke @LoginTest
Feature: Verify search functionality

    Background: Preconditions to perform Search operation
        Given user opens the homepage
        And user validates the homepage

    Scenario: Verify Search functionality in Bright Horizons page
        When the user clicks on search icon
        And verifies if search field is visible on the page
        And the user enters "Employee Education in 2018: Strategies to Watch" in the search field
        And clicks on Search button
        Then verify search result has entered search text "Employee Education in 2018: Strategies to Watch"