import {
  emailRegex,
  oneDigitCaseLetter,
  oneLowerCaseLetter,
  oneSpecialCharacter,
  oneUpperCaseLetter,
} from "../utils/regex";

export const loginForm = [
  {
    name: "email",
    type: "text",
    required: {
      isRequired: true,
      defaultMsg: "Please enter Email.",
    },
    attributes: {
      type: "email",
      name: "email",
      id: "email",

      placeholder: "Email",
    },
    wrapElementStyle: {
      gridColumn: "4/10",
    },
    label: {
      innerText: "Email",
      className: "font",
      htmlFor: "email",
    },
    patterns: [
      {
        regex: emailRegex,
        error: "Email only contain alphabets , number , @ and (.) .",
      },
    ],
  },
  {
    name: "password",
    type: "text",
    required: {
      isRequired: true,
      defaultMsg: "Please enter Password.",
    },
    attributes: {
      type: "password",
      name: "password",
      id: "password",

      placeholder: "Password",
    },
    wrapElementStyle: {
      gridColumn: "4/10",
    },
    label: {
      innerText: "Password",
      className: "font",
      htmlFor: "password",
    },
    patterns: [
      {
        regex: oneLowerCaseLetter,
        error: "Password must include lower case alphabet.",
      },
      {
        regex: oneUpperCaseLetter,
        error: "Password must include upper case alphabet.",
      },
      {
        regex: oneDigitCaseLetter,
        error: "Password must include digit.",
      },
      {
        regex: oneSpecialCharacter,
        error: "Password must include one special character.",
      },
    ],
  },
];
