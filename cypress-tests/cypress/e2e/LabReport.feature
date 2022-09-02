Feature: Lab Report

  Scenario: I can create a lab report
    Given I am a data entry user
    Then I can create a lab report

  Scenario: I am notified of new lab reports
    Given I am a supervisor user
    When a lab report is created
    Then I can view the lab report in my Documents Requiring Security Assignment queue
