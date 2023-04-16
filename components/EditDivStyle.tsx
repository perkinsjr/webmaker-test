import React, { useState } from "react";
import { InputNumber, Select, Radio } from "antd";
const { Option } = Select;

function selectAfter(arg: any) {
  return (
    <Select
      onChange={(e) => arg(e)}
      defaultValue="px"
      style={{ width: "70px" }}
    >
      <Option value="px">px</Option>
      <Option value="rem">rem</Option>
      <Option value="em">em</Option>
      <Option value="%">%</Option>
      <Option value="vh">vh</Option>
      <Option value="vw">vw</Option>
    </Select>
  );
}

function extractNumber(widthValue: string) {
  // Use a regular expression to match the numeric part of the value
  const matches = widthValue.match(/[0-9.]+/);

  // If there's a match, return the matched string as a number, otherwise return null
  return matches ? parseFloat(matches[0]) : 0;
}

const plainOptions = ["flex", "block", "grid", "none"];

function EditDivStyle({ currentDiv, currentDivStyle, editDiv, style }: any) {
  const [currentPage, setPage] = useState(1);
  const [currentMeasure, setMeasure] = useState("px");
  function returnStyle(param: string, defaultValue: string) {
    const styleValue = style[param] ? style[param] : defaultValue;
    console.log(styleValue);
    return styleValue;
  }
  const flexStyle = returnStyle("display", "block");
  const gapStyle = returnStyle("gap", "0");
  return (
    <div className="bg-dk-gray2 flex flex-col h-full w-full flex-1 rounded-t-md p-2">
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="font-bold text-white flex flex-col items-center">
          display
          <Radio.Group
            options={plainOptions}
            onChange={(e) =>
              editDiv(currentDiv, "style", {
                ...currentDivStyle,
                display: e.target.value,
              })
            }
            size="small"
            value={flexStyle}
            optionType="button"
          />
        </div>
        <div className="font-bold text-white flex flex-col items-center">
          gap
          <InputNumber
            addonAfter={selectAfter(setMeasure)}
            style={{ width: "150px" }}
            disabled={flexStyle === "block" || flexStyle === "none"}
            value={extractNumber(gapStyle)}
            onChange={(e) => {
              editDiv(currentDiv, "style", {
                ...currentDivStyle,
                gap: String(e) + currentMeasure,
              });
              console.log(e, currentMeasure);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default EditDivStyle;
