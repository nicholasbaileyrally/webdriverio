
const Cucumber = require('cucumber')
const assert = require('assert')

Cucumber.Given(/^I go to the website "(.*)"$/, (url) => {
    browser.url(url)
})

Cucumber.Then(/^should the element "([^"]*)" have text "(.*)"$/, (selector, expectedText) => {
    const text = $(selector).getText()
    assert.equal(text, expectedText)
})

Cucumber.Then(/^should the title of the page be "([^"]*)"$/, (expectedTitle) => {
    const title = browser.getTitle()
    console.log(title)
    assert.equal(title, expectedTitle, ' title is "'+ title + '" but should be "'+ expectedTitle)
})
