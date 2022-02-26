const { mobile, desktop } = require('../lib/devices')
const { shortWait } = require('../lib/timeout')
const { tablet } = require('../lib/devices')

describe('First Test Suite', () => {
	it('First Test Example', () => {
		browser.url('http://www.example.com')
		browser.pause(shortWait)
		expect(browser).toHaveUrl('http://www.example.com/')
	})

	it('Smart wait test', () => {
		const p = $('p')
		p.waitForExist()
		expect(p).toBeDisplayed()
	})

	it('Get Text', () => {
		browser.url('http://www.example.com')
		const text = $('h1').getText()
		expect(text).toEqual('Example Domain')
	})

	it('Assert attribute', () => {
		browser.url('https://devexpress.github.io/testcafe/example')
		const button = $('#submit-button')
		expect(button).toHaveAttrContaining('type', 'submit')
	})

	it('Assert value', () => {
		browser.url('https://devexpress.github.io/testcafe/example')
		// browser.waitForExist()
		const button = $('#populate')
		button.waitForExist()
		expect(button).toHaveValue('Populate')
	})

	it('Save Screenshot', () => {
		browser.url('https://devexpress.github.io/testcafe/example')
		browser.saveScreenshot('screenshot.png')
	})

	it.only('Mobile View', () => {
		browser.url('https://devexpress.github.io/testcafe/example')
		browser.setWindowSize(mobile[0], mobile[1])
		browser.pause(shortWait)
	})

	it.only('Tablet View', () => {
		//browser.url('https://devexpress.github.io/testcafe/example')
		browser.setWindowSize(tablet[0], tablet[1])
		browser.pause(shortWait)
	})

	it.only('Desktop View', () => {
		browser.setWindowSize(desktop[0], desktop[1])
		browser.pause(shortWait)
	})
})
