const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  
  // Mobile view
  const page = await browser.newPage({ viewport: { width: 375, height: 812 } });
  await page.goto('http://localhost:8001/index.html');
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: '/tmp/app-mobile.png' });
  
  // Desktop view
  await page.setViewportSize({ width: 900, height: 1200 });
  await page.screenshot({ path: '/tmp/app-desktop.png' });
  
  console.log('Screenshots saved');
  await browser.close();
})();
