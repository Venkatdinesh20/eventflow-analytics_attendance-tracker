# Testing Framework - EventFlow Analytics

## Overview

This directory contains the testing framework for the EventFlow Analytics project, including unit tests, integration tests, and end-to-end tests.

## Test Structure

```
tests/
├── unit/                    # Unit tests for individual functions/components
│   ├── backend/            # Backend unit tests
│   ├── frontend/           # Frontend component tests
│   └── mobile/             # Mobile component tests
├── integration/            # API and database integration tests
│   ├── auth.test.js       # Authentication flow tests
│   ├── events.test.js     # Event management tests
│   └── attendance.test.js # Attendance tracking tests
└── e2e/                   # End-to-end user workflow tests
    ├── user-registration.test.js
    ├── event-checkin.test.js
    └── report-generation.test.js
```

## Testing Tools

### Backend Testing
- **Jest**: JavaScript testing framework
- **Supertest**: HTTP assertion library
- **MongoDB Memory Server**: In-memory database for testing

### Frontend Testing  
- **React Testing Library**: React component testing
- **Jest**: Test runner and assertions
- **MSW (Mock Service Worker)**: API mocking

### Mobile Testing
- **Jest**: JavaScript testing framework
- **React Native Testing Library**: Component testing for React Native

## Running Tests

### All Tests
```bash
npm test
```

### Backend Tests Only
```bash
cd backend && npm test
```

### Frontend Tests Only
```bash
cd frontend && npm test
```

### Coverage Report
```bash
npm run test:coverage
```

## Test Coverage Goals

- **Unit Tests**: 85% coverage minimum
- **Integration Tests**: All API endpoints covered
- **E2E Tests**: Critical user workflows covered

## Sample Test Cases

### Unit Test Example
```javascript
// tests/unit/backend/userModel.test.js
const User = require('../../../backend/models/User');

describe('User Model', () => {
  test('should hash password before saving', async () => {
    const user = new User({
      name: 'Test User',
      email: 'test@college.edu',
      password: 'plainpassword',
      role: 'student'
    });
    
    await user.save();
    expect(user.password).not.toBe('plainpassword');
    expect(user.password).toHaveLength(60); // bcrypt hash length
  });
});
```

### Integration Test Example
```javascript
// tests/integration/auth.test.js
const request = require('supertest');
const app = require('../../backend/server');

describe('Authentication API', () => {
  test('POST /api/auth/register should create new user', async () => {
    const userData = {
      name: 'Test User',
      email: 'test@college.edu',
      password: 'password123',
      role: 'student'
    };
    
    const response = await request(app)
      .post('/api/auth/register')
      .send(userData)
      .expect(201);
      
    expect(response.body.success).toBe(true);
    expect(response.body.data.user.email).toBe(userData.email);
    expect(response.body.data.token).toBeDefined();
  });
});
```

## Test Data Management

### Test Database
- Uses MongoDB Memory Server for isolated testing
- Database is reset between test suites
- Test data is seeded as needed for each test

### Mock Data
```javascript
// tests/fixtures/mockData.js
module.exports = {
  users: {
    student: {
      name: 'Test Student',
      email: 'student@college.edu',
      password: 'password123',
      role: 'student',
      studentId: 'STU123456'
    },
    organizer: {
      name: 'Test Organizer', 
      email: 'organizer@college.edu',
      password: 'password123',
      role: 'organizer'
    }
  },
  events: {
    upcoming: {
      title: 'Test Event',
      description: 'Test event description',
      startDate: new Date(Date.now() + 86400000), // Tomorrow
      endDate: new Date(Date.now() + 90000000),
      location: 'Test Hall'
    }
  }
};
```

## Continuous Integration

### GitHub Actions Workflow
```yaml
name: Test Suite
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '16'
      - run: npm ci
      - run: npm test
      - run: npm run test:coverage
```

## Quality Gates

- All tests must pass before deployment
- Minimum 85% code coverage required
- No critical security vulnerabilities
- Performance benchmarks must be met

## Test Environment Variables

```env
# .env.test
NODE_ENV=test
JWT_SECRET=test_secret
MONGODB_URI=mongodb://localhost:27017/eventflow_test
RATE_LIMIT_WINDOW=1
RATE_LIMIT_MAX_REQUESTS=1000
```