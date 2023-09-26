# Morse Code Translator

This is a web app that translates Morse Code into English text and vice versa.

## How To Use

Enter English or Morse Code text into the textarea, then click the "Translate" button and a translation will appear below the input. The textarea can then be updated the "Translate" button pressed again to view a new translation.

### Testing

To run the unit tests, open the project folder in the terminal. Run "npm install" to install the required node modules. The tests can then be run using "npm run test".

## Features

### Automatic Language Detection

Entering English or Morse Code text in the text area then clicking away from it will cause the "Translate" button's text to update to "Translate to Morse Code" or "Translate to English", respectively. This indicates that the target language has been automatically detected.

English text is defined (for the purposes of the app) as text containing at least one lowercase or uppercase English letter. Other characters will be filtered out.

Morse code text is defined as text that does not contain English letters, but that does contain morse code symbols (i.e. . - and /). When morse code text is detected, non-morse characters will be filtered out.

Text without either English letters or morse code symbols is treated as invalid.

### Formatting

English text is formatted with the first letter capitalised and all subsequent letters in lowercase

## Technologies Used

- HTML (including semantic elements and BEM class naming conventions)
- CSS (including using flexbox)
- SCSS (including the use of variables, mixins and modules)
- JavaScript (including the use of modules)
- Jest (including DOM testing)
- Git Version Control (including the creation of a develop branch)
