# FontFlex

FontFlex is a versatile framework for effortless management and customization of font sizes in buttons and text areas. It empowers developers to create visually consistent and aesthetically pleasing user interfaces.

## Usage

## Recommended:
1. Download the FontFlex repository as a .zip file and unzip it.
2. Place the 'FontFlexComponents' folder in your project, preferably in the same file path as the FontFlex source code.
3. Downloading via the Terminal
4. You can also clone the FontFlex repository using the following command in your terminal:

Via Bash:
`` gh repo clone jasjs1/FontFlex ``

## License

This project is not bound by any specific license, which means you can use any code from this project freely. However, if you build something based on this framework, it would be appreciated if you credit the FontFlex project.

## Important Notices:

1. Do not change any of the link, or script folder paths. This can cause the FontFlex to not be functional, unless you change the folder paths.
## DO NOT CHANGE THESE LINES:
``
<script src="/FontFlexComponents/scripts/createFormatting.js"></script>
<link rel="stylesheet" href="/FontFlexComponents/styles/formatting.css">
`` 
2. Ensure that you change this line to the textarea that you want FontFlex to be workingo on.
``
 const textarea = document.getElementById('test-textarea'); // Change 'test-textarea' to the ID of the textarea (or other elements) that you want to have FontFlex to be working on.
``
3. If you do change any folder paths ensure that you change the folder path in this file: 'buttons.html'. Change these lines:
``
<script src="/FontFlexComponents/scripts/createFormatting.js"></script>
<link rel="stylesheet" href="/FontFlexComponents/styles/formatting.css">
``