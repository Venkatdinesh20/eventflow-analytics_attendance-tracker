# EventFlow Analytics - Digital Attendance & Participation Tracker

## Project Overview

The Digital Attendance & Participation Tracker is a comprehensive solution designed to modernize event management for college campuses. This system replaces manual attendance tracking methods with a user-friendly digital platform that captures real-time attendance and feedback data.

## Purpose

College event organizers currently face significant challenges with manual attendance tracking methods that are:
- **Inefficient**: Time-consuming manual processes
- **Error-prone**: High risk of data entry mistakes  
- **Delayed**: Results available weeks after events

Our solution provides:
- **Real-time data collection** during events
- **Automated reporting** within 2 days post-event
- **Enhanced engagement insights** for better decision making
- **Cost reduction** through streamlined operations

## Features

### Core Functionality
- ✅ **Digital Check-in**: QR code and manual entry options
- ✅ **Real-time Dashboard**: Live attendance monitoring
- ✅ **Feedback Collection**: Post-event surveys and ratings
- ✅ **Automated Reporting**: Generate insights reports automatically
- ✅ **Mobile & Web Support**: Cross-platform accessibility

### Target Users
- **Event Organizers**: Faculty and student union staff
- **Participants**: All undergraduate students and faculty
- **Administrators**: College management and sponsors

## Technical Architecture

### Frontend
- **Mobile App**: React Native (iOS & Android)
- **Web Dashboard**: React.js with responsive design
- **UI Framework**: Material-UI components

### Backend
- **API**: Node.js with Express.js
- **Database**: PostgreSQL for data persistence
- **Authentication**: JWT-based secure authentication
- **Cloud Hosting**: AWS EC2 with RDS database

### Data Flow
```
Event Registration → QR Code Generation → Mobile Check-in → 
Real-time Dashboard → Data Analytics → Automated Reports
```

## Project Structure

```
eventflow-analytics_attendance-tracker/
├── README.md
├── docs/
│   ├── project-charter.md
│   ├── requirements.md
│   ├── technical-specs.md
│   └── user-guide.md
├── mobile-app/
│   ├── src/
│   ├── components/
│   ├── screens/
│   └── package.json
├── web-dashboard/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── package.json
├── backend/
│   ├── api/
│   ├── models/
│   ├── routes/
│   └── package.json
├── database/
│   ├── migrations/
│   ├── seeds/
│   └── schema.sql
└── tests/
    ├── unit/
    ├── integration/
    └── e2e/
```

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- PostgreSQL (v13 or higher)
- React Native development environment (for mobile)

### Development Environment Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Venkatdinesh20/eventflow-analytics_attendance-tracker.git
   cd eventflow-analytics_attendance-tracker
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Configure your database connection in .env
   npm run migrate
   npm run seed
   npm start
   ```

3. **Web Dashboard Setup**
   ```bash
   cd web-dashboard
   npm install
   npm start
   # Application will be available at http://localhost:3000
   ```

4. **Mobile App Setup**
   ```bash
   cd mobile-app
   npm install
   npx react-native run-ios     # For iOS
   npx react-native run-android # For Android
   ```

### Database Configuration

1. Create PostgreSQL database named `attendance_tracker`
2. Update connection strings in backend `.env` file
3. Run migrations to set up tables:
   ```bash
   npm run migrate
   ```

### Environment Variables

Create `.env` files in respective directories with the following:

**Backend (.env)**
```
DB_HOST=localhost
DB_PORT=5432
DB_NAME=attendance_tracker
DB_USER=your_username
DB_PASS=your_password
JWT_SECRET=your_jwt_secret
PORT=3001
```

**Frontend (.env)**
```
REACT_APP_API_URL=http://localhost:3001/api
REACT_APP_ENV=development
```

## Usage Guide

### For Event Organizers
1. **Create Event**: Set up event details and generate QR codes
2. **Monitor Attendance**: View real-time check-ins on dashboard
3. **Collect Feedback**: Deploy post-event surveys
4. **Generate Reports**: Access automated analytics and insights

### For Participants  
1. **Check-in**: Scan QR code or manual entry via mobile app
2. **Provide Feedback**: Complete post-event surveys
3. **View History**: Access personal attendance records

## Testing

### Run Test Suite
```bash
# Backend tests
cd backend && npm test

# Frontend tests  
cd web-dashboard && npm test

# Mobile tests
cd mobile-app && npm test
```

### Test Coverage
- Unit Tests: 85% coverage target
- Integration Tests: API endpoints and database operations  
- E2E Tests: Critical user workflows

## Project Goals & Metrics

### Success Metrics
- **90% Digital Capture Rate**: Achieve 90% digital attendance capture for all campus events in first semester
- **2-Day Reporting**: Generate event insights reports within 2 days post-event (vs. current 2 weeks)
- **40% Feedback Increase**: Increase post-event feedback participation by 40%

### Performance Targets
- **Concurrent Users**: Support 500+ simultaneous users
- **Uptime**: 99% availability during events
- **Response Time**: <2 seconds for check-in operations

## Team Information

### EventFlow Analytics Team
- **Venkat Dinesh Pasupuleti** - Project Manager & Lead Developer
- **Shalini Sirdhala** - Business Analyst & UX Designer  
- **Lokeshwar Reddy Tippani** - Backend Developer & Database Architect

### Roles & Responsibilities
- **Project Manager**: Overall coordination, stakeholder communication
- **Business Analyst**: Requirements gathering, user acceptance testing
- **Developers**: System architecture, coding, testing, deployment

## Contributing

### Development Workflow
1. Create feature branch from `main`
2. Develop and test locally
3. Submit pull request with description
4. Code review by team members
5. Merge after approval and testing

### Coding Standards
- Follow ESLint configuration
- Write unit tests for new features
- Document complex functions
- Use meaningful commit messages

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

### Documentation
- [Technical Specifications](docs/technical-specs.md)
- [User Guide](docs/user-guide.md)
- [API Documentation](docs/api-docs.md)

### Contact Information

#### Team Members
- **Venkat Dinesh Pasupuleti** - Project Manager & Technical Lead
  - Email: venkatdinesh60@gmail.com
  - GitHub: @Venkatdinesh20
  
- **Shalini Sirdhala** - Development Lead & UI/UX Designer
  - Email: SS2428@myscc.ca
  
- **Lokeshwar Reddy Tippani** - Business Analyst & Quality Assurance
  - Email: lokeshwar6984@gmail.com

#### Project Support
- **Repository Issues**: [GitHub Issues](https://github.com/Venkatdinesh20/eventflow-analytics_attendance-tracker/issues)
- **Documentation**: Available in `/docs` folder
- **Technical Support**: Contact project team via GitHub issues

## Acknowledgments

- College IT Department for infrastructure support
- Student Union for project sponsorship and feedback
- Beta testing participants for valuable insights

---

**Project Status**: In Development  
**Version**: 1.0.0  
**Last Updated**: November 23, 2025