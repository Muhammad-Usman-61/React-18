interface Props {
  text: string;
  type?: "button" | "submit" | "reset";
  color?: "text-white" | "text-gray-800" | "text-gray-900" | "text-black";
  backgroundColor?: string;
  onHoverBackgroundColor?: string;
  onClick?: () => void;
}
function Button({
  text,
  type = "button",
  color = "text-white",
  backgroundColor = "bg-blue-700",
  onHoverBackgroundColor = "bg-blue-800",
  onClick,
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${color} ${backgroundColor} hover:${onHoverBackgroundColor} font-medium rounded-lg text-sm px-5 py-2.5`}
    >
      {text}
    </button>
  );
}

export default Button;
