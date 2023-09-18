export const updateButtonText = (button, textarea) => {
  const contentToTranslate = textarea.value;
  const targetLanguage = detectTargetLanguage(contentToTranslate);
  button.textContent = targetLanguage
    ? `Translate to ${targetLanguage}`
    : "Translate";
};

export const getTranslationData = (textarea) => {
  const contentToTranslate = textarea.value.trim();
  const targetLanguage = detectTargetLanguage(contentToTranslate);
  return { contentToTranslate, targetLanguage };
};

const detectTargetLanguage = (contentToTranslate) => {
  if (/[a-zA-Z]/.test(contentToTranslate)) return "Morse Code";
  if (/[.-/]/.test(contentToTranslate)) return "English";
  return null;
};

export const displayTranslation = (
  translation,
  targetLanguage,
  heading,
  container
) => {
  if (!translation) return;
  heading.classList.add("translation__para--heading--show");
  toggleTranslationClasses(targetLanguage, container);
  container.textContent = translation;
};

const toggleTranslationClasses = (targetLanguage, container) => {
  container.classList.remove(
    "translation__text--morse-code",
    "translation__text--invalid"
  );
  if (!targetLanguage) {
    container.classList.add("translation__text--invalid");
  }
  if (targetLanguage === "Morse Code") {
    container.classList.add("translation__text--morse-code");
  }
};
