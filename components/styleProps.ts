const selectableProps = [
  {
    prop: "display",
    defValue: "block",
    options: ["flex", "block", "grid", "none"],
  },
  {
    prop: "justifyContent",
    defValue: "start",
    options: ["start", "center", "end"],
  },
  {
    prop: "alignItems",
    defValue: "start",
    options: ["start", "center", "end"],
  },
  {
    prop: "placeItems",
    defValue: "start",
    options: ["start", "center", "end"],
  },
  {
    prop: "position",
    defValue: "",
    options: ["static", "relative", "absolute", "fixed", "sticky"],
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
    prop: "gap"
  }
];

export { selectableProps, sizeProps };
