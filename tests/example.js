describe('First Test Suite', () => {
	it('First Test Example', () => {
		browser.url('http://www.example.com')
		browser.pause(2000)
		expect(browser).toHaveUrl('http://www.example.com/')
	})
})
