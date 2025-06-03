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

# Helper function to create a booking
def create_booking(token):
    url = f"{BASE_URL}/booking"
    
    # Headers without the Authorization, using Cookie instead
    headers = {
        "Content-Type": "application/json",
        "Accept": "application/json"
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
    response = requests.post(url, json=booking_data, headers=headers, cookies={"token": token})
    
    # Assert the status code is 200 (OK)
    assert response.status_code == 200
    
    # Extract the booking ID from the response
    booking_id = response.json().get("bookingid")
    
    # Assert the booking ID exists
    assert booking_id is not None, "Booking ID should not be None"
    
    return booking_id

# Test case to partially update a booking
def test_update_booking():
    # Get the auth token
    token = get_auth_token()
    
    # Create a booking to update
    booking_id = create_booking(token)
    url = f"{BASE_URL}/booking/{booking_id}"
    
    # Headers with no Authorization, only the Cookie header
    headers = {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
    
    # Data to partially update the booking
    update_data = {
        "firstname": "Katsu"
    }
    
    # Make the PATCH request to update the booking, passing token in the cookies
    response = requests.patch(url, json=update_data, headers=headers, cookies={"token": token})
    print("Response Status Code:", response.status_code)
    print("Response Text:", response.text)

    # Assert the status code is 200 (OK)
    assert response.status_code == 200, f"Failed to update booking. Response code: {response.status_code}. Response: {response.text}"
    
    # Assert the updated field is correct
    assert response.json()["firstname"] == "Katsu"
    
    # verify that other data
    assert response.json()["lastname"] == "Ss"
    assert response.json()["totalprice"] == 123
    assert response.json()["depositpaid"] == True
    assert response.json()["bookingdates"]["checkin"] == "2025-01-01"
    assert response.json()["bookingdates"]["checkout"] == "2025-01-02"
