export const translate = (contentToTranslate, instruction) => {
  console.log(contentToTranslate);
  if (instruction === "translateToMorseCode") {
    return "Morse code translation";
  } else if (instruction === "translateToEnglish") {
    return "English translation";
  }
};
