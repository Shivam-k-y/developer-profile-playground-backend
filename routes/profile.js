const express = require('express');
const Profile = require('../models/profile');
const router = express.Router();

// GET profile
router.get('/', async (req, res) => {
  try {
    const profile = await Profile.findOne();
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// CREATE or UPDATE profile
router.post('/', async (req, res) => {
  try {
    // Since we only have one profile, we'll upsert
    const profile = await Profile.findOneAndUpdate(
      {}, 
      req.body, 
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    res.json(profile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET projects by skill
router.get('/projects', async (req, res) => {
  try {
    const { skill } = req.query;
    const profile = await Profile.findOne();
    
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    
    let projects = profile.projects;
    if (skill) {
      projects = projects.filter(project => 
        project.skills.some(s => s.toLowerCase().includes(skill.toLowerCase()))
      );
    }
    
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET top skills
router.get('/skills/top', async (req, res) => {
  try {
    const profile = await Profile.findOne();
    
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    
    // For simplicity, return all skills
    // In a real app, you might calculate top skills based on proficiency or usage
    res.json(profile.skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// SEARCH across multiple fields
router.get('/search', async (req, res) => {
  try {
    const { q } = req.query;
    const profile = await Profile.findOne();
    
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    
    if (!q) {
      return res.status(400).json({ message: 'Query parameter "q" is required' });
    }
    
    const searchTerm = q.toLowerCase();
    const results = {
      skills: profile.skills.filter(skill => 
        skill.toLowerCase().includes(searchTerm)
      ),
      projects: profile.projects.filter(project => 
        project.title.toLowerCase().includes(searchTerm) ||
        project.description.toLowerCase().includes(searchTerm) ||
        project.skills.some(skill => skill.toLowerCase().includes(searchTerm))
      ),
      education: profile.education.filter(edu => 
        edu.degree.toLowerCase().includes(searchTerm) ||
        edu.institution.toLowerCase().includes(searchTerm) ||
        (edu.fieldOfStudy && edu.fieldOfStudy.toLowerCase().includes(searchTerm))
      ),
      work: profile.work.filter(job => 
        job.position.toLowerCase().includes(searchTerm) ||
        job.company.toLowerCase().includes(searchTerm) ||
        (job.description && job.description.toLowerCase().includes(searchTerm))
      )
    };
    
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;