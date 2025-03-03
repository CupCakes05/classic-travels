import React from "react";

interface HeadingProps {
  text: string;
  type: "h1" | "h2" | "h3" | "h4"; // Allow h1, h2, h3, or h4
  colour: string;
  size: string; // Custom pixel size, e.g., "32px", "48px"
}

function Heading({ text, type, colour, size }: HeadingProps) {
  // Dynamically select the appropriate heading tag
  const HeadingTag = type;

  return (
    <HeadingTag className={`${colour}`} style={{ fontSize: size }}>
      {text}
    </HeadingTag>
  );
}

export default Heading;
