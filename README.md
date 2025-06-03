# Tech-Challenge_Setthakarn

## ***Please find README.md for each module.**

## Part 1: Black Box Testing

Performed exploratory testing on [SauceDemo](https://www.saucedemo.com/) using the credentials:
- **Username:** `problem_user`
- **Password:** `secret_sauce`

Identified and documented issues in a bug report format, including:
- Steps to reproduce
- Observed behavior
- Expected outcomes

---

## Part 2: Automation Testing (UI)

Implemented end-to-end automation scripts using **Playwright** for [PetStore](https://petstore.octoperf.com/actions/Catalog.action), covering the following scenarios:

1. **User Registration and Login**
2. **Product Search**
3. **Adding/Removing Items from the Cart**
4. **Checkout Process (Ship to Different Address)**

### How to Run (Part 2)

```bash
# Install dependencies
npm install

# Run all tests with HTML report
npx playwright test --reporter=html

# View the test report
npx playwright show-report
```

> ✅ Test files are located in the `/tests` folder  
> ⚙️ Configuration is defined in `playwright.config.js`

---

## Part 3: API Testing

This part uses the [Restful Booker API](https://restful-booker.herokuapp.com/apidoc/index.html) to automate API testing with **Python + Pytest**.

### Tested Scenarios

- ✅ **Create a Booking** — via `POST` request
- 🔁 **Partially Update the Booking** — via `PATCH` request
- 📥 **Read the Updated Booking** — via `GET` request
- ❌ **Delete the Booking** — via `DELETE` request

### How to Run (Part 3)

```bash
# Install dependencies
pip install -r requirements.txt

# Run all API tests
python -m pytest tests/
```

> 🧪 API test files are located in the `/tests` folder under the API section  
> 💡 All requests and validations are implemented using `requests` and `pytest`

---

## Author

**Setthakarn Boston**
