import { Tag } from "../../../src/domain/Tag";

const tagsThatAreTooShort = [
  "a",
  "a1",
];
tagsThatAreTooShort.forEach(tag => {
  test("Can't be less than three characters", () => {
    expect(() => Tag.fromString(tag)).toThrow(Error);
  });
});

const tagsWithInvalidChars = [
  "ab ",
  "a b c",
  "a_b_c",
  "ab!",
];
tagsWithInvalidChars.forEach(tag => {
  test("Can't contain other than letters, numbers, and dashes", () => {
    expect(() => Tag.fromString(tag)).toThrow(Error);
  });
});

const tagsWithDashesInTheFirstThreeChars = [
  "a1",
  " ab",
  "a b",
  "ab ",
  "---",
  "a--",
  "-a-",
  "--a",
  "-aa",
  "a-a",
  "aa-"
];
tagsWithDashesInTheFirstThreeChars.forEach(tag => {
  test("Can't contain any dash in the first three characters", () => {
    expect(() => Tag.fromString(tag)).toThrow(Error);
  });
});

const tagsThatAreValid = [
  "2fa",
  "tdd",
  "domain-driven-design",
  "hello-world"
 ];
 tagsThatAreValid.forEach(tag => {
   test("Can contain letters, numbers, dashes", () => {
     expect(() => Tag.fromString(tag)).not.toThrow(Error);
   });
 });