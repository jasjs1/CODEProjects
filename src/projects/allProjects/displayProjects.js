const projectImageContainer = document.getElementById('project-image');
const projectTitleContainer = document.getElementById('project-title');
const skillLevelContainer = document.getElementById('project-skill-level');

// Load existing project details from local storage
const projectTitle = localStorage.getItem('projectTitle');
const skillLevel = localStorage.getItem('skillLevel');
const savedImage = localStorage.getItem('savedImage');

// Render project details
if (projectTitle && skillLevel && savedImage) {
  const imageElement = document.createElement('img');
  imageElement.src = savedImage;
  projectImageContainer.appendChild(imageElement);

  const titleElement = document.createElement('h2');
  titleElement.textContent = projectTitle;
  projectTitleContainer.appendChild(titleElement);

  const skillLevelElement = document.createElement('p');
  skillLevelElement.textContent = `${skillLevel}`;
  skillLevelContainer.appendChild(skillLevelElement);
} else {
  const noDetailsElement = document.createElement('p');
  noDetailsElement.textContent = 'No project details found.';
  skillLevelContainer.appendChild(noDetailsElement);
        }

