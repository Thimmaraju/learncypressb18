Feature: Verify login functionality

    Scenario: Verify login with Valid credential

        Given User launch the apllication
        When User Enter username "Admin" and password "admin"
        And User clicks on login button
        Then User should be navigated to dashboardpage

    # Scenario: Verify login with valid username and invalid password credential

    #     Given User launch the apllication
    #     When User Enter username "Admin" and password "ekrhguher"
    #     And User clicks on login button
    #     Then User should get login error message

    # Scenario: Verify login with invalid username and valid password credential

    #     Given User launch the apllication
    #     When User Enter username "kefug" and password "admin123"
    #     And User clicks on login button
    #     Then User should get login error message
    # Scenario: Verify login with invalid username and invalid password credential

    #     Given User launch the apllication
    #     When User Enter username "kefug" and password "adwfbiumin123"
    #     And User clicks on login button
    #     Then User should get login error message

    Scenario Outline: Verify Nagetive tests for login

        Given User launch the apllication
        When User Enter username "<Username>" and password "<Password>"
        And User clicks on login button
        Then User should get login error message

        Examples:
            | Username | Password   |
            | Admin    | erjgfnkrjn |
            | jgreyh   | admin123   |
            | jgreyh   | rfheur     |