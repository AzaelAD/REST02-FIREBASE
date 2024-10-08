const { v4: uuidv4 } = require('uuid');
const db = require('../firebase');

async function getAllProjects() {
    const allProjects = await db.collection('projects').get();
    
    const projects = [];
    allProjects.forEach(doc => {
        projects.push({ id: doc.id, ...doc.data() });
    });
    return projects;
}

async function createProject(data) {
    const newProject = {
        name: data.name,
        description: data.description,
        startDate: data.startDate,
        endDate: data.endDate,
        status: data.status,
        budget: data.budget
    }
    const projectRef = await db.collection('projects').add(newProject);
    return { id: projectRef.id, ...newProject };
}

module.exports = {
    getAllProjects, createProject
}