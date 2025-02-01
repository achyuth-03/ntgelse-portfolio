const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Serve the static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'web.html'));
});

// Sample projects data
const projects = [
    { title: 'Project Title 1', description: 'Description of project 1' },
    { title: 'Project Title 2', description: 'Description of project 2' },
];

// Endpoint to get projects
app.get('/api/projects', (req, res) => {
    res.json(projects);
});

// Endpoint to handle contact form submissions
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    // Implement actual email sending logic here
    console.log(`Message from ${name} (${email}): ${message}`);
    res.status(200).send('Message received');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
