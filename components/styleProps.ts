const selectableProps = [
  {
    prop: "display",
    defValue: "block",
    options: ["flex", "block", "grid", "none"],
  },
  {
    prop: "justifyContent",
    defValue: "",
    options: [""],
  },
  {
    prop: "alignItems",
    defValue: "",
    options: [""],
  },
  {
    prop: "placeItems",
    defValue: "block",
    options: [""],
  },
  {
    prop: "position",
    defValue: "",
    options: [""],
  },
  {
    prop: "textDecoration",
    defValue: "",
    options: [""],
  },
];
const sizeProps = [
  {
    prop: "width",
  },
  {
    prop: "height",
  },
  {
    prop: "padding",
  },
  {
    prop: "margin",
  },
  {
    prop: "top",
  },
  {
    prop: "right",
  },
  {
    prop: "bottom",
  },
  {
    prop: "left",
  },
  {
    prop: "opacity"
  },
  {
    prop: "zIndex"
  }
];

export { selectableProps, sizeProps };
