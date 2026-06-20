const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  
  // Mobile viewport
  const page = await browser.newPage({ viewport: { width: 375, height: 812 } });
  await page.goto('http://localhost:8001/index.html');
  await page.waitForLoadState('networkidle');

  // Add one record
  await page.fill('input[id="studyDate"]', '2026-06-10');
  await page.selectOption('select[id="studyLang"]', '英語');
  await page.fill('input[id="studyMinutes"]', '30');
  await page.click('button:has-text("学習を記録する")');
  await page.waitForTimeout(400);

  // Scroll down to see chart
  await page.evaluate(() => window.scrollBy(0, 800));
  await page.waitForTimeout(400);
  
  // Take screenshot
  await page.screenshot({ path: '/tmp/mobile-chart.png' });
  console.log('Mobile chart screenshot saved');

  await browser.close();
})();
