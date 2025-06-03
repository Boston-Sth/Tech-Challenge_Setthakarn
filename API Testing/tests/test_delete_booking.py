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

# Test case to delete a booking
def test_delete_booking():
    # Get the auth token
    token = get_auth_token()
    
    # Create a booking to delete
    booking_id = create_booking(token)
    
    # URL to delete the booking
    url = f"{BASE_URL}/booking/{booking_id}"
    
    # Headers with no Authorization, only the Cookie header
    headers = {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
    
    # DELETE request
    response = requests.delete(url, headers=headers, cookies={"token": token})
    print("Response Status Code:", response.status_code)
    print("Response Text:", response.text)  

    # Assert the status code is 201 (Created), as per the documentation
    assert response.status_code == 201, f"Failed to delete booking. Response code: {response.status_code}. Response: {response.text}"
    
    # Make the GET request to read the booking
    get_response = requests.get(url, headers=headers, cookies={"token": token})
    
    # Assert that the status code is 404
    assert get_response.status_code == 404, f"Booking was not deleted. Response code: {get_response.status_code}. Response: {get_response.text}"
