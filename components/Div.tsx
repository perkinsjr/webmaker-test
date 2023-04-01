interface DivProps {
  text: string;
  style: object;
  name: string;
  childrenDivs: DivProps[];
}

function Div({ text, style, name, childrenDivs }: DivProps) {
  return (
    <div style={{ ...style }}>
      {text}
      {childrenDivs.map((child) => (
        <Div {...child} />
      ))}
    </div>
  );
}

export default Div;
