#!/bin/bash
# setup.sh - Development Environment Setup Script
# EventFlow Analytics - Attendance Tracker

echo "🚀 EventFlow Analytics - Development Environment Setup"
echo "======================================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 16+ and try again."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node --version | cut -d'v' -f2)
REQUIRED_VERSION="16.0.0"

echo "📋 Checking Node.js version..."
echo "   Current: $NODE_VERSION"
echo "   Required: $REQUIRED_VERSION+"

# Check if MongoDB is installed (optional for development)
if command -v mongod &> /dev/null; then
    echo "✅ MongoDB is installed"
else
    echo "⚠️  MongoDB not found. You can use MongoDB Atlas for cloud database."
fi

echo ""
echo "📦 Installing dependencies..."

# Install root dependencies
echo "   Installing root dependencies..."
npm install

# Install backend dependencies
echo "   Installing backend dependencies..."
cd backend
npm install
cd ..

# Install frontend dependencies  
echo "   Installing frontend dependencies..."
cd frontend
npm install
cd ..

# Install mobile dependencies
echo "   Installing mobile dependencies..."
cd mobile
npm install
cd ..

# Copy environment files
echo ""
echo "⚙️  Setting up environment files..."

if [ ! -f .env ]; then
    cp .env.example .env
    echo "   Created .env file from .env.example"
    echo "   Please update the .env file with your configuration"
else
    echo "   .env file already exists"
fi

# Create log directories
echo ""
echo "📁 Creating necessary directories..."
mkdir -p logs
mkdir -p uploads
mkdir -p backups

echo "   Created logs/, uploads/, and backups/ directories"

echo ""
echo "🎉 Setup Complete!"
echo ""
echo "Next steps:"
echo "1. Update the .env file with your database and other configurations"
echo "2. Start MongoDB (if running locally): mongod"
echo "3. Start the development servers:"
echo "   - All services: npm run dev"
echo "   - Backend only: npm run dev:backend" 
echo "   - Frontend only: npm run dev:frontend"
echo "   - Mobile only: npm run dev:mobile"
echo ""
echo "4. Access the applications:"
echo "   - Backend API: http://localhost:3001"
echo "   - Frontend Web: http://localhost:3000"
echo "   - Mobile: Use Expo Go app with QR code"
echo ""
echo "Happy coding! 🎯"