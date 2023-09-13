export const getTranslationData = (event, textarea) => {
  const contentToTranslate = textarea.value;
  const instruction = event.submitter.id;
  return { contentToTranslate, instruction };
};

export const displayTranslation = (
  translation,
  instruction,
  heading,
  container
) => {
  heading.classList.add("translation__para--heading--show");
  toggleMorseCodeClass(instruction, container);
  container.textContent = translation;
};

const toggleMorseCodeClass = (instruction, container) => {
  if (instruction === "translateToMorseCode") {
    container.classList.add("translation__text--morse-code");
  } else if (instruction === "translateToEnglish") {
    container.classList.remove("translation__text--morse-code");
  }
};
