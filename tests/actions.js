const { shortWait } = require('../lib/timeout')

describe('Browswer actions', () => {
	it('Setvalue', () => {
		browser.url('https://devexpress.github.io/testcafe/example')
		const input = $('#developer-name')
		input.setValue('sometest')
		browser.pause(shortWait)
		input.addValue(' additional value')
		browser.pause(shortWait)
		input.clearValue()
		browser.pause(shortWait)
	})
})
