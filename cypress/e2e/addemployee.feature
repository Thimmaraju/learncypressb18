Feature: Verify Add employee functionality

    Feature Description

    Scenario: Verify add employee with mandatory details

        Given User launch the apllication
        When User Enter username "Admin" and password "admin"
        And User clicks on login button
        Then User should be navigated to dashboardpage
        And User clicks on PIM
        And User clicks on Add employee sub menu
        And User Enter firstname "Raju" and lastname as "G"
        And User clicks on save button
        Then User should get successfully saved message

