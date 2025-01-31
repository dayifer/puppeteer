const puppeteer = require('puppeteer')

describe('Tipos de Espera',() => {

    it('test tipos de espera', async() => {
        const browser = await puppeteer.launch({
            headless: false, 
            defaultViewport: null       
        })

        const page = await browser.newPage()
        //SIRVE PARA QUE LA PAGINA TERMINE DE GURDAR LOS ELEMENTOS WAITUNTIL
        await page.goto("https://demoqa.com/modal-dialogs/", { waitUntil:'networkidle2' }) 

        await new Promise(resolve => setTimeout(resolve, 50000))

        //SIRVE PARA ESPERAR POR UN SELECTOR

        const button = await page.waitForSelector('#showSmallModal', { visible:true })
        
        // OTRA MANERA DE PASAR EL VALOR DEL SELECTOR PARA HACER UNA ACCIÓN
        await button.click()
       
        // ESPERA POR FUNCIÓN

        await page.waitForFunction(() => document.querySelector('#example-modal-sizes-title-sm').innerText === 'Small Modal')

        await browser.close()


},350000)


})