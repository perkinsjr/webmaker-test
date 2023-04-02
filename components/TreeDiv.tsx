"use client";
import DivProps from "./DivPropsInterface";
import { initialTemplate } from "./InitialTemplate";

function TreeDiv({ text, style, name, childrenDivs, findParent }: DivProps) {
  return (
    <div className="w-auto relative flex flex-col gap-1 border-solid border-2 border-gray-400">
      <button
        onClick={(e) => {
          findParent && findParent(name, initialTemplate);
        }}
      >
        {name}
      </button>
      <div className="relative left-5">
        {childrenDivs.map((child, index) => (
          <TreeDiv {...child} findParent={findParent} key={index} />
        ))}
      </div>
    </div>
  );
}

export default TreeDiv;
