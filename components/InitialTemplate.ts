import DivProps from "./DivPropsInterface";

const initialTemplate: DivProps = {
  style: {
    fontSize: "30px",
    fontWeight: "bold",
    border: "2px solid #efefef",
    width: "fit-content",
    height: "fit-content",
  },
  text: "Olá mundo!",
  name: "root",
  childrenDivs: [
    {
      style: { fontSize: "20px", border: "2px solid #ff0000", display: "flex" },
      text: "Estou dentro de outra div.",
      name: `inception-1`,
      childrenDivs: [
        {
          style: { fontSize: "15px", border: "2px solid", borderColor: '#0000ff' },
          text: "Estou dentro de 2 divs!",
          name: `inception-2`,
          childrenDivs: [],
        },
      ],
    },
  ],
};

export { initialTemplate };
