export const configArray = [
  {
    name: "name",
    type: "text",
    required: true,
    attributes: {
      type: "text",
      name: "name",
      id: "name",
      className: "input-text",
      placeholder: "Enter name",
    },
    label: {
      innerText: "Name :-",
      attributes: {
        className: "font",
        htmlFor: "name",
      },
    },
    patterns: [
      {
        regex: /^[0-9A-Za-z]{6,16}$/,
        error: "Name only have 0-9, A-z or a-z characters",
      },
    ],
  },
  {
    name: "email",
    type: "text",
    required: true,
    attributes: {
      type: "email",
      name: "email",
      id: "email",
      className: "input-text",
      placeholder: "Enter email",
    },
    label: {
      innerText: "Email :-",
      attributes: {
        className: "font",
        htmlFor: "email",
      },
    },
    patterns: [
      {
        regex: /^[0-9A-Za-z]{6,16}$/,
        error: "Name only have 0-9, A-z or a-z characters",
      },
    ],
  },
  {
    name: "password",
    type: "text",
    required: false,
    attributes: {
      name: "password",
      type: "password",
      id: "password",
      className: "input-text",
      placeholder: "Enter password",
    },
    label: {
      innerText: "Password :-",
      attributes: {
        className: "font",
        htmlFor: "Password",
      },
    },
  },
  {
    name: "gender",
    type: "radio",
    required: true,
    label: {
      innerText: "Gender :-",
      attributes: {},
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
          attributes: {
            className: "for-redio-check",
            htmlFor: "male",
          },
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
          attributes: {
            className: "for-redio-check",
            htmlFor: "female",
          },
        },
      },
    ],
  },
  {
    name: "hobby",
    type: "checkbox",
    required: true,
    children: [
      {
        attributes: {
          id: "Reading",
          name: "hobby",
          value: "Reading",
        },
        label: {
          innerText: "Reading",
          attributes: {
            className: "for-radio-check",
            htmlFor: "Reading",
          },
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
          attributes: {
            className: "for-radio-check",
            htmlFor: "Traveling",
          },
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
          attributes: {
            className: "for-radio-check",
            htmlFor: "Sports",
          },
        },
      },
    ],
    label: {
      innerText: "Hobby :-",
      attributes: {
        className: "font",
      },
    },
  },
  {
    name: "country",
    type: "select",
    required: true,
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
      attributes: {
        className: "font select-box-text",
        htmlFor: "country",
      },
    },
    patterns: [
      {
        regex: /[\S]/,
        error: "Please select one option",
      },
    ],
  },
  {
    name: "state",
    type: "select",
    required: true,
    attributes: {
      className: "select-box",
      name: "state",
      id: "state",
    },
    patterns: [
      {
        regex: /[\S]/,
        error: "Please select one option",
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
      attributes: {
        className: "font select-box-text",
        htmlFor: "state",
      },
    },
  },
  {
    name: "city",
    type: "select",
    required: true,
    attributes: {
      className: "select-box",
      name: "city",
      id: "city",
    },
    patterns: [
      {
        regex: /[\S]/,
        error: "Please select one option",
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
      attributes: {
        className: "font select-box-text",
        htmlFor: "city",
      },
    },
  },
];

export const typeConfig = ["text", "select", "radio"];

export const checkBox = "checkbox";
