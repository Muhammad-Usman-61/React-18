interface Props {
  text: string;
  color?: "text-white" | "text-gray-800" | "text-gray-900" | "text-black";
  backgroundColor?: "bg-blue-700" | "bg-gray-800" | "bg-red-700";
  onHoverBackgroundColor: string;
  onClick: () => void;
}
function Button({
  text,
  color = "text-white",
  backgroundColor = "bg-blue-700",
  onHoverBackgroundColor,
  onClick,
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${color} ${backgroundColor} hover:${onHoverBackgroundColor} font-medium rounded-lg text-sm px-5 py-2.5`}
    >
      {text}
    </button>
  );
}

export default Button;
