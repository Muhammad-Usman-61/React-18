import { useState } from "react";
interface Props {
  children: string;
  maxLength: number;
}
const ExpandableText = ({ children, maxLength }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (children.length <= maxLength) return <p>{children}</p>;

  const text = isExpanded ? children : children.substring(0, maxLength);
  return (
    <p>
      {text}...
      <button onClick={() => setIsExpanded(!isExpanded)} className="underline">
        {isExpanded ? "less" : "more"}
      </button>
    </p>
  );
};

export default ExpandableText;
