'use client'
import DivProps from "./DivPropsInterface";

function Div({ text, style, name, childrenDivs }: DivProps) {
  return (
    <div style={{ ...style }}>
      {text}
      {childrenDivs.map((child, index) => (
        <Div {...child} key={index}/>
      ))}
    </div>
  );
}

export default Div;
