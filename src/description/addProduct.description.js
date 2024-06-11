import { onlyNumberRegex } from "../utils/regex";

export const addProductArray = [
  {
    name: "soldBy",
    type: "text",
    required: {
      isRequired: true,
      defaultMsg: "Please fill sold by field properly.",
    },
    attributes: {
      type: "text",
      name: "soldBy",
      id: "soldBy",
      className: "input-text",
    },
    label: {
      innerText: "Sold By",
      className: "font",
      htmlFor: "soldBy",
    },
    patterns: [
      {
        regex: onlyNumberRegex,
        error: "Sold By field only accepts numbers",
      },
    ],
  },

  {
    name: "customerId",
    type: "text",
    required: {
      isRequired: true,
      defaultMsg: "Please enter customer id.",
    },
    attributes: {
      type: "text",
      name: "customerId",
      id: "customerId",
      className: "input-text",
    },
    label: {
      innerText: "Customer Id",
      className: "font",
      htmlFor: "customerId",
    },
    patterns: [
      {
        regex: onlyNumberRegex,
        error: "Customer Id field only accepts numbers",
      },
    ],
  },

  {
    name: "productId",
    type: "text",
    required: {
      isRequired: true,
      defaultMsg: "Please enter product id.",
    },
    attributes: {
      type: "text",
      name: "productId",
      id: "productId",
      className: "input-text",
    },
    label: {
      innerText: "Product Id",
      className: "font",
      htmlFor: "productId",
    },
    patterns: [
      {
        regex: onlyNumberRegex,
        error: "Product Id field only accepts numbers",
      },
    ],
  },

  {
    name: "dateSold",
    type: "text",
    required: {
      isRequired: true,
      defaultMsg: "Please select a sold date.",
    },
    attributes: {
      type: "date",
      name: "dateSold",
      id: "dateSold",
      className: "input-text",
    },
    label: {
      innerText: "Date Sold",
      className: "font",
      htmlFor: "dateSold",
    },
  },

  {
    name: "paymentType",
    type: "select",
    required: {
      isRequired: true,
      defaultMsg: "Please select payment type.",
    },
    attributes: {
      name: "paymentType",
      id: "paymentType",
      className: "input-text",
    },
    label: {
      innerText: "Payment Type",
      className: "font",
      htmlFor: "paymentType",
    },
    children: [
      {
        value: "",
        innerText: "Select type",
      },
      {
        value: "Credit Card",
        innerText: "credit-card",
      },
      {
        value: "UPI",
        innerText: "upi",
      },
    ],
  },

  {
    name: "paidDate",
    type: "text",
    required: {
      isRequired: true,
      defaultMsg: "Please select paid date.",
    },
    attributes: {
      type: "date",
      name: "paidDate",
      id: "paidDate",
      className: "input-text",
    },
    label: {
      innerText: "Paid Date",
      className: "font",
      htmlFor: "paidDate",
    },
  },

  {
    name: "notes",
    type: "textarea",
    required: {
      isRequired: true,
      defaultMsg: "Please add note about sales.",
    },
    attributes: {
      type: "textarea",
      name: "notes",
      id: "notes",
      className: "input-text",
    },
    label: {
      innerText: "Notes",
      className: "font",
      htmlFor: "notes",
    },
  },

  {
    name: "amountPaid",
    type: "text",
    required: {
      isRequired: false,
      defaultMsg: "Please enter paid amount.",
    },
    attributes: {
      type: "text",
      name: "amountPaid",
      id: "amountPaid",
      className: "input-text",
    },
    label: {
      innerText: "Amount Paid",
      className: "font",
      htmlFor: "amountPaid",
    },
  },
];
