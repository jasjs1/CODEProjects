function createProject(event) {
    event.preventDefault(); // Prevent form submission
  
    const projectTitle = document.querySelector('#project-title');
    const projectDescription = document.querySelector('#project-description');
    const imageInput = document.getElementById('project-cover');
    const file = imageInput.files[0];
  
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
  
      reader.onload = function (event) {
        const imageDataUrl = event.target.result;
  
        localStorage.setItem('savedImage', imageDataUrl);
        console.log('Image saved to localStorage!');
  
        var emailInput = document.querySelector('#email-input');
        var email = emailInput.value;
  
        if (projectTitle.value && projectDescription.value && imageInput.value) {
          localStorage.setItem('projectTitle', projectTitle.value);
          localStorage.setItem('projectDescription', projectDescription.value);
          localStorage.setItem('imageInput', imageInput.value);
        }
      };
    } else {
      alert('There was an error saving the Project. There was more than one non provided input. Please input meaningful content into the inputs.');
      console.error('There was an error saving the Project. There was more than one non provided input. Please input meaningful content into the inputs.');
    }
  }
  