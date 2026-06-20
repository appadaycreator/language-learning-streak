const playwright = require('playwright');

(async () => {
  const browser = await playwright.chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:8001/', { waitUntil: 'networkidle' });
  await page.screenshot({ path: '/tmp/screenshot.png', fullPage: true });
  console.log('Screenshot saved to /tmp/screenshot.png');
  await browser.close();
})();
