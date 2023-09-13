// Imports

import {
  getTranslationData,
  displayTranslation,
} from "./js/dom-interactions.js";
import { translate } from "./js/translation.js";

// Selectors

const translationTextArea = document.querySelector("#translationTextArea");
const translationForm = document.querySelector(".main__form");

// Event Listener

translationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const { contentToTranslate, instruction } = getTranslationData(
    event,
    translationTextArea
  );

  const translation = translate(contentToTranslate, instruction);
  displayTranslation(translation);
});
