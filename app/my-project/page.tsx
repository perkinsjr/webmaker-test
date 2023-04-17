"use client";
import Div from "../../components/Div";
import TreeVisualization from "../../components/TreeVisualization";
import { initialTemplate } from "../../components/InitialTemplate";
import { useRef, useState, useEffect } from "react";
import { Rnd } from "react-rnd";

const baseDiv = {
  style: { height: "20px", border: "2px solid #ff00ff" },
  text: "",
  childrenDivs: [],
};

function MyProject() {
  const [currentTemplate, setTemplate] = useState(initialTemplate);
  const [currentDiv, setCurrentDiv] = useState("inception-1");
  const [size, setSize] = useState({ width: 250, height: 250 });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [colorPallete, setColorPallete] = useState([
    { hex: "#ffffff", name: "white" },
    { hex: "#000000", name: "black" },
    { hex: "#0000ff", name: "blue" },
  ]);
  const [position, setPosition] = useState({
    x: windowWidth / 2 - size.width / 2,
    y: windowHeight / 2 - size.height / 2,
  });

  useEffect(() => {
    if (
      position.x > windowWidth / 2 - size.width / 2 ||
      position.y > windowHeight / 2 - size.height / 2
    ) {
      console.log("ta errado isso ai");
      let newPosition = { ...position };
      if (newPosition.x > windowWidth / 2 - size.width / 2) {
        newPosition.x = windowWidth / 2 - size.width / 2;
      }
      if (newPosition.y > windowHeight / 2 - size.height / 2) {
        newPosition.y = windowHeight / 2 - size.height / 2;
      }
      setPosition(newPosition);
    }
  }, [position, size]);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    setPosition({
      x: windowWidth / 2 - size.width / 2,
      y: windowHeight / 2 - size.height / 2,
    });
  }, [windowHeight, windowWidth]);

  function addDiv(name: string) {
    let newTemplate = { ...currentTemplate };
    console.log("chamei", name);
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

  function currentDivStyle(name: string) {
    let newTemplate = { ...currentTemplate };
    let stack = [];
    let ii = null;
    stack.push({ node: newTemplate, parent: null });
    while (stack.length > 0) {
      const { node, parent }: any = stack.pop();
      if (node.name === name) {
        // Found it!
        return node.style;
      } else if (node.childrenDivs.length) {
        for (ii = 0; ii < node.childrenDivs.length; ii += 1) {
          stack.push({ node: node.childrenDivs[ii], parent: null });
        }
      }
    }
    return {};
  }
  function currentDivText(name: string) {
    let newTemplate = { ...currentTemplate };
    let stack = [];
    let ii = null;
    stack.push({ node: newTemplate, parent: null });
    while (stack.length > 0) {
      const { node, parent }: any = stack.pop();
      if (node.name === name) {
        // Found it!
        return node.text;
      } else if (node.childrenDivs.length) {
        for (ii = 0; ii < node.childrenDivs.length; ii += 1) {
          stack.push({ node: node.childrenDivs[ii], parent: null });
        }
      }
    }
    return {};
  }

  return (
    <>
      <Rnd
        minWidth={200}
        minHeight={200}
        disableDragging={true}
        size={size}
        bounds='parent'
        enableResizing={{
          top: true,
          right: true,
          bottom: true,
          left: true,
          topRight: false,
          bottomRight: false,
          bottomLeft: false,
          topLeft: false,
        }}
        onDragStop={(e, d) => setPosition({ x: d.x, y: d.y })}
        position={position}
        onResize={(e, direction, ref, delta, position) => {
          const horizontalControl =
            direction === "right" ||
            direction === "topRight" ||
            direction === "bottomRight"
              ? -1
              : 0;
          const verticalControl =
            direction === "bottom" ||
            direction === "bottomRight" ||
            direction === "bottomLeft"
              ? -1
              : 0;
          setSize({
            width:
              ref.offsetWidth + delta.width >= 200
                ? ref.offsetWidth + delta.width
                : 200,
            height:
              ref.offsetHeight + delta.height >= 200
                ? ref.offsetHeight + delta.height
                : 200,
          });
          setPosition({
            x: position.x + delta.width * horizontalControl,
            y: position.y + delta.height * verticalControl,
          });
        }}
      >
        <div className="bg-white h-full m-0">
          <Div {...currentTemplate} />
        </div>
      </Rnd>

      <TreeVisualization
        rootDiv={{ ...currentTemplate }}
        addDiv={addDiv}
        editDiv={editDiv}
        findParent={findParent}
        currentDivStyle={currentDivStyle(currentDiv)}
        currentDivText={currentDivText(currentDiv)}
        currentDiv={currentDiv}
        setCurrentDiv={setCurrentDiv}
        colorPallete={colorPallete}
        setColorPallete={setColorPallete}
      />
    </>
  );
}

export default MyProject;
