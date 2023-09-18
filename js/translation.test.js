import { translate } from "./translation.js";

describe("translate", () => {
  const englishInMorseCode = ". -. --. .-.. .. ... ....";
  const withSpacesInMorseCode = ".-- .. - .... / ... .--. .- -.-. . ...";
  const mixedStringInMorseCode = "-- .. -..- . -.. / ... - .-. .. -. --.";

  it("translates English letters to Morse Code", () => {
    expect(translate("English", "Morse Code")).toBe(englishInMorseCode);
    expect(translate("With spaces", "Morse Code")).toBe(withSpacesInMorseCode);
  });

  it("translates Morse Code to English letters", () => {
    expect(translate(englishInMorseCode, "English")).toBe("English");
    expect(translate(withSpacesInMorseCode, "English")).toBe("With spaces");
  });

  it("removes Morse Code symbols from mixed strings and translates them", () => {
    expect(translate("mixed..-- string/--", "Morse Code")).toBe(
      mixedStringInMorseCode
    );
    expect(translate(mixedStringInMorseCode, "English")).toBe("Mixed string");
  });

  it("handles empty strings", () => {
    expect(translate("", "Morse Code")).toBe("");
    expect(translate("", "English")).toBe("");
  });

  // Write tests for handling strings that are neither Morse Code nor English or test this feature in other function tests
});
