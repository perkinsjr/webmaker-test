import Div from "../../components/Div";

const initialTemplate = {
  style: { fontSize: "30px", fontWeight: "bold", border: '2px solid #efefef', width: 'fit-content' },
  text: "Olá mundo!",
  name: "root",
  childrenDivs: [
    {
      style: { fontSize: "20px", border: '2px solid #ff0000' },
      text: "Estou dentro de outra div.",
      name: "inside",
      childrenDivs: [],
    },
  ],
};

function MyProject() {
  return <Div {...initialTemplate}/>;
}

export default MyProject;
