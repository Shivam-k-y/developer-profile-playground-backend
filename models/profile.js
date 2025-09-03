const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  skills: [String],
  links: {
    github: String,
    demo: String,
    other: String
  }
});

const EducationSchema = new mongoose.Schema({
  institution: {
    type: String,
    required: true
  },
  degree: {
    type: String,
    required: true
  },
  fieldOfStudy: String,
  startDate: Date,
  endDate: Date,
  description: String
});

const WorkSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  startDate: Date,
  endDate: Date,
  description: String
});

const LinksSchema = new mongoose.Schema({
  github: String,
  linkedin: String,
  portfolio: String,
  other: String
});

const ProfileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  education: [EducationSchema],
  skills: [String],
  projects: [ProjectSchema],
  work: [WorkSchema],
  links: LinksSchema
}, {
  timestamps: true
});

module.exports = mongoose.model('Profile', ProfileSchema);