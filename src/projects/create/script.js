mobiscroll.select('#multiple-group-select', {
    inputElement: document.getElementById('my-input'),
    touchUi: false
});

function addChapter() {
    var textarea = document.createElement("textarea");
    textarea.setAttribute("id", "project-chapter");
  
    var button = document.getElementById("add-chapter");
    button.parentNode.insertBefore(textarea, button.nextSibling);
  }