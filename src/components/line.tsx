import React from "react";

interface LineProps {
  height: string;
  width: string;
  colour: string;
}

function Line(props: LineProps) {
  return <div className={`${props.height} ${props.width} ${props.colour}`} />;
}

export default Line;
