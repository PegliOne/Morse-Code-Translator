/**
 * @jest-environment jsdom
 */

import {
  updateButtonText,
  getTranslationData,
  displayTranslation,
} from "./dom-interactions.js";

const button = document.createElement("button");
const textarea = document.createElement("textarea");
const headingParagraph = document.createElement("p");
const translationContainer = document.createElement("strong");
const morseCodeText = "-- --- .-. ... .";

describe("updateButtonText with translatable textarea content", () => {
  it("sets button text to Morse Code for English inputs", () => {
    textarea.value = "English Text";
    updateButtonText(button, textarea);
    expect(button.textContent).toBe("Translate to Morse Code");
  });

  it("sets button text to English for Morse Code inputs", () => {
    textarea.value = morseCodeText;
    updateButtonText(button, textarea);
    expect(button.textContent).toBe("Translate to English");
  });
});

describe("updateButtonText without translatable textarea content", () => {
  it("handles empty strings", () => {
    textarea.value = "";
    updateButtonText(button, textarea);
    expect(button.textContent).toBe("Translate");
  });

  it("handles invalid strings", () => {
    textarea.value = "123";
    updateButtonText(button, textarea);
    expect(button.textContent).toBe("Translate");
  });
});

describe("getTranslationData with translatable textarea content", () => {
  it("sets target language to Morse Code for English inputs", () => {
    textarea.value = "English Text";
    expect(getTranslationData(textarea)).toStrictEqual({
      contentToTranslate: "English Text",
      targetLanguage: "Morse Code",
    });
  });

  it("sets target language to English for Morse Code inputs", () => {
    textarea.value = morseCodeText;
    expect(getTranslationData(textarea)).toStrictEqual({
      contentToTranslate: morseCodeText,
      targetLanguage: "English",
    });
  });
});

describe("getTranslationData without translatable textarea content", () => {
  it("handles empty strings", () => {
    textarea.value = "";
    expect(getTranslationData(textarea)).toStrictEqual({
      contentToTranslate: "",
      targetLanguage: null,
    });
  });

  it("handles invalid strings", () => {
    textarea.value = "123";
    expect(getTranslationData(textarea)).toStrictEqual({
      contentToTranslate: "123",
      targetLanguage: null,
    });
  });
});

describe("displayTranslation with translated content", () => {
  it("displays English text translations", () => {
    displayTranslation(
      "Translation",
      "English",
      headingParagraph,
      translationContainer
    );
    expect(
      headingParagraph.classList.contains("translation__para--heading--show")
    ).toBeTruthy();
    expect(
      translationContainer.classList.contains("translation__text--morse-code")
    ).toBeFalsy();
    expect(
      translationContainer.classList.contains("translation__text--invalid")
    ).toBeFalsy();
    expect(translationContainer.textContent).toBe("Translation");
  });

  it("displays Morse Code translations", () => {
    displayTranslation(
      morseCodeText,
      "Morse Code",
      headingParagraph,
      translationContainer
    );
    expect(
      headingParagraph.classList.contains("translation__para--heading--show")
    ).toBeTruthy();
    expect(
      translationContainer.classList.contains("translation__text--morse-code")
    ).toBeTruthy();
    expect(
      translationContainer.classList.contains("translation__text--invalid")
    ).toBeFalsy();
    expect(translationContainer.textContent).toBe(morseCodeText);
  });
});

describe("displayTranslation without translated content", () => {
  it("does not update the heading or translation container for empty strings", () => {
    // Set defaults for heading and translation container
    headingParagraph.classList.remove("translation__para--heading--show");
    translationContainer.classList.remove("translation__text--morse-code");
    translationContainer.classList.remove("translation__text--invalid");
    translationContainer.textContent = "";

    displayTranslation("", null, headingParagraph, translationContainer);

    // Test if default state is preserved
    expect(
      headingParagraph.classList.contains("translation__para--heading--show")
    ).toBeFalsy();
    expect(
      translationContainer.classList.contains("translation__text--morse-code")
    ).toBeFalsy();
    expect(
      translationContainer.classList.contains("translation__text--invalid")
    ).toBeFalsy();
    expect(translationContainer.textContent).toBe("");
  });

  it("displays the error message when target language is not provided", () => {
    displayTranslation(
      "Invalid language input",
      null,
      headingParagraph,
      translationContainer
    );
    expect(
      headingParagraph.classList.contains("translation__para--heading--show")
    ).toBeTruthy();
    expect(
      translationContainer.classList.contains("translation__text--morse-code")
    ).toBeFalsy();
    expect(
      translationContainer.classList.contains("translation__text--invalid")
    ).toBeTruthy();
    expect(translationContainer.textContent).toBe("Invalid language input");
  });
});
