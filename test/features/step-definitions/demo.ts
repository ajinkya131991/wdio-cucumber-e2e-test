import { Given,When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Google page is open$/,async function() {
    console.log("Before opening browser ... ");
    await browser.url("https://google.com");
    await browser.pause(7000);
    console.log("After opening browser ... ");
})

When(/^Serch with (.*)$/,async function(searchItem) {
    console.log(" >>> Search Item : " + searchItem);
    let ele = await $(`[name=q]`);
    await ele.setValue(searchItem);
    await browser.keys("Enter")
})

Then(/^Click on first search result$/,async function() {
   
    let ele = await $(`div.eKjLze a h3`);
    ele.click()
    await browser.pause(7000)
    
})

Then(/^Url should match (.*)$/,async function(expectedUrl) {
    console.log("Expected Url :  " +expectedUrl)
    let url = await browser.getUrl();
    chai.expect(url).to.equal(expectedUrl);
    
})

