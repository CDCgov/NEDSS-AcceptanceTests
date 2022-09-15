Feature: Contact Attachment

  Scenario Outline: Add and retrieve a file attachment for a contact
    Given I am a dis user
    When I upload a contact "<attachment>" with the following "<name>" and "<description>"
    Then It is stored with the contact and can be viewed

    Examples: 
      | attachment                 | name            | description      |
      | contact_attachment.pdf     | Test Attachment | Test description |
