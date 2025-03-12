@Regression @CenterNameTest
Feature: Verify Center name and address

    Background: Preconditions to perform Search operation
        Given user opens the homepage
        And user validates the homepage

    Scenario: Verify Search functionality in Bright Horizons page
        When the user clicks on Find a Center option
        Then verify that newly open page contains "child-care-locator" as a part of its URL
        When the user types "New York" into search box and presses Enter
        Then verify if a number of found centers is the same as a number of centers displayed on the below list
        When the user clicks on the first center on the list
        Then verify if center name and address are the same on the list and popup
