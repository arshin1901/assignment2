///   <reference types="cypress" />
import {Then, When} from "@badeball/cypress-cucumber-preprocessor";

When("I visit Home Page",()=>{
    cy.visit("/index.html")
}); 
Then("I should see navigation bar",()=>{
    cy.get("nav").should("be.visible");
});
Then("I should see hero section",()=>{
    cy.get(".hero").should("be.visible");
});

Then("I should see explore button and it should contain hyperlink",()=>{
    cy.get(".cta-btn").should("be.visible");
    cy.get("a:contain(#),a.cta-btn")
});

When("I click on explore button it should nevigate to Discovery Page",()=>{
    cy.get(".cta-btn").click().get("#discover-our-story").should("be.visible");
});

Then ("I should see footer on Page",()=>{
    cy.get("footer").should("be.visible");
});

Then ("I should see Asterisk with yellow color",()=>{
    cy.get(".asterisk").eq(4).should("have.css","color","rgb(228, 207, 20)");
});

Then ("I should see {string} social icons",()=>{ 
     cy.get(".social-icons li ").should("have.css","opacity","1"); 
});