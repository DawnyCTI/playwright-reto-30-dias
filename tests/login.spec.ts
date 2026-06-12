import { expect, test } from '@playwright/test';

import { LoginPage } from './pages/login.page';

const TEST_USERNAME = 'usuario@test.com';
const INVALID_PASSWORD = 'PasswordIncorrecta123';
const EXPECTED_INVALID_LOGIN_MESSAGE = 'Invalid credentials';

test('muestra mensaje de error al iniciar sesion con contraseña incorrecta', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(TEST_USERNAME, INVALID_PASSWORD);

  await expect(loginPage.invalidLoginAlert).toBeVisible();
  await expect(loginPage.invalidLoginAlert).toHaveText(EXPECTED_INVALID_LOGIN_MESSAGE);
});
