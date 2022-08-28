Feature: Patient Summary

  Scenario: I can view a patient summary
    Given a patient exists
    And I am a data entry user
    Then I can view the patients summary
