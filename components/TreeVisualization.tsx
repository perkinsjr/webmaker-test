"use client";
import EditDivStyle from "./EditDivStyle";
import { DownOutlined } from "@ant-design/icons";
import { Tree, Input } from "antd";
import ResizableComponent from "./ResizableComponent";
import { useState, useEffect } from "react";
const { TextArea } = Input;

function TreeVisualization({
  rootDiv,
  findParent,
  currentDivStyle,
  currentDivText,
  currentDiv,
  addDiv,
  setCurrentDiv,
  editDiv,
}: any) {
  const [isVisible, setVisibility] = useState(true);
  const [expandedKeys, setKeys] = useState([]);

  useEffect(() => {
    // Get all keys from treeData recursively
    const allKeys: any = [];
    const getKeys = (data: any) => {
      data.forEach((item: any) => {
        allKeys.push(item.key);
        if (item.children) {
          getKeys(item.children);
        }
      });
    };
    getKeys(
      mapDataTreeToOutput({
        style: {},
        text: "",
        name: "",
        childrenDivs: [rootDiv],
      })
    );

    // Set expandedKeys to all keys
    setKeys(allKeys);
  }, [rootDiv]);
  function mapDataTreeToOutput(dataTree: any) {
    // Create an array to hold the output objects
    const output = [];
    // Iterate over the childrenDivs in the input data tree
    for (const child of dataTree.childrenDivs) {
      // Create an output object for the current child
      const childOutput: any = {
        title: child.name,
        key: child.name,
        children: [],
      };
      // Recursively map any children of the current child
      if (child.childrenDivs.length > 0) {
        childOutput.children = mapDataTreeToOutput(child);
      }
      // Add the output object to the array
      output.push(childOutput);
    }

    return output;
  }

  return (
    <div
      className={`absolute ${
        isVisible ? "right-0" : "-right-48"
      } top-0 h-screen w-56 flex flex-row gap-0 transition-all duration-500 justify-center`}
    >
      <button
        className="relative bg-dk-gray1 text-water-cyan"
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
      <div className="flex flex-col items-center gap-0 h-screen bg-dk-gray2">
        <ResizableComponent>
          <div className="bg-dk-gray2 w-full h-full p-2 relative grid rounded-b-md grid-rows-1">
            <div className="flex flex-row justify-end gap-0 absolute right-1 top-1">
              <button
                className="text-red-500 hover:bg-dk-gray1 rounded-md p-1"
                onClick={() => {
                  findParent(currentDiv);
                  setCurrentDiv("root");
                }}
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
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
              <button
                className="text-water-cyan hover:bg-dk-gray1 rounded-md p-1"
                onClick={() => addDiv(currentDiv)}
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
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </div>
            <div>
              <Tree
                switcherIcon={<DownOutlined />}
                showLine
                onSelect={(e) => setCurrentDiv(e[0])}
                defaultExpandAll
                expandedKeys={expandedKeys}
                onExpand={(keys: any) => setKeys(keys)}
                selectedKeys={[currentDiv]}
                treeData={mapDataTreeToOutput({
                  style: {},
                  text: "",
                  name: "",
                  childrenDivs: [rootDiv],
                })}
              />
            </div>
            <div className="flex flex-col gap-1 row-auto">
              <Input
                value={currentDiv}
                onChange={(e) => {
                  editDiv(currentDiv, "name", e.target.value);
                  setCurrentDiv(e.target.value);
                }}
              />
              <TextArea
                style={{ resize: "none" }}
                value={currentDivText}
                rows={2}
                onChange={(e) => editDiv(currentDiv, "text", e.target.value)}
              />
            </div>
          </div>
        </ResizableComponent>
        <EditDivStyle
          style={currentDivStyle}
          currentDiv={currentDiv}
          currentDivStyle={currentDivStyle}
          editDiv={editDiv}
        />
      </div>
    </div>
  );
}

export default TreeVisualization;
