# Database Schema

## Profile Collection

### Document Structure
```javascript
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