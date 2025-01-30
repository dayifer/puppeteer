const puppeteer = require('puppeteer')

describe('Mi primer test en puppeteer', () => {

	it('Debe abrir y cerrar el navegador', async () => {
		const browser = await puppeteer.launch({
			headless: false,
            slowMo: 2000,
            devtools: false,
           /* defaultViewport: {
                width:2100,
                height:1080
            }*/
           // args:['--windows-size=1920,1080']
           defaultViewport:null
		})
		const page = await browser.newPage()
		await page.goto('https://github.com/')
		await new Promise(resolve => setTimeout(resolve, 5000))
		await page.waitForSelector('img')
		await page.goto('https://platzi.com/')
		await page.waitForSelector('body > main > header > div > figure > a > svg > g')

		// NAVEGAR HACIA ATRÁS
		await page.goBack()
		// IR HACIA ADELANTE EN EL NAVEGADOR
		await page.goForward()
		//	await page.waitForSelector('img')

		//ABRIR OTRA PÁGINA
		const page2 = await browser.newPage()
		await page2.goto('https://google.com/')
		await browser.close()
	}, 350000)
})