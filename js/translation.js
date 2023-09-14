import { lettersToMorse, morseToLetters } from "./reference-data.js";

export const translate = (contentToTranslate, targetLanguage) => {
  if (targetLanguage === "Morse Code") {
    return translateToMorseCode(contentToTranslate);
  } else if (targetLanguage === "English") {
    return translateToEnglish(contentToTranslate);
  }
};

const translateToMorseCode = (contentToTranslate) => {
  const letters = contentToTranslate.toUpperCase().split("");
  const translationObject = lettersToMorse();
  const morseLetters = letters.map((letter) => translationObject[letter]);
  return morseLetters.join(" ");
};

const translateToEnglish = (contentToTranslate) => {
  const letters = contentToTranslate.split(" ");
  const translationObject = morseToLetters();
  const englishLetters = letters.map((letter) => translationObject[letter]);
  return formatEnglishText(englishLetters);
};

const formatEnglishText = (letters) => {
  // Capitalises the first letter and lowercases the rest
  return letters[0].toUpperCase() + letters.slice(1).join("").toLowerCase();     
}
