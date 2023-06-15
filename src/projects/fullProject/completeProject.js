// When the user clicks to complete the course, they will be able to come back to it later.

function pendCompleteProject() {
    console.log('Pending input to proceed with the completion of the project');
  
    function completeProject() {
      console.log('Completing project...');
      window.location.href = 'https://www.google.com';
    }
  
    function alertUserBeforeCompletingProject() {
      const result = window.confirm("Do you want to complete the Project? You can come back to this later...");
  
      if (result) {
        // User clicked "OK"
        completeProject();
      } else {
        // User clicked "Cancel" or closed the alert
        console.log("Project completion canceled.");
      }
    }
  
    alertUserBeforeCompletingProject();
  }
  

  