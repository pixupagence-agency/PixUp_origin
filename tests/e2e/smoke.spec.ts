import { test, expect } from '@playwright/test';

test('has title and contact button', async ({ page }) => {
  await page.goto('/');

  // Expect a title to contain "PixUp" (adjust based on actual title)
  // Let's assume the name is in the page somewhere
  await expect(page).toHaveTitle(/PixUp/);

  // Check if contact link exists
  const contactLink = page.getByRole('link', { name: /contact/i });
  await expect(contactLink).toBeVisible();
});

test('navigation to contact page works', async ({ page }) => {
  await page.goto('/');
  
  // Playwright automatically waits for actionability. Avoid waiting for networkidle.
  const contactLink = page.locator('nav').getByRole('link', { name: 'Contact', exact: true }).first();
  await contactLink.click();

  // Auto-retrying web-first assertion replaces the brittle waitForURL
  await expect(page).toHaveURL(/\/contact-us/);
  
  // Verify content
  await expect(page.getByRole('heading', { name: /construisons/i })).toBeVisible();
});
