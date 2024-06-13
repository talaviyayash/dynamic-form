import { emailRegex, nameRegex } from "../utils/regex";

export const registerForm = [
  {
    name: "fname",
    type: "text",
    required: {
      isRequired: true,
      defaultMsg: "Please enter First Name.",
    },
    attributes: {
      type: "text",
      name: "fname",
      id: "fname",

      placeholder: "First Name",
    },
    wrapElementStyle: {
      gridColumn: "4/7",
    },
    label: {
      innerText: "First Name",
      className: "font",
      htmlFor: "fname",
    },
    patterns: [
      {
        regex: nameRegex,
        error:
          "First Name only contain alphabets and spaces and minimum length is 2.",
      },
    ],
  },
  {
    name: "lname",
    type: "text",
    required: {
      isRequired: true,
      defaultMsg: "Please enter Last Name.",
    },
    attributes: {
      type: "text",
      name: "lname",
      id: "lname",

      placeholder: "Last Name",
    },
    wrapElementStyle: {
      gridColumn: "7/10",
    },
    label: {
      innerText: "Last Name",
      className: "font",
      htmlFor: "lname",
    },
    patterns: [
      {
        regex: nameRegex,
        error:
          "Last Name only contain alphabets and spaces and minimum length is 2.",
      },
    ],
  },
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
      gridColumn: "4/ 10",
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
      gridColumn: "4/ 10",
    },
    label: {
      innerText: "Password",
      className: "font",
      htmlFor: "password",
    },
    patterns: [
      {
        regex: nameRegex,
        error:
          "Last Name only contain alphabets and spaces and minimum length is 2.",
      },
    ],
  },
];
