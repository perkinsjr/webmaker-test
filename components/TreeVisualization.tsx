import TreeDiv from "./TreeDiv";

interface DivProps {
  text: string;
  style: object;
  name: string;
  childrenDivs: DivProps[];
}

function TreeVisualization({ text, style, name, childrenDivs }: DivProps) {
  return (
    <div>
      <div>Visualização</div>
      <TreeDiv
        name={name}
        style={style}
        childrenDivs={childrenDivs}
        text={text}
      />
    </div>
  );
}

export default TreeVisualization;
