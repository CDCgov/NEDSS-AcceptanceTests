Feature: Contact Attachment

  Scenario Outline: Add and retrieve a file attachment for a contact
    Given I am a dis user
    When I upload a contact "<attachment>" with the following "<name>" and "<description>"
    Then I can see the "<name>" and "<description>" in the list

    Examples:
      | attachment                 | name            | description      |
      | Test_Word_Doc.docx         | Test Attachment | Test description |
