const form = document.getElementById("createQuestionForm");

// Add an event listener to the form's submit event
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get the input values
  const titleInput = document.getElementById("question-title");
  const descriptionInput = document.getElementById("question-description");
  
  // Create an object to store the form data
  const question = {
    title: titleInput.value,
    description: descriptionInput.value
  };

  // Check if there are already saved questions in the local storage
  let savedQuestions = localStorage.getItem("questions");
  if (savedQuestions) {
    savedQuestions = JSON.parse(savedQuestions);
  } else {
    savedQuestions = [];
  }

  // Add the new question to the array of saved questions
  savedQuestions.push(question);

  // Save the updated questions to the local storage
  localStorage.setItem("questions", JSON.stringify(savedQuestions));

  // Reset the form inputs
  titleInput.value = "";
  descriptionInput.value = "";

  // Optional: Show a success message to the user
  alert("Question saved successfully!");
});
