'use client'
import TreeDiv from "./TreeDiv";
import DivProps from "./DivPropsInterface";

function TreeVisualization({ text, style, name, childrenDivs, findParent }: DivProps) {
  return (
    <div>
      <div>Visualização</div>
      <TreeDiv
        name={name}
        style={style}
        childrenDivs={childrenDivs}
        text={text}
        findParent={findParent}
      />
    </div>
  );
}

export default TreeVisualization;
