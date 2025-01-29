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
		await page.goto('https://www.google.com/search?sca_esv=029406e1c61d5581&q=imagenes&udm=2&fbs=ABzOT_BnMAgCWdhr5zilP5f1cnRvK9uZj3HA_MTJAA6lXR8yQIHhBi298nC38CQZOY2HEJbZvsLV77zEUv5_mptgx3dxNDrECcxLBch35189bUXwYNkkPIDQ_nCjr5u_zNUQDWpbiZoMLMtUMyJZYz_1fn9IdkelXDZrSZDjfzm5GL-680dOWgpwIjKg1XkRYxIMn3vJtBwt&sa=X&ved=2ahUKEwjkqMWjyZuLAxX5QzABHV9AG14QtKgLegQIERAB&biw=1050&bih=649&dpr=1#vhid=QyjckPLcTSohTM&vssid=mosaic')
		await new Promise(resolve => setTimeout(resolve, 5000))
		await page.waitForSelector('img')
		await page.goto('https://platzi.com/')
		await page.waitForSelector('body > main > header > div > figure > a > svg > g')
		await browser.close()
	}, 80000)
})