import {
  ageRegex,
  emailRegex,
  mobileNumberRegex,
  // emptyRegex,
  nameRegex,
  // passwordRegex,
} from "../utils/regex";

export const userForm = [
  {
    name: "fname",
    type: "text",
    required: {
      isRequired: true,
      defaultMsg: "Please enter Fname",
    },
    attributes: {
      type: "text",
      name: "fname",
      id: "fname",
      className: "input-text",
      placeholder: "Enter Fname",
    },
    label: {
      innerText: "Fname",
      className: "font",
      htmlFor: "fname",
    },
    patterns: [
      {
        regex: nameRegex,
        error: "Please enter a valid Fname.",
      },
    ],
  },
  {
    name: "lname",
    type: "text",
    required: {
      isRequired: true,
      defaultMsg: "Please enter Lname.",
    },
    attributes: {
      type: "text",
      name: "lname",
      id: "lname",
      className: "input-text",
      placeholder: "Enter Lname",
    },
    label: {
      innerText: "Lname",
      className: "font",
      htmlFor: "lname",
    },
    patterns: [
      {
        regex: nameRegex,
        error: "Please enter a valid Lname.",
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
      placeholder: "Enter Email",
    },
    label: {
      innerText: "Email",
      className: "font",
      htmlFor: "email",
    },
    patterns: [
      {
        regex: emailRegex,
        error: "Please enter a valid Email Address.",
      },
    ],
  },
  {
    name: "mobileNo",
    type: "text",
    required: {
      isRequired: true,
      defaultMsg: "Please enter valid Number.",
    },
    attributes: {
      type: "text",
      name: "mobileNo",
      id: "mobileNo",
      className: "input-text",
      placeholder: "Enter Mobile No.",
    },
    label: {
      innerText: "Mobile No.",
      className: "font",
      htmlFor: "mobileNo",
    },
    patterns: [
      {
        regex: mobileNumberRegex,
        error: "Please enter a valid Mobile No.",
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
      placeholder: "Enter your Age.",
    },
    label: {
      innerText: "Age",
      className: "font",
      htmlFor: "age",
    },
    patterns: [
      {
        regex: ageRegex,
        error: "Please enter a valid Age.",
      },
    ],
  },
];
