"use client";
import Div from "../../components/Div";
import TreeVisualization from "../../components/TreeVisualization";
import { initialTemplate } from "../../components/InitialTemplate";
import { useRef, useState } from "react";

const baseDiv = {
  style: { height: "20px", border: "2px solid #ff00ff" },
  text: "",
  childrenDivs: [],
};

function MyProject() {
  const [currentTemplate, setTemplate] = useState(initialTemplate);

  function addDiv(name: string) {
    let newTemplate = { ...currentTemplate };
    let stack = [];
    let ii = null;
    stack.push({ node: newTemplate, parent: null });
    while (stack.length > 0) {
      const { node, parent }: any = stack.pop();
      if (node.name === name) {
        // Found it!
        if (node.childrenDivs.length) {
          node.childrenDivs.push({
            ...baseDiv,
            name: `Nova div-${Math.floor(Math.random() * 10000000)}`,
          });
        }
        // Por algum motivo, é preciso este else para setar o array diretamente quando ele está vazio, ou
        // dar push em uma nova div quando ele já está populado (senão, irá ocorrer uma re-renderização infinita).
        else {
          node.childrenDivs = [
            {
              ...baseDiv,
              name: `Nova div-${Math.floor(Math.random() * 10000000)}`,
            },
          ];
        }
        break;
      } else if (node.childrenDivs.length) {
        for (ii = 0; ii < node.childrenDivs.length; ii += 1) {
          stack.push({ node: node.childrenDivs[ii], parent: null });
        }
      }
    }
    setTemplate(newTemplate);
  }

  function findParent(name: string): void {
    let newTemplate = { ...currentTemplate };
    let stack = [];
    let ii = null;
    stack.push({ node: newTemplate, parent: null });
    while (stack.length > 0) {
      const { node, parent }: any = stack.pop();
      if (node.name === name) {
        // Found it!
        if (parent) {
          parent.childrenDivs = parent.childrenDivs.filter(
            (child: any) => child.name !== name
          );
        } else {
          //newTemplate = { text: "", style: {}, name: "", childrenDivs: [] };
        }
        break;
      } else if (node.childrenDivs && node.childrenDivs.length) {
        for (ii = 0; ii < node.childrenDivs.length; ii += 1) {
          stack.push({ node: node.childrenDivs[ii], parent: node });
        }
      }
    }
    setTemplate(newTemplate);
  }

  function editDiv(name: string, param: string, value: any) {
    let newTemplate = { ...currentTemplate };
    let stack = [];
    let ii = null;
    stack.push({ node: newTemplate, parent: null });
    while (stack.length > 0) {
      const { node, parent }: any = stack.pop();
      if (node.name === name) {
        // Found it!
        node[param] = value;
        break;
      } else if (node.childrenDivs.length) {
        for (ii = 0; ii < node.childrenDivs.length; ii += 1) {
          stack.push({ node: node.childrenDivs[ii], parent: null });
        }
      }
    }
    setTemplate(newTemplate);
  }

  function editDivStyle(name: string, param: string, value: any) {
    let newTemplate = { ...currentTemplate };
    let stack = [];
    let ii = null;
    stack.push({ node: newTemplate, parent: null });
    while (stack.length > 0) {
      const { node, parent }: any = stack.pop();
      if (node.name === name) {
        // Found it!
        node.style[param] = value;
        break;
      } else if (node.childrenDivs.length) {
        for (ii = 0; ii < node.childrenDivs.length; ii += 1) {
          stack.push({ node: node.childrenDivs[ii], parent: null });
        }
      }
    }
    setTemplate(newTemplate);
  }

  return (
    <>
      <div className="bg-white w-5/6 h-5/6">
        <Div {...currentTemplate} />
      </div>
      <TreeVisualization
        {...currentTemplate}
        addDiv={addDiv}
        editDiv={editDiv}
        findParent={findParent}
      />
    </>
  );
}

export default MyProject;
