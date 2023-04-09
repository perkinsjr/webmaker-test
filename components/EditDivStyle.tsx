function EditDivStyle({ currentDiv, editDiv, style }: any) {
  function returnStyle(param: string, defaultValue: string) {
    const styleValue = style ? style[param] : defaultValue;
    console.log(styleValue)
    return styleValue;
  }
  const flexStyle = returnStyle("display", "block");
  return (
    <div className="bg-gray-100 flex flex-col rounded-lg h-1/2 w-40">
      <div className="flex flex-row gap-1 flex-wrap">
        <div className="font-bold">display</div>
        <div className={`border-2 border-solid rounded-md ${flexStyle === "block" ? "border-green-300" : "border-gray-300"}`}>block</div>
        <div className={`border-2 border-solid rounded-md ${flexStyle === "grid" ? "border-green-300" : "border-gray-300"}`}>grid</div>
        <div className={`border-2 border-solid rounded-md ${flexStyle === "flex" ? "border-green-300" : "border-gray-300"}`}>flex</div>
        <div className={`border-2 border-solid rounded-md ${flexStyle === "none" ? "border-green-300" : "border-gray-300"}`}>none</div>
      </div>
    </div>
  );
}

export default EditDivStyle;
