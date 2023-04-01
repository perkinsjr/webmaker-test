interface DivProps {
  text: string;
  style: object;
  name: string;
  childrenDivs: DivProps[];
}

function TreeDiv({ text, style, name, childrenDivs }: DivProps) {
  return (
    <div className="w-auto relative flex flex-col gap-1 border-solid border-2 border-gray-400">
      <div>{name}</div>
      <div className="relative left-5">
        {childrenDivs.map((child) => (
          <TreeDiv {...child} />
        ))}
      </div>
    </div>
  );
}

export default TreeDiv;
