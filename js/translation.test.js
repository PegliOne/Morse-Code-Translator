import { translate } from "./translation.js";

describe("translate with valid inputs", () => {
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
});

describe("translate with invalid inputs", () => {
  it("handles empty strings", () => {
    expect(translate("", "Morse Code")).toBe("");
    expect(translate("", "English")).toBe("");
  });

  it("handles invalid strings", () => {
    expect(translate("123", null)).toBe("Invalid language input");
  });
});
