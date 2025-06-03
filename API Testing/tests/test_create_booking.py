import requests
import pytest

# Base URL for the API
BASE_URL = "https://restful-booker.herokuapp.com"

# Function to get the authentication token
def get_auth_token():
    url = f"{BASE_URL}/auth"
    
    # Data to be sent for authentication
    auth_data = {
        "username": "admin",
        "password": "password123"
    }
    
    response = requests.post(url, json=auth_data)
    
    if response.status_code == 200:
        token = response.json().get("token")
        print("Authentication Successful. Token:", token)
        return token
    else:
        pytest.fail("Authentication failed")

# Test case to create a booking
def test_create_booking():
    # Get the auth token
    token = get_auth_token()
    url = f"{BASE_URL}/booking"
    
    # Headers with the token
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {token}"
    }
    
    # Data to create a new booking
    booking_data = {
        "firstname": "Boston",
        "lastname": "Ss",
        "totalprice": 123,
        "depositpaid": True,
        "bookingdates": {
            "checkin": "2025-01-01",
            "checkout": "2025-01-02"
        },
        "additionalneeds": "Breakfast"
    }
    
    # Make the POST request to create the booking
    response = requests.post(url, json=booking_data, headers=headers)
    
    # Assert the status code is 200 (OK)
    assert response.status_code == 200
    
    # Extract the booking ID from the response
    booking_id = response.json().get("bookingid")
    
    # Assert the booking ID exists
    assert booking_id is not None, "Booking ID should not be None"
    
    # Assert that the booking data matches the response data
    assert response.json()["booking"]["firstname"] == "Boston"
    assert response.json()["booking"]["lastname"] == "Ss"
    assert response.json()["booking"]["totalprice"] == 123
    assert response.json()["booking"]["depositpaid"] == True
    assert response.json()["booking"]["bookingdates"]["checkin"] == "2025-01-01"
    assert response.json()["booking"]["bookingdates"]["checkout"] == "2025-01-02"
