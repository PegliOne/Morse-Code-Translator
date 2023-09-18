// Imports

import {
  updateButtonText,
  getTranslationData,
  displayTranslation,
} from "./js/dom-interactions.js";
import { translate } from "./js/translation.js";

// Selectors

const translationTextArea = document.querySelector("#translationTextArea");
const translationForm = document.querySelector(".main__form");
const translationButton = document.querySelector(".form__button");
const translationHeading = document.querySelector("#translationHeading");
const translationContainer = document.querySelector("#translationContainer");

// Event Listeners

translationTextArea.addEventListener("change", (event) => {
  updateButtonText(translationButton, translationTextArea);
});

translationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const { contentToTranslate, targetLanguage } = getTranslationData(
    event,
    translationTextArea
  );

  const translation = translate(contentToTranslate, targetLanguage);
  displayTranslation(
    translation,
    targetLanguage,
    translationHeading,
    translationContainer
  );
});
