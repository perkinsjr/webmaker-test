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
        isVisible ? "right-0" : "-right-40"
      } top-0 h-screen w-48 flex flex-row gap-0 transition-all duration-500 justify-center`}
    >
      <button
        className="relative bg-lt-blue1 text-white"
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
      <div className="flex flex-col items-center gap-2 bg-lt-blue1 h-full p-1">
        <div className="bg-white rounded-lg h-1/2 w-40">
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
        <EditDivStyle />
      </div>
    </div>
  );
}

export default TreeVisualization;
