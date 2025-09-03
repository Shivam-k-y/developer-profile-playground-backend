const mongoose = require('mongoose');
const Profile = require('./models/Profile');
require('dotenv').config();

const sampleData = {
  name: "SHIVAM KUMAR",
  email: "shivamky1729@gmail.com",
  education: [
    {
      institution: "Indian Institute of Information Technology Kottayam",
      degree: "Bachelor of Technology",
      fieldOfStudy: "Electronics and Communication Engineering",
      startDate: new Date("2022-11-16"),
      endDate: new Date("2026-04-30"),
      description: "Specialized in web development and algorithms"
    }
  ],
  skills: ["JavaScript", "Python", "React", "Node.js", "MongoDB", "HTML", "Tailwind CSS","MATLAB","C","C++","Socket.io", "Express", "GitHub"],
  projects: [
    {
      title: "Todos App",
      description: "A task management application with React ",
      skills: ["React", "JavaScript", "contexts", "CSS"],
      links: {
        github: "https://github.com/Shivam-k-y/NewTodoApp",
        demo: "https://new-todo-app-beryl.vercel.app/"
      }
    },
    {
      title: "SIP Calculator",
      description: "A productivity app for managing monthly investments",
      skills: ["React", "JavaScript", "CSS"],
      links: {
        github: "https://github.com/Shivam-k-y/sip-calculator",
        demo: "https://sip-calculator-ecru.vercel.app/"
      }
    },
    {
      title: "Currency Converter",
      description: "Built a real-time currency converter supporting 50+ currencies for instant conversion",
      skills: ["JavaScript", "API Integration", "CSS"],
      links: {
        github: "https://github.com/Shivam-k-y/CurrencyConvertor",
        demo: "#"
      }
    },
    {
      title: "Anonymous Chat Application",
      description: "A real-time chat application that allows users to communicate anonymously.",
      skills: ["JavaScript", "WebSocket", "React", "Vite", "Tailwind CSS", "Custom Hooks", "CSS"],
      links: {
        github: "https://github.com/Shivam-k-y/jamyy-backend",
        demo: "https://jamyy-client.onrender.com/"
      }
    },
    {
      title: "Food App",
      description: "A web application for food delivery and restaurant management.",
      skills: ["JavaScript", "API Integration", "CSS"],
      links: {
        github: "https://github.com/Shivam-k-y/Food-app-v1",
        demo: "https://food-app-nine-sand.vercel.app/"
      }
    },{
      title: "Currency Converter",
      description: "Built a real-time currency converter supporting 50+ currencies for instant conversion",
      skills: ["JavaScript", "API Integration", "CSS"],
      links: {
        github: "https://github.com/Shivam-k-y/CurrencyConvertor",
        demo: "#"
      }
    }
  ],
  work: [
    {
      company: "Tech Solutions Inc Dummy Data",
      position: "Full Stack Developer",
      startDate: new Date("2019-07-01"),
      endDate: null,
      description: "This is show only for dummy data"
    },
    {
      company: "Web Startup Dummy Data",
      position: "Frontend Developer Intern",
      startDate: new Date("2018-06-01"),
      endDate: new Date("2018-08-31"),
      description: "IThis is show only for dummy data"
    }
  ],
  links: {
    github: "https://github.com/Shivam-k-y",
    linkedin: "https://www.linkedin.com/in/shivamky/",
    portfolio: "https://portfolioshivam-ten.vercel.app/"
  }
};

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/developerProfile', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Delete existing data
    await Profile.deleteMany({});

    // Insert sample data
    await Profile.create(sampleData);
    
    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();