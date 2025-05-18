import { test, expect } from '@playwright/test';

test('Go to Amazon', async ({ page }) => {

      // Recording...
      
           // Step 1: Navigate to Amazon.in
           await page.goto('https://www.amazon.com/');
          
           // Step 2: Click on 'Mobiles'
           await page.click('a[href*="mobile-phones"]');
           
           // Step 3: Click on 'Best Sellers'
           await page.click('a[href*="best-sellers"]');
           
           // Step 4: Assert the text 'Best Sellers' exists
           await expect(page.locator('text=Best Sellers')).toBeVisible();
           
           // Extra Assertion (optional): Check if page title contains 'Amazon'
           await expect(page).toHaveTitle(/Amazon/i);
  });