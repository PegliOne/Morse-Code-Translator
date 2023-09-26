import { convertTranslationObject } from "./reference-data.js";

describe("convertTranslationObject", () => {
  const lettersToMorseObj = {
    A: ".-",
    B: "-...",
    C: "-.-.",
  };

  const morseToLettersObj = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
  };

  it("converts translation objects from one code into the other", () => {
    expect(convertTranslationObject(lettersToMorseObj)).toStrictEqual(
      morseToLettersObj
    );
  });
});
