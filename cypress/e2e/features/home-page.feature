Feature:Home Page

Scenario: Verify the navigation bar's visibility on every screen
    When I visit Home Page 
    Then I should see navigation bar
    Then I should see hero section
  
Scenario: Verify functionality of explore button on every screen
    When I visit Home Page 
    Then I should see explore button and it should contain hyperlink
    When I click on explore button it should nevigate to Discovery Page

Scenario: Verify the footer and its content on every screen    
    When I visit the 'Home' Page   Then I should see footer on Page    
    Then I should see Asterisk with yellow color    
    Then I should see '2' social icons
    
