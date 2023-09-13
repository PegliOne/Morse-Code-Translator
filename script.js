// Imports

import {
  getTranslationData,
  displayTranslation,
} from "./js/dom-interactions.js";
import { translate } from "./js/translation.js";

// Selectors

const translationTextArea = document.querySelector("#translationTextArea");
const translationForm = document.querySelector(".main__form");
const translationHeading = document.querySelector("#translationHeading");
const translationContainer = document.querySelector("#translationContainer");

// Event Listener

translationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Replace with automatic language detection

  const { contentToTranslate, instruction } = getTranslationData(
    event,
    translationTextArea
  );

  if (!contentToTranslate) return;

  const translation = translate(contentToTranslate, instruction);
  displayTranslation(
    translation,
    instruction,
    translationHeading,
    translationContainer
  );
});
