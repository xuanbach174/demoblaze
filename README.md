--Please view this file in IDE or in Code view--
**99TECH Automation Suite (Playwright & TypeScript)**
This repository hosts an end-to-end (E2E) automation testing suite built with Playwright and TypeScript. It utilizes a structured Page Object Model (POM) approach and includes separate suites for both UI and API testing.
🚀 **Technologies Used**
Playwright: The primary automation framework.
TypeScript: Provides type safety and robust code structure.
Page Object Model (POM): For organized UI component management.
GitHub Actions: (Configured in .github/workflows/) For continuous integration.
📁 **Project Structure**
This structure separates UI tests, API tests, page objects, and data files clearly:
I applied Page Object Model to develop the project
.
├── .github/                   # CI/CD workflows
│   └── workflows/
│       └── playwright.yml
├── api_services/              # API interaction classes, same purpose as pages folder (e.g., AuthService, CartService, ProductService...)
├── fixtures/                  # Playwright fixtures and test hooks, I setup my project with fixture
├── pages/                     # UI Page Object Models (POMs), contains all pages of the application (loginPage, homePage, CartPage...)
├── tests_api/                 # API endpoint tests, we will create tests here and execute it
│   ├── auth/
│   └── order/
├── tests_ui/                  # User interface E2E tests
│   ├── cart_function/
│   └── login_function/
├── playwright.config.ts       # Main configuration file
├── package.json               # Dependencies and scripts
└── ... (other standard files/folders like node_modules, test-results)
**Install:**
1. Clone Repo
2. Install project dependencies:
   npm install
3. Install Playwright browser binaries:
   npx playwright install
**Run Test**
Run all test: npx playwright test
Run a specific project:
  npx playwright test --project=apiTest
  playwright test --project=tests_ui
