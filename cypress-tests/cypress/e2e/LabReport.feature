Feature: Lab Report

  Scenario: I can create a lab report
    Given I am a data entry user
    When I create a lab report
    Then The lab report is created successfully

  Scenario: I am notified of new lab reports
    Given I am a supervisor user
    When a lab report is created
    Then I can view the lab report in my queue
