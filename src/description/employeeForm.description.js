import {
  emailRegex,
  emptyRegex,
  oneDigitCaseLetter,
  oneLowerCaseLetter,
  oneSpecialCharacter,
  oneUpperCaseLetter,
} from "../utils/regex";

export const employeeForm = [
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
  {
    name: "gender",
    type: "radio",
    required: {
      isRequired: true,
      defaultMsg: "Please enter gender",
    },
    label: {
      innerText: "Gender",
    },
    wrapElementStyle: {
      gridColumn: "4/7",
    },
    children: [
      {
        attributes: {
          name: "gender",
          id: "male",
          value: "Male",
        },
        label: {
          innerText: "Male",
          className: "for-radio-check",
          htmlFor: "male",
        },
      },
      {
        attributes: {
          name: "gender",
          id: "female",
          value: "Female",
        },
        label: {
          innerText: "Female",
          className: "for-radio-check",
          htmlFor: "female",
        },
      },
    ],
    patterns: [
      {
        regex: emptyRegex,
        error: "Please select Gender.",
      },
    ],
  },
  {
    name: "hobby",
    type: "checkbox",
    required: {
      isRequired: true,
      defaultMsg: "Please enter hobby",
    },
    label: {
      innerText: "Hobby",
    },
    wrapElementStyle: {
      gridColumn: "8/10",
    },
    children: [
      {
        attributes: {
          name: "reading",
          id: "reading",
          value: "Reading",
        },
        label: {
          innerText: "Reading",
          className: "for-radio-check",
          htmlFor: "reading",
        },
      },
      {
        attributes: {
          name: "Traveling",
          id: "Traveling",
          value: "Traveling",
        },
        label: {
          innerText: "Traveling",
          className: "for-radio-check",
          htmlFor: "Traveling",
        },
      },
      {
        attributes: {
          name: "Sports",
          id: "Sports",
          value: "Sports",
        },
        label: {
          innerText: "Sports",
          className: "for-radio-check",
          htmlFor: "Sports",
        },
      },
    ],
  },
  {
    name: "country",
    type: "select",
    required: {
      isRequired: true,
      defaultMsg: "Please select country",
    },
    attributes: {
      className: "select-box",
      name: "country",
      id: "country",
    },
    patterns: [
      {
        regex: emptyRegex,
        error: "Please select country.",
      },
    ],
    children: [
      {
        value: "",
        innerText: "Select country",
      },
      {
        value: "1",
        innerText: "India",
      },
      {
        value: "2",
        innerText: "USA",
      },
      {
        value: "3",
        innerText: "Canada",
      },
    ],
    label: {
      innerText: "Country",
      className: "font select-box-text",
      htmlFor: "country",
    },
    wrapElementStyle: {
      gridColumn: "4/7",
    },
  },
  {
    name: "dob",
    type: "text",
    required: {
      isRequired: true,
      defaultMsg: "Please enter Email.",
    },
    attributes: {
      type: "date",
      name: "dob",
      id: "dob",
      className: "input-dob",
      max: new Date().toISOString().slice(0, 10),
      style: { height: "30px", borderRadius: "5px", padding: "5px" },
    },
    wrapElementStyle: {
      gridColumn: "7/10",
    },
    label: {
      innerText: "DOB",
      className: "font",
      htmlFor: "dob",
    },
    patterns: [
      {
        regex: emptyRegex,
        error: "Please select date.",
      },
    ],
  },
  {
    name: "file",
    type: "text",
    required: {
      isRequired: true,
      defaultMsg: "Please select File.",
    },
    attributes: {
      type: "file",
      name: "file",
      id: "file",
      className: "input-dob",
      // webkitdirectory: "",
      // mozdirectory: "",
    },
    wrapElementStyle: {
      gridColumn: "4/8",
    },
    label: {
      innerText: "File",
      className: "font",
      htmlFor: "file",
    },
  },
];
