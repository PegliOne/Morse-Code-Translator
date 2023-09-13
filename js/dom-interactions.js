export const getTranslationData = (event, textarea) => {
  const contentToTranslate = textarea.value;
  const instruction = event.submitter.id;
  return { contentToTranslate, instruction };
};

export const displayTranslation = (translation) => {
  console.log("Translation displayed: " + translation);
};
