import { lettersToMorse, morseToLetters } from "./reference-data.js";

export const translate = (contentToTranslate, instruction) => {
  if (instruction === "translateToMorseCode") {
    return translateToMorseCode(contentToTranslate);
  } else if (instruction === "translateToEnglish") {
    return translateToEnglish(contentToTranslate);
  }
};

// Convert into one function

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
  return englishLetters.join("");
};
