import {
  ageRegex,
  emailRegex,
  mobileNumberRegex,
  nameRegex,
} from "../utils/regex";

export const userInfoForm = [
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
      className: "input-text",
      placeholder: "First Name",
    },
    wrapElementStyle: {
      gridColumn: "2/6",
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
      className: "input-text",
      placeholder: "Last Name",
    },
    wrapElementStyle: {
      gridColumn: "7/11",
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
      className: "input-text",
      placeholder: "Email",
    },
    wrapElementStyle: {
      gridColumn: "2/6",
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
    name: "mobileNo",
    type: "text",
    required: {
      isRequired: true,
      defaultMsg: "Please enter valid Mobile No.",
    },
    attributes: {
      type: "text",
      name: "mobileNo",
      id: "mobileNo",
      className: "input-text",
      placeholder: " Mobile No.",
    },
    wrapElementStyle: {
      gridColumn: "7/11",
    },
    label: {
      innerText: "Mobile No.",
      className: "font",
      htmlFor: "mobileNo",
    },
    patterns: [
      {
        regex: mobileNumberRegex,
        error: "Mobile No only contain numbers and length of number is 10.",
      },
    ],
  },
  {
    name: "age",
    type: "text",
    required: {
      isRequired: false,
      defaultMsg: "Please enter valid Age.",
    },
    attributes: {
      type: "text",
      name: "age",
      id: "age",
      className: "input-text",
      placeholder: "Your Age.",
    },
    wrapElementStyle: {
      gridColumn: "2/6",
    },
    label: {
      innerText: "Age",
      className: "font",
      htmlFor: "age",
    },
    patterns: [
      {
        regex: ageRegex,
        error: "Age only contain numbers between 0 to 999.",
      },
    ],
  },
  {
    name: "dob",
    type: "text",
    required: {
      isRequired: true,
      defaultMsg: "Please enter valid Age date.",
    },
    attributes: {
      type: "date",
      name: "dob",
      id: "dob",
      className: "input-text",
      max: new Date().toISOString().slice(0, 10),
    },
    wrapElementStyle: {
      gridColumn: "7/11",
    },
    label: {
      innerText: "DOB",
      className: "font",
      htmlFor: "dob",
    },
  },
];
