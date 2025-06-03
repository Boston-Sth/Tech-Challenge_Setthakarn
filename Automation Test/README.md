# 🧪 Playwright Automation Project – Petstore Testing Suite

This project is a Playwright-based end-to-end test suite designed to automate functional testing on the [Petstore Demo Website](https://petstore.octoperf.com/).

---

## 📁 Project Structure

```
2.Automation Testing/
├── playwright.config.js                # Playwright configuration file
├── petstore.spec.js                    # General UI checks (e.g., homepage categories)
└── tests/
    ├── 01_User-registration.spec.js    # Step 1: User registration and login
    ├── 02_Product_Search.spec.js       # Step 2: Search and category verification
    ├── 03_Adding_Removing_Items_from_the_Cart.spec.js
    └── 04_Checkout_Process_Ship_to_Different_Address.spec.js
```

---

## ⚙️ Prerequisites

Make sure Node.js is installed on your system:  
https://nodejs.org/

Install Playwright and its dependencies:

```bash
npm init -y
npm install -D @playwright/test
npx playwright install
```

---

## ▶️ How to Run the Tests

Navigate to the project folder first:

```bash
cd "D:\Assignment\2.Automation Testing"
```

### Run All Tests

```bash
npx playwright test
```

### Run Specific Test File

```bash
npx playwright test tests/01_User-registration.spec.js
npx playwright test tests/02_Product_Search.spec.js
npx playwright test tests/03_Adding_Removing_Items_from_the_Cart.spec.js
npx playwright test tests/04_Checkout_Process_Ship_to_Different_Address.spec.js
```

---

## 📊 Generate and View HTML Test Report

1. After running your tests:

```bash
npx playwright show-report
```

2. If no report is generated, make sure your `playwright.config.js` includes:

```js
// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  timeout: 180000,
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
});
```

---

## ✅ Test Coverage Summary

| Test Case | Description |
|-----------|-------------|
| `01_User-registration` | Register new user and log in |
| `02_Product_Search` | Navigate and validate product categories |
| `03_Adding_Removing_Items` | Add, remove, re-add products to/from cart |
| `04_Checkout_Process_Ship_to_Different_Address` | Complete checkout using a different shipping address |

---

## 📝 Notes

- Each test runs independently and creates a unique user for isolation.
- Report is generated in `playwright-report/` and viewable via `npx playwright show-report`.

---
