import { ReactNode, useState } from "react";
interface Props {
  children: ReactNode;
  maxLength: number;
}
const ExpandableText = ({ children, maxLength }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const renderedText = isExpanded
    ? children + " ..."
    : typeof children === "string" && children.slice(0, maxLength) + "...";

  return (
    <div>
      <h1>Expandable Text</h1>
      <p>
        {renderedText}
        <span
          onClick={() => setIsExpanded(!isExpanded)}
          className="cursor-pointer underline"
        >
          {isExpanded ? "less" : "more"}
        </span>
      </p>
    </div>
  );
};

export default ExpandableText;
