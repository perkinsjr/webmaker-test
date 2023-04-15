import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { sizeProps, selectableProps } from "./styleProps";
import { Radio } from "antd";

const plainOptions = ["flex", "block", "grid", "none"];

function EditDivStyle({ currentDiv, currentDivStyle, editDiv, style }: any) {
  function returnStyle(param: string, defaultValue: string) {
    const styleValue = style[param] ? style[param] : defaultValue;
    console.log(styleValue);
    return styleValue;
  }
  const flexStyle = returnStyle("display", "block");
  return (
    <div className="bg-dk-gray2 flex flex-col h-1/2 w-full">
      <div className="flex flex-col justify-center items-center">
        <div className="font-bold text-white">display</div>
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
    </div>
  );
}

export default EditDivStyle;
