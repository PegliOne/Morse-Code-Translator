import { lettersToMorse, convertTranslationObject } from "./reference-data.js";

export const translate = (contentToTranslate, targetLanguage) => {
  if (!contentToTranslate) return "";
  const translationObject = lettersToMorse();
  if (targetLanguage === "Morse Code") {
    return translateToMorseCode(contentToTranslate, translationObject);
  } else if (targetLanguage === "English") {
    return translateToEnglish(contentToTranslate, translationObject);
  }
};

const translateToMorseCode = (contentToTranslate, translationObject) => {
  const letters = contentToTranslate.toUpperCase().split("");
  const morseLetters = letters.map((letter) => translationObject[letter]);
  return formatMorseCode(morseLetters);
};

const formatMorseCode = (letters) => {
  // Filters undefined values and returns a morse string
  return letters.filter((letter) => letter !== undefined).join(" ");
};

const translateToEnglish = (contentToTranslate, translationObject) => {
  const letters = contentToTranslate.split(" ");
  const morseTranslationObject = convertTranslationObject(translationObject);
  const englishLetters = letters.map(
    (letter) => morseTranslationObject[letter]
  );
  return formatEnglishText(englishLetters);
};

const formatEnglishText = (letters) => {
  // Capitalises the first letter and lowercases the rest
  return letters[0].toUpperCase() + letters.slice(1).join("").toLowerCase();
};
