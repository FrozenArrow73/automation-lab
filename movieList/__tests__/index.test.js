const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html')
})

afterAll(async () => {
    driver.quit()
})

describe("movie list functionality", () => {
    
    test("check off a movie", async () => {
        await driver.findElement(By.xpath("//input")).sendKeys("Hunger Games\n")
        await driver.findElement(By.xpath("//li/span[text()='Hunger Games']")).click()
        await driver.sleep(2000)
        await driver.findElement(By.className("checked")).click()
        await driver.sleep(3000)
    })
    
    // test("check off message appears", async () => {
    //     await driver.findElement(By.id(`message[text()='Hunger Games added back!'`))
    // })
})