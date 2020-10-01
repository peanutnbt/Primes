# # API Documentation

## Authentication

### 1. Customer Authentication

**Sign up** `http://localhost:6969/api/auth/customer/signup`

**Request**

This API require 3 params (other is optional):

- `request_id` to check weather the phone number has verified.
- `phone` user name
- `password` user password

**Response**

- 500 Server error
- 400 Phone number is not verified || Phone number are existed || Not provided 3 params
- 200 Created, return a JWT token

**Sign in** `http://localhost:6969/api/auth/customer/signin`

**Request**

This API require 2 params:

- `phone` user name
- `password` user password

**Response**

- 500 Server error
- 400 Not provided 2 params
- 401 User invalid (username or password)
- 200 Success, return a JWT token

**check before change phone** `/api/auth/customer/:id/check-before-change-phone`
