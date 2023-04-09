"use client";
import TreeDiv from "./TreeDiv";
import EditDivStyle from "./EditDivStyle";
import DivProps from "./DivPropsInterface";
import { useState } from "react";

function TreeVisualization({
  text,
  style,
  name,
  childrenDivs,
  findParent,
  addDiv,
  editDiv,
}: DivProps) {
  const [isVisible, setVisibility] = useState(true);
  const [currentDiv, setCurrentDiv] = useState("root-10000000");
  return (
    <div
      className={`absolute ${
        isVisible ? "right-0" : "-right-32"
      } top-0 h-screen w-40 flex flex-row gap-0 transition-all duration-500`}
    >
      <button
        className="relative bg-blue-300"
        onClick={() => setVisibility(!isVisible)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <div className="flex flex-col gap-2 bg-blue-100 h-full p-4">
        <div>Visualização</div>
        <div className="bg-white rounded-lg"></div>
        <TreeDiv
          name={name}
          style={style}
          childrenDivs={childrenDivs}
          text={text}
          findParent={findParent}
          addDiv={addDiv}
          editDiv={editDiv}
        />
        <EditDivStyle />
      </div>
    </div>
  );
}

export default TreeVisualization;
