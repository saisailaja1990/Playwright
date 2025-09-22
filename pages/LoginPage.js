const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.dashboardHeading = page.getByRole('heading', { name: 'Dashboard', level: 6 });
   this.errorMessage = page.getByText('Invalid credentials');
  }


  async goto() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    
  }

  async assertLoginSuccess() {
    await expect(this.dashboardHeading).toBeVisible();
  }


  async assertLoginFailure() {
    await expect(this.errorMessage).toBeVisible();
  }
}

module.exports = { LoginPage };