
# API Testing - Restful Booker API

This repository contains automated API tests for the **Restful Booker API**. The tests are implemented using **Python** and **pytest**.

## Prerequisites

Before running the tests, ensure you have the following installed:

- **Python 3.x**
- **pip** (Python package installer)

## Setting Up a Virtual Environment (Optional but Recommended)

If you prefer to use a **virtual environment** to isolate your dependencies, follow these steps:

### 1. **Create a Virtual Environment**:

    In your project directory, run the following command to create a virtual environment called `env`:

    ```bash
    python -m venv env
    ```

### 2. **Activate the Virtual Environment:**:

    For PowerShell (Windows):

    ```bash
    .\env\Scripts\Activate
    ```

    For Command Prompt (Windows):

    ```bash
    env\Scripts\activate.bat
    ```

    For MacOS/Linux:

    ```bash
    source env/bin/activate
    ```

### 3. **Set Execution Policy (for PowerShell):**:

    If you are using PowerShell and encounter an error with activating the virtual environment, you may need to allow scripts to run by running:

    ```bash
    Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process
    ```

### 4. **Install Dependencies:**:

    After activating the virtual environment, install the required dependencies:

    ```bash
    pip install -r requirements.txt
    ```

## Installation

To set up the testing environment, follow these steps:

1. **Clone the repository**
2. **Install the required dependencies** by running the following command in your terminal:

    ```bash
    pip install -r requirements.txt
    ```

### Dependencies

The project requires the following Python libraries:

- **requests**: To send HTTP requests to the API.
- **pytest**: To organize and execute the tests.

## Test Scenarios

The repository includes tests for the following **Restful Booker API** endpoints:

1. **Create a Booking**: Validates the creation of a new booking via a `POST` request.
2. **Partially Update a Booking**: Validates the partial update of a booking via a `PATCH` request.
3. **Read a Booking**: Validates the retrieval of a booking using a `GET` request.
4. **Delete a Booking**: Validates the deletion of a booking via a `DELETE` request.

## How to Run the Tests

### 1. **Install Dependencies**

If you haven't done so already, install the required dependencies by running the following command:

```bash
pip install -r requirements.txt
```

### 2. **Run All Tests**

To run all tests in the `tests/` directory, use:

```bash
python -m pytest tests/
```

### 3. **Run Specific Tests**

To run specific tests, you can target individual test files:

```bash
python -m pytest tests/test_create_booking.py
python -m pytest tests/test_update_booking.py
python -m pytest tests/test_read_booking.py
python -m pytest tests/test_delete_booking.py
```

### 4. **View Test Results**

After running the tests, `pytest` will show the results in your terminal. If all tests pass, you'll see something like this:

```bash
===================== 4 passed in 0.XX seconds =====================
```

If any tests fail, `pytest` will display the error messages and tracebacks to help you debug the issue.

## Test Execution Details

Here’s a breakdown of what each test does:

- **Create a Booking**: Sends a `POST` request to the `/booking` endpoint to create a new booking.
- **Partially Update a Booking**: Sends a `PATCH` request to the `/booking/{id}` endpoint to update booking details such as `firstname`, `lastname`, etc.
- **Read the Booking**: Sends a `GET` request to the `/booking/{id}` endpoint to retrieve the details of a specific booking.
- **Delete a Booking**: Sends a `DELETE` request to the `/booking/{id}` endpoint to delete the specified booking.
