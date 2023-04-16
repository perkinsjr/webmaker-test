import React, { useRef, useState, useCallback } from "react";

function ResizableComponent({ children }: any) {
  const [height, setHeight] = useState(0);
  const containerRef: any = useRef(null);
  const handleRef: any = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [initialOffset, setInitialOffset] = useState(0);

  const handleMouseDown = useCallback((e: any) => {
    setIsDragging(true);
    const handleHeight = handleRef.current.getBoundingClientRect().height;
    setInitialOffset(e.clientY - handleRef.current.getBoundingClientRect().top - handleHeight);
  }, []);

  const handleMouseMove = useCallback(
    (e: any) => {
      if (isDragging) {
        const containerTop = containerRef.current.getBoundingClientRect().top;
        const newHeight = e.clientY - containerTop - initialOffset;
        setHeight(newHeight);
      }
    },
    [isDragging, initialOffset]
  );

  const handleMouseUp = useCallback((e: any) => {
    setIsDragging(false);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        height: `${height}px`,
        minHeight: "35vh",
        maxHeight: "65vh",
        paddingBottom: "1.5rem",
        position: "relative",
      }}
    >
      {children}
      <div
        ref={handleRef}
        className="h-6 grid place-items-center text-dk-gray2 bg-gradient-to-r from-water-blue to-water-cyan cursor-ns-resize absolute rounded-md left-0 right-0"
        onMouseDown={handleMouseDown}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
          />
        </svg>
      </div>
      {isDragging && (
        <div
          className="fixed top-0 bottom-0 left-0 right-0 cursor-ns-resize"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        />
      )}
    </div>
  );
}
export default ResizableComponent;
