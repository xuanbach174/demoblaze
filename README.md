# 99TECH Automation Suite (Playwright & TypeScript)

This repository hosts a comprehensive end-to-end (E2E) automation testing suite built with **Playwright** and **TypeScript**. It utilizes a structured **Page Object Model (POM)** approach and includes separate suites for both UI and API testing.

---

## 🚀 Technologies Used

- **Playwright**: The primary automation framework.
- **TypeScript**: Provides type safety and robust code structure.
- **Page Object Model (POM)**: For organized UI component management.
- **GitHub Actions**: Configured for continuous integration.

---

## 📁 Project Structure

The project is organized to separate UI tests, API tests, page objects, and data files clearly:

```text
.
├── .github/                   # CI/CD workflows
│   └── workflows/
│       └── playwright.yml
├── api_services/              # API interaction classes (AuthService, CartService, etc.)
├── fixtures/                  # Playwright fixtures and test hooks
├── pages/                     # UI Page Object Models (loginPage, homePage, etc.)
├── tests_api/                 # API endpoint tests
│   ├── auth/
│   └── order/
├── tests_ui/                  # User interface E2E tests
│   ├── cart_function/
│   └── login_function/
├── playwright.config.ts       # Main configuration file
└── package.json               # Dependencies and scripts
```

---

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Install Playwright browser binaries:**
   ```bash
   npx playwright install
   ```

---

## 🧪 Running Tests

### Run all tests:
```bash
npx playwright test
```

### Run a specific project:
```bash
# Run API tests
npx playwright test --project=apiTest

# Run UI tests
npx playwright test --project=uiTest
```

---

## ⚙️ Continuous Integration

GitHub Actions are configured in `.github/workflows/playwright.yml` to automatically run tests on every push request.
