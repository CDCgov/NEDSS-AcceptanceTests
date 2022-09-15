Feature: I can view an algorithm's actions

  Scenario: I can create a Laboratory Report algorithm
    Given I am a ELR Importer user
    When I create a Laboratory Report algorithm
    Then I can view the Laboratory Report algorithm actions

  Scenario: I can create a Case Report algorithm
    Given I am a ELR Importer user
    When I create a Case Report algorithm
    Then I can view the Case Report algorithm actions
