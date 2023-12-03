Feature: Demo Feature

    Feature Description

    @demo
    Scenario Outline: First demo feature

        Given Google page is open
        When Serch with <SearchItem>
        Then Click on first search result
        Then Url should match <ExpectedURL>

        Examples:
            | TestID       | SearchItem | ExpectedURL           |
            | Demo  _TC001 | wdio       | https://webdriver.io/ |