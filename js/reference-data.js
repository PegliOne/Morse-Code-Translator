export const lettersToMorse = () => {
  return {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    " ": "/",
  };
};

export const convertTranslationObject = (translationObject) => {
  // Creates a new object with the keys and values of the morseLettersObject reversed
  return Object.entries(translationObject).reduce((newObj, entry) => {
    newObj[entry[1]] = entry[0];
    return newObj;
  }, {});
};
