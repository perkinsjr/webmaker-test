'use client'
import TreeDiv from "./TreeDiv";
import DivProps from "./DivPropsInterface";

function TreeVisualization({ text, style, name, childrenDivs, findParent, addDiv }: DivProps) {
  return (
    <div>
      <div>Visualização</div>
      <TreeDiv
        name={name}
        style={style}
        childrenDivs={childrenDivs}
        text={text}
        findParent={findParent}
        addDiv={addDiv}
      />
    </div>
  );
}

export default TreeVisualization;
