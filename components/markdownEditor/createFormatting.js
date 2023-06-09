document.addEventListener("DOMContentLoaded", function() {
    var paragraphs = document.getElementsByTagName("p");
    for (var i = 0; i < paragraphs.length; i++) {
      var paragraph = paragraphs[i];
      var paragraphText = paragraph.innerHTML;
      if (paragraphText.indexOf("##") !== -1) {
        paragraph.innerHTML = '<span class="custom-text">' + paragraphText + '</span>';
      } else if (paragraphText.indexOf("#") !== -1) {
        paragraph.innerHTML = '<span class="bigger-text">' + paragraphText + '</span>';
      }
    }
  });

  function addH1() {
    const textarea = document.getElementById('project-content');
    textarea.value += '# ';
    textarea.style.fontSize = '18px';
    textarea.style.fontWeight = 'bold';
  }

  function addH2() {
    const textarea = document.getElementById('project-content');
    textarea.value += '## ';
    textarea.style.fontSize = '16px';
  }

  function addH3() {
    const textarea = document.getElementById('project-content');
    textarea.value += '###';
    textarea.style.fontSize = '14px';
  }
