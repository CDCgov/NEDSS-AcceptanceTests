Feature: Patient Summary

  Scenario: I can view a patient summary
    Given I am a data entry user
    And a patient exists
    When I search for a patient
    Then I can view the patients summary
