// script.js
document.addEventListener('DOMContentLoaded', () => {
    const experienceData = [
        { date: "2022 - Present", title: "Software Engineer", company: "Company A", description: "Developed and maintained web applications using React, Node.js, and AWS." },
        // ... more experience entries
    ];

    const projectsData = [
        { title: "Project 1", description: "A brief description of your project.  Mention technologies used.", link: "project1-link" },
        // ... more project entries
    ];

    const certificationsData = [
        "AWS Certified Solutions Architect",
        "Certified Scrum Master",
        // ... more certifications
    ];

    populateTimeline(experienceData);
    populateProjects(projectsData);
    populateCertifications(certificationsData);
});

function populateTimeline(data) {
    const timeline = document.querySelector('.timeline');
    data.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.classList.add('timeline-item');
        timelineItem.innerHTML = `
            <div class="timeline-date">${item.date}</div>
            <div class="timeline-content">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                ${item.company ? `<p>Company: ${item.company}</p>` : ''}
            </div>
        `;
        timeline.appendChild(timelineItem);
    });
}

function populateProjects(data) {
    const projectGrid = document.querySelector('.project-grid');
    data.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            ${project.link ? `<a href="${project.link}" target="_blank">View Project</a>` : ''}
        `;
        projectGrid.appendChild(projectDiv);
    });
}

function populateCertifications(data) {
    const certList = document.querySelector('.certification-list');
    data.forEach(cert => {
        const certItem = document.createElement('li');
        certItem.textContent = cert;
        certList.appendChild(certItem);
    });
}