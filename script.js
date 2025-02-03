// script.js
document.addEventListener('DOMContentLoaded', () => {
    const experienceData = [
        { date: "2013-2016", title: "Technical Consultant", company: "Applexus Technologies Pvt", description: "Worked as Technical consultant in multiple end to end implementation working in technologies such as ABAP,SAP UI5 and sap screen personas" },
        { date: "2016-Present", title: "Senior Software Developer", company: "Applexus Technologies Inc", description:" As a senior consultant"}
        
    ];

    const projectsData = [
        { title: "Assistant AI with SAP", description: "Working on embedding Assistant AI within Fiori application using LLM Models to summarize results based on ODATA REST API Data set and automating task like charts to represent data in more visual form.Also to decode Payment files from different payment processor using AI LLM Models.Working with local LLM with Ollama", link: "https://salesanalyzerbysiva.streamlit.app/" },
        { title: "SeaWorld", description: "Working as a Onsite Development Technical Lead on S4 HANA migration project."}
    ];

    const certificationsData = [
        
        "SAP Certified Development Associate - Fiori Application Developer",
        "SAP Certified Development Specialist - ABAP for HANA 2.0",
        "Programming Using JavaScript",
        "Programming with React"
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