function addH1() {
    const textarea = document.getElementById('project-content'); // Change 'project-content' to the ID of the textarea (or other elements) that you want to have FontFlex to be working on.
    const currentLine = textarea.value.substr(0, textarea.selectionStart).split('\n').length;
    const lines = textarea.value.split('\n');
    
    if (currentLine <= lines.length) {
      const currentLineText = lines[currentLine - 1];
      textarea.value += '<span id="frmt-h1">' + currentLineText + '</span>';
      textarea.style.fontSize = '26px';
      textarea.style.fontWeight = 'bold';
      textarea.style.color = '#3662E3';
    }
  }
  
  function addH2() {
    const textarea = document.getElementById('project-content');
    const currentLine = textarea.value.substr(0, textarea.selectionStart).split('\n').length;
    const lines = textarea.value.split('\n');
    
    if (currentLine <= lines.length) {
      const currentLineText = lines[currentLine - 1];
      textarea.value += '<span id="frmt-h2">' + currentLineText + '</span>';
      textarea.style.fontSize = '22px';
      textarea.style.fontWeight = 'bold';
      textarea.style.color = '#3662E3';
    }
  }
  
  function addH3() {
    const textarea = document.getElementById('project-content');
    const currentLine = textarea.value.substr(0, textarea.selectionStart).split('\n').length;
    const lines = textarea.value.split('\n');
    
    if (currentLine <= lines.length) {
      const currentLineText = lines[currentLine - 1];
      textarea.value += '<span id="frmt-h3">' + currentLineText + '</span>';
      textarea.style.fontSize = '16px';
      textarea.style.fontWeight = '600';
      textarea.style.color = '#3662E3';
    }
  }
  
  function returnToNormalFont() {
    const textarea = document.getElementById('project-content');
    textarea.value = textarea.value.replace(/<[^>]+>/g, ''); // Remove HTML tags
    textarea.style.fontSize = '14px';
    textarea.style.fontWeight = '400';
    textarea.style.color = '#000000';
  }
