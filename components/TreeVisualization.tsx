'use client'
import TreeDiv from "./TreeDiv";
import DivProps from "./DivPropsInterface";
import { useState } from "react";

function TreeVisualization({ text, style, name, childrenDivs, findParent, addDiv, editDiv }: DivProps) {
  const [isVisible, setVisibility] = useState(true)
  return (
    <div className={`absolute ${isVisible?'right-0':'-right-24'} top-0 h-full bg-blue-600 p-4 w-40 flex flex-col gap-2 transition-all`}>
      <div>Visualização</div>
      <button onClick={() => setVisibility(!isVisible)}>Esconder</button>
      <TreeDiv
        name={name}
        style={style}
        childrenDivs={childrenDivs}
        text={text}
        findParent={findParent}
        addDiv={addDiv}
        editDiv={editDiv}
      />
    </div>
  );
}

export default TreeVisualization;
