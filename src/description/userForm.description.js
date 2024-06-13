import {
  emailRegex,
  emptyRegex,
  nameRegex,
  passwordRegex,
} from "../utils/regex";

export const configArray = [
  {
    name: "name",
    type: "text",
    required: {
      isRequired: true,
      defaultMsg: "Please enter name",
    },
    attributes: {
      type: "text",
      name: "name",
      id: "name",

      placeholder: "Enter name",
    },
    label: {
      innerText: "Name :-",
      className: "font",
      htmlFor: "name",
    },
    patterns: [
      // {
      //   regex: emptyRegex,
      //   error: "Name can't be empty",
      // },
      {
        regex: nameRegex,
        error: "Please enter a valid name",
      },
    ],
  },

  {
    name: "email",
    type: "text",
    required: {
      isRequired: true,
      defaultMsg: "Please enter name",
    },
    attributes: {
      type: "email",
      name: "email",
      id: "email",

      placeholder: "Enter email",
    },
    label: {
      innerText: "Email :-",
      className: "font",
      htmlFor: "email",
    },
    patterns: [
      {
        regex: emptyRegex,
        error: "Email can't be empty",
      },
      {
        regex: emailRegex,
        error: "Please enter a valid email",
      },
    ],
  },

  {
    name: "password",
    type: "text",
    required: {
      isRequired: true,
      defaultMsg: "Please enter name",
    },
    attributes: {
      name: "password",
      type: "password",
      id: "password",

      placeholder: "Enter password",
    },
    label: {
      innerText: "Password :-",
      className: "font",
      htmlFor: "password",
    },
    patterns: [
      {
        regex: passwordRegex,
        error: "Password is not valid",
      },
    ],
  },

  {
    name: "gender",
    type: "radio",
    required: {
      isRequired: true,
      defaultMsg: "Please enter name",
    },
    label: {
      innerText: "Gender :-",
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
          className: "for-redio-check",
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
          className: "for-redio-check",
          htmlFor: "female",
        },
      },
    ],
    patterns: [
      {
        regex: emptyRegex,
        error: "Please select gender.",
      },
    ],
  },

  {
    name: "hobby",
    type: "checkbox",
    required: {
      isRequired: false,
      defaultMsg: "Please select at least one hobby",
    },
    children: [
      {
        attributes: {
          id: "Reading",
          name: "hobby",
          value: "Reading",
        },
        label: {
          innerText: "Reading",
          className: "for-radio-check",
          htmlFor: "Reading",
        },
      },
      {
        attributes: {
          id: "Traveling",
          name: "hobby",
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
          id: "Sports",
          name: "hobby",
          value: "Sports",
        },
        label: {
          innerText: "Sports",
          className: "for-radio-check",
          htmlFor: "Sports",
        },
      },
    ],
    label: {
      innerText: "Hobby :-",
      className: "font",
    },
  },

  {
    name: "country",
    type: "select",
    required: {
      isRequired: true,
      defaultMsg: "Please enter name",
    },
    attributes: {
      className: "select-box",
      name: "country",
      id: "country",
    },
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
        innerText: "Usa",
      },
    ],
    label: {
      innerText: "Country :-",
      className: "font select-box-text",
      htmlFor: "country",
    },
    patterns: [
      {
        regex: emptyRegex,
        error: "Please select Country.",
      },
    ],
  },

  {
    name: "state",
    type: "select",
    required: {
      isRequired: true,
      defaultMsg: "Please enter name",
    },
    attributes: {
      className: "select-box",
      name: "state",
      id: "state",
    },
    patterns: [
      {
        regex: emptyRegex,
        error: "Please select one State.",
      },
    ],
    children: [
      {
        value: "",
        innerText: "Select state",
      },
      {
        value: "1",
        innerText: "California",
      },
      {
        value: "2",
        innerText: "Texas",
      },
    ],
    label: {
      innerText: "State :-",
      className: "font select-box-text",
      htmlFor: "state",
    },
  },

  {
    name: "city",
    type: "select",
    required: {
      isRequired: true,
      defaultMsg: "Please enter name",
    },
    attributes: {
      className: "select-box",
      name: "city",
      id: "city",
    },
    patterns: [
      {
        regex: emptyRegex,
        error: "Please select one City.",
      },
    ],
    children: [
      {
        value: "",
        innerText: "Select state",
      },
      {
        value: "1",
        innerText: "Houston",
      },
      {
        value: "2",
        innerText: "Texas City",
      },
    ],
    label: {
      innerText: "City :-",
      className: "font select-box-text",
      htmlFor: "city",
    },
  },
];
