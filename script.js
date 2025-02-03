// script.js
document.addEventListener('DOMContentLoaded', () => {
    const experienceData = [
        
        { date: "2016 - Present", title: "Senior Software Developer", company: "Applexus Technologies Inc", description:"As a Lead Software Developer, I spearheaded end-to-end project implementations, specializing in front-end and back-end development within the SAP ecosystem. My expertise lies in building user-centric applications using SAP Fiori and UI5, leveraging JavaScript for dynamic interactions and complex logic.  I possess strong database skills, writing and optimizing HANA SQL queries for performance. A key focus of my role is performance tuning across the entire application stack, identifying bottlenecks and implementing solutions to ensure optimal responsiveness and scalability.  I led teams, mentored developers, and took ownership of the technical design and delivery of projects from conception to production.",skills : "Javascript, LLM, Python, UI5, SAP Fiori, SAP HANA, SQL, node.js, React" },
        { date: "2013 - 2016", title: "Technical Consultant", company: "Applexus Technologies Pvt LTD", description: "As an Technical Consultant, I contributed to end-to-end project implementations, focusing on the development and customization of SAP solutions.  My core skills include ABAP and ABAP Object-Oriented Programming (OO) for backend logic, enhancements, and integrations.  I also developed user interfaces using SAP UI5, creating modern and intuitive applications.  Additionally, I worked with SAP Screen Personas to simplify and personalize existing SAP screens, improving user experience and productivity. I worked within project teams, learning best practices and contributing to the technical delivery of solutions.", skills: "SAP ABAP,UI5, SAP Screen personas, Javascript, HTML5, CSS, node.js" },
        
    ];

    const projectsData = [
        { title: "Assistant AI with SAP", description: "I developed an assistant AI capable of generating charts directly from SAP data. This involved integrating with SAP systems to extract relevant information and then using a charting library (e.g., Chart.js, D3.js) to visualize the data.  Furthermore, I explored the use of offline Large Language Models (LLMs) by leveraging Ollama. This allowed for local processing of natural language queries to generate insights from data, enhancing data accessibility and enabling analysis even without an internet connection.  This work demonstrated my ability to bridge the gap between structured SAP data and user-friendly visualizations, while also exploring the potential of offline LLMs for data analysis.", link: "https://salesanalyzerbysiva.streamlit.app/" },
        { title: "SeaWorld", description: "At SeaWorld, I led the technical team for a greenfield SAP S4 HANA transformation project. This involved a comprehensive implementation, encompassing ABAP RICEF (Reports, Interfaces, Conversions, Enhancements, Forms) development to meet specific business requirements.  I also oversaw the enhancement of standard Fiori applications to tailor them to SeaWorld's unique processes.  My role required strong JavaScript skills to implement custom logic and enhance the user experience within the Fiori framework.  This project provided valuable experience in leading a technical team through a full lifecycle SAP S4 HANA implementation." },
        { title: "PetSmart", description: "At PetSmart, I served as the Technical Lead for the CAR (Customer Activity Repository) project.  My focus was on optimizing data access and performance using a variety of HANA technologies.  This involved developing Core Data Services (CDS) views for efficient data modeling and retrieval.  I also utilized HANA AMDP (Advanced SQL Scripting for HANA) procedures for complex data transformations and calculations within the database.  Strong HANA SQL skills were essential for writing optimized queries, and I dedicated significant effort to SQL fine-tuning to ensure the CAR system could handle PetSmart's data volume and performance requirements.  This project showcased my ability to lead technical development and optimize database performance within a HANA environment." },
        { title: "Costco Wholesale", description: "At Costco Wholesale, I worked as a Senior Software Developer on a merchandising project, contributing to the development and enhancement of critical business processes. My primary focus was on leveraging SAP ABAP for custom development and integrations within the merchandising module.  I utilized Business Rules Framework plus (BRF+) to implement complex pricing rules and approval workflows.  Additionally, I developed Fiori applications to provide a modern and user-friendly interface for merchandising-related tasks, improving efficiency and accessibility for Costco's merchandising team.  This experience demonstrates my ability to work on large-scale SAP projects within a complex retail environment, utilizing a combination of ABAP, BRF+, and Fiori technologies." },
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
                ${item.skills ? `<p>Skills: ${item.skills}</p>` : ''}
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