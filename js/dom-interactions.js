export const updateButtonText = (button, textarea) => {
  const contentToTranslate = textarea.value;
  if (contentToTranslate.length === 0) {
    button.textContent = "Translate";
  }
  const targetLanguage = detectTranslationLanguage(contentToTranslate);
  button.textContent = `Translate to ${targetLanguage}`;
};

export const getTranslationData = (textarea) => {
  const contentToTranslate = textarea.value;
  const targetLanguage = detectTranslationLanguage(contentToTranslate);
  return { contentToTranslate, targetLanguage };
};

// Update this to handle neither morse code nor English strings and enters at the start of the content text

const detectTranslationLanguage = (contentToTranslate) => {
  return /[a-zA-Z]/.test(contentToTranslate) ? "Morse Code" : "English";
};

export const displayTranslation = (
  translation,
  targetLanguage,
  heading,
  container
) => {
  if (!translation) return;
  heading.classList.add("translation__para--heading--show");
  toggleMorseCodeClass(targetLanguage, container);
  container.textContent = translation;
};

const toggleMorseCodeClass = (targetLanguage, container) => {
  if (targetLanguage === "Morse Code") {
    container.classList.add("translation__text--morse-code");
  } else if (targetLanguage === "English") {
    container.classList.remove("translation__text--morse-code");
  }
};
