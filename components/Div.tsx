'use client'
import DivProps from "./DivPropsInterface";

function Div({ text, style, name, childrenDivs }: DivProps) {
  return (
    <div style={{ ...style }}>
      {text}
      {childrenDivs.map((child) => (
        <Div {...child} key={child.name}/>
      ))}
    </div>
  );
}

export default Div;
