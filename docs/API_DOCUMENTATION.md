# EventFlow Analytics API Documentation

## Overview

The EventFlow Analytics API provides endpoints for managing college event attendance tracking, user authentication, and analytics reporting.

**Base URL**: `http://localhost:3001/api`
**Version**: 1.0.0
**Authentication**: JWT Bearer Token

---

## Authentication

### Register User
```http
POST /api/auth/register
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john.doe@college.edu",
  "password": "securepassword",
  "role": "student",
  "studentId": "STU123456",
  "department": "Computer Science",
  "yearOfStudy": 3
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": "user_id",
      "name": "John Doe",
      "email": "john.doe@college.edu",
      "role": "student"
    },
    "token": "jwt_token_here"
  }
}
```

### Login
```http
POST /api/auth/login
```

**Request Body:**
```json
{
  "email": "john.doe@college.edu",
  "password": "securepassword"
}
```

---

## Events

### Get All Events
```http
GET /api/events
```

### Create Event
```http
POST /api/events
```

**Headers:**
```
Authorization: Bearer jwt_token_here
```

**Request Body:**
```json
{
  "title": "Tech Talk: AI in Education",
  "description": "Discussion on AI applications in educational settings",
  "startDate": "2025-11-20T14:00:00Z",
  "endDate": "2025-11-20T16:00:00Z",
  "location": "Main Auditorium",
  "maxCapacity": 200
}
```

### Get Single Event
```http
GET /api/events/{eventId}
```

---

## Attendance

### Check In to Event
```http
POST /api/attendance/checkin
```

**Headers:**
```
Authorization: Bearer jwt_token_here
```

**Request Body:**
```json
{
  "eventId": "event_id_here",
  "checkInMethod": "qr"
}
```

### Check Out from Event
```http
POST /api/attendance/checkout
```

### Get Event Attendance
```http
GET /api/attendance/event/{eventId}
```

---

## Reports

### Get Attendance Report
```http
GET /api/reports/attendance?eventId={eventId}&startDate={date}&endDate={date}
```

### Get Dashboard Summary
```http
GET /api/reports/dashboard
```

---

## Error Responses

### Validation Error (400)
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "message": "Please enter a valid email"
    }
  ]
}
```

### Unauthorized (401)
```json
{
  "success": false,
  "message": "Invalid credentials"
}
```

### Not Found (404)
```json
{
  "success": false,
  "message": "API endpoint not found",
  "requestedUrl": "/api/invalid-endpoint"
}
```

### Server Error (500)
```json
{
  "success": false,
  "message": "Something went wrong!"
}
```

---

## Rate Limiting

- **Window**: 15 minutes
- **Max Requests**: 100 per IP
- **Headers**: 
  - `X-RateLimit-Limit`: 100
  - `X-RateLimit-Remaining`: 95
  - `X-RateLimit-Reset`: 1640995200

---

## Status Codes

| Code | Description |
|------|-------------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 429 | Too Many Requests |
| 500 | Internal Server Error |