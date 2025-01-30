const puppeteer = require('puppeteer')

describe('Interactuando con Elementos', () => {

	it('Debe hacer click derecho navegador', async () => {
		const browser = await puppeteer.launch({
			headless: false,
            defaultViewport:null
		})
		const page = await browser.newPage()
		await page.goto('https://demo.guru99.com/test/simple_context_menu.html')
        //ACEPTA LOS DIALOGS
        page.on('dialog', async(dialog)=>{
            await dialog.accept()
        })
        //CLICK DERECHO
		//await page.click('#authentication > span', { button:'right', delay:500 })
        //await new Promise(resolve => setTimeout(resolve, 5000))
        //DOBLE CLICK
        await page.click('#authentication > button', { clickCount:2, delay:500 })
        await new Promise(resolve => setTimeout(resolve, 5000))
        
        //await page.waitForTimeOut(3000)
        await browser.close()
	}, 350000)
})
