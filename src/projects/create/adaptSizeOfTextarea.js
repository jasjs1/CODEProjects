const textarea = document.getElementsByClassName('project-content')[0]; // Select the first element in the collection

textarea.addEventListener('input', function() {
  this.style.height = 'auto';
  this.style.height = this.scrollHeight + 'px';
});
