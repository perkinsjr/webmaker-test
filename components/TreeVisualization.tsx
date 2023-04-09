"use client";
import TreeDiv from "./TreeDiv";
import EditDivStyle from "./EditDivStyle";
import { useState } from "react";

function TreeVisualization({
  rootDiv,
  findParent,
  currentDivStyle,
  currentDiv,
  addDiv,
  editDiv,
}: any) {
  const [isVisible, setVisibility] = useState(true);

  return (
    <div
      className={`absolute ${
        isVisible ? "right-0" : "-right-40"
      } top-0 h-screen w-48 flex flex-row gap-0 transition-all duration-500 justify-center`}
    >
      <button
        className="relative bg-white text-lt-blue1"
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
      <div className="flex flex-col items-center gap-2 bg-white h-full p-1">
        <div className="bg-gray-100 rounded-lg h-1/2 w-40">
          <TreeDiv
            name={rootDiv.name}
            style={rootDiv.style}
            childrenDivs={rootDiv.childrenDivs}
            text={rootDiv.text}
            findParent={findParent}
            addDiv={addDiv}
            editDiv={editDiv}
          />
        </div>
        <EditDivStyle style={currentDivStyle} currentDiv={currentDiv} editDiv={editDiv}/>
      </div>
    </div>
  );
}

export default TreeVisualization;
