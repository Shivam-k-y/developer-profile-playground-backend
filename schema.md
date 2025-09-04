# Developer Profile Playground

## A full-stack application to showcase and manage developer profiles with search capabilities.

# Architecture
Frontend: React.js with functional components and hooks

Backend: Node.js with Express.js

Database: MongoDB with Mongoose ODM

Deployment:

Frontend: vercel

Backend: vercel

Database: MongoDB Atlas

# Features
CRUD operations for developer profiles

Search projects by skills

Global search across all profile data

Skills listing with click-to-filter functionality

Responsive UI

# Live Demo
Frontend: https://your-profile-playground.netlify.app

Backend API: https://your-backend.railway.app

Health Check: https://your-backend.railway.app/health

Repository
https://github.com/your-username/developer-profile-playground

Local Setup
Prerequisites
Node.js (v14 or higher)

MongoDB (local or Atlas)

Git

Backend Setup
Clone the repository

Navigate to backend directory: cd backend

Install dependencies: npm install

Create .env file:

text
MONGODB_URI=mongodb://localhost:27017/developerProfile
PORT=5000
Seed the database: npm run seed

Start the server: npm run dev

Frontend Setup
Navigate to frontend directory: cd frontend

Install dependencies: npm install

Create .env file:

text
REACT_APP_API_URL=http://localhost:5000
Start the application: npm start

Production Deployment
Backend (Railway)
Connect your GitHub repo to Railway

Set environment variables in Railway dashboard

Deploy automatically on push to main

Frontend (Netlify)
Build the app: npm run build

Drag and drop build folder to Netlify or connect GitHub

Set environment variable: REACT_APP_API_URL to your deployed backend URL

Database (MongoDB Atlas)
Create a free cluster on MongoDB Atlas

Get connection string

Update MONGODB_URI in your production environment

Database Schema
The application uses a single Profile collection with the following structure:

{
  name: String,
  email: String,
  education: [{
    institution: String,
    degree: String,
    fieldOfStudy: String,
    startDate: Date,
    endDate: Date,
    description: String
  }],
  skills: [String],
  projects: [{
    title: String,
    description: String,
    skills: [String],
    links: {
      github: String,
      demo: String,
      other: String
    }
  }],
  work: [{
    company: String,
    position: String,
    startDate: Date,
    endDate: Date,
    description: String
  }],
  links: {
    github: String,
    linkedin: String,
    portfolio: String,
    other: String
  },
  createdAt: Date,
  updatedAt: Date
}


API Documentation
Endpoints
GET /api/profile - Get profile data

POST /api/profile - Create/update profile

GET /api/profile/projects?skill=python - Get projects by skill

GET /api/profile/skills/top - Get all skills

GET /api/profile/search?q=react - Search across all content

GET /health - Health check

Future Enhancements
Add authentication for write operations

Improve input validation and error handling

Support for multiple profiles

Resume
Your Name's Resume