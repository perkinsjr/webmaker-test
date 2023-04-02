"use client";
import Div from "../../components/Div";
import TreeVisualization from "../../components/TreeVisualization";
import { initialTemplate } from "../../components/InitialTemplate";
import findParent from "../../components/findParent";

function MyProject() {
  return (
    <div className="grid grid-cols-2">
      <Div {...initialTemplate} />
      <TreeVisualization {...initialTemplate} findParent={findParent} />
    </div>
  );
}

export default MyProject;
