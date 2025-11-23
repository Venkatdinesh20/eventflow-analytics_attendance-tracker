# EventFlow Analytics - Deployment Guide

## Production Deployment Options

### 1. Docker Deployment (Recommended)

#### Prerequisites
- Docker installed on your system
- Docker Compose installed
- At least 2GB RAM available
- 10GB free disk space

#### Quick Start
```bash
# Clone the repository
git clone https://github.com/Venkatdinesh20/eventflow-analytics_attendance-tracker.git
cd eventflow-analytics_attendance-tracker

# Start all services
docker-compose up -d

# Check service status
docker-compose ps

# View logs
docker-compose logs -f
```

#### Services Overview
- **MongoDB**: Database service on port 27017
- **Backend API**: Node.js/Express service on port 5000
- **Frontend**: React application on port 3000
- **Nginx**: Reverse proxy on ports 80/443

### 2. Cloud Deployment

#### AWS Deployment
1. **EC2 Instance Setup**
   - Launch Ubuntu 20.04 LTS instance (t3.medium recommended)
   - Configure security groups: ports 22, 80, 443, 3000, 5000
   - Install Docker and Docker Compose

2. **RDS MongoDB Atlas**
   - Create MongoDB Atlas cluster
   - Update MONGODB_URI in docker-compose.yml
   - Configure IP whitelist

3. **Domain Configuration**
   - Point domain to EC2 public IP
   - Configure SSL certificates
   - Update nginx configuration

#### Heroku Deployment
```bash
# Install Heroku CLI
npm install -g heroku

# Login and create apps
heroku login
heroku create eventflow-backend
heroku create eventflow-frontend

# Add MongoDB addon
heroku addons:create mongolab:sandbox -a eventflow-backend

# Deploy backend
cd backend
git init
heroku git:remote -a eventflow-backend
git add .
git commit -m "Deploy backend"
git push heroku main

# Deploy frontend
cd ../frontend
git init
heroku git:remote -a eventflow-frontend
git add .
git commit -m "Deploy frontend"
git push heroku main
```

### 3. Environment Configuration

#### Production Environment Variables

**Backend (.env)**
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb://username:password@host:port/database
JWT_SECRET=your-super-secure-jwt-secret-minimum-32-characters
BCRYPT_ROUNDS=12
CORS_ORIGIN=https://your-frontend-domain.com
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

**Frontend (.env)**
```env
REACT_APP_API_URL=https://your-backend-domain.com/api
REACT_APP_ENV=production
REACT_APP_GOOGLE_ANALYTICS_ID=GA_TRACKING_ID
REACT_APP_SENTRY_DSN=SENTRY_ERROR_TRACKING_URL
```

### 4. Database Setup

#### MongoDB Collections
```javascript
// Users collection
db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email", "password", "role"],
      properties: {
        name: { bsonType: "string" },
        email: { bsonType: "string" },
        password: { bsonType: "string" },
        role: { enum: ["admin", "instructor", "student"] }
      }
    }
  }
});

// Events collection
db.createCollection("events", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["title", "date", "instructor"],
      properties: {
        title: { bsonType: "string" },
        date: { bsonType: "date" },
        instructor: { bsonType: "objectId" }
      }
    }
  }
});

// Attendance collection
db.createCollection("attendance", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["event", "student", "status"],
      properties: {
        event: { bsonType: "objectId" },
        student: { bsonType: "objectId" },
        status: { enum: ["present", "absent", "late"] }
      }
    }
  }
});
```

### 5. Performance Optimization

#### Backend Optimizations
- Enable Redis caching for frequent queries
- Implement database indexing
- Use compression middleware
- Enable HTTP/2 support
- Configure cluster mode for multi-core support

#### Frontend Optimizations
- Enable React production build
- Implement code splitting
- Configure service worker for caching
- Optimize bundle size with webpack-bundle-analyzer
- Enable GZIP compression

### 6. Security Checklist

#### Backend Security
- [ ] JWT tokens with secure expiration
- [ ] Input validation and sanitization
- [ ] Rate limiting implemented
- [ ] CORS properly configured
- [ ] Helmet.js security headers
- [ ] Environment variables secured
- [ ] Database connection encrypted
- [ ] API endpoints protected with authentication

#### Infrastructure Security
- [ ] SSL certificates configured
- [ ] Firewall rules configured
- [ ] Database access restricted
- [ ] Regular security updates
- [ ] Monitoring and logging enabled
- [ ] Backup strategy implemented

### 7. Monitoring and Maintenance

#### Health Checks
```bash
# API health check
curl https://your-api-domain.com/health

# Database connection check
curl https://your-api-domain.com/api/status

# Frontend availability
curl https://your-frontend-domain.com
```

#### Logging Setup
- Implement structured logging with Winston
- Configure log rotation
- Set up centralized logging with ELK stack
- Monitor error rates with Sentry
- Track performance with New Relic or DataDog

### 8. Backup and Recovery

#### Database Backup
```bash
# Create backup
mongodump --uri="mongodb://username:password@host:port/database" --out=backup-$(date +%Y%m%d)

# Restore backup
mongorestore --uri="mongodb://username:password@host:port/database" backup-20231123/
```

#### Application Backup
- Code repository on GitHub
- Environment configurations in secure storage
- SSL certificates backup
- Docker images in registry

### 9. Troubleshooting

#### Common Issues
1. **Connection Refused**: Check service status and ports
2. **CORS Errors**: Verify CORS_ORIGIN configuration
3. **JWT Invalid**: Check token expiration and secret key
4. **Database Connection**: Verify MongoDB URI and credentials
5. **Build Failures**: Check Node.js versions and dependencies

#### Debug Commands
```bash
# Check service logs
docker-compose logs service-name

# Enter container for debugging
docker exec -it container-name /bin/bash

# Check network connectivity
docker network ls
docker network inspect eventflow-network

# Monitor resource usage
docker stats
```

### 10. Scaling Considerations

#### Horizontal Scaling
- Load balancer configuration
- Database sharding strategies
- Session storage with Redis
- CDN for static assets
- Multi-region deployment

#### Performance Metrics
- Response time < 200ms
- Uptime > 99.9%
- Error rate < 0.1%
- Database query time < 50ms
- Memory usage < 80%

---

## Contact Information
- **Team Lead**: Venkat Dinesh Pasupuleti
- **GitHub**: https://github.com/Venkatdinesh20/eventflow-analytics_attendance-tracker
- **Support**: Create an issue on GitHub for technical support