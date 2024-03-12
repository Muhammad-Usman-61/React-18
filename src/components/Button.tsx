interface Props {
  text: string;
  color: string;
  backgroundColor: string;
  onHoverBackgroundColor: string;
}
function Button({
  text,
  color,
  backgroundColor,
  onHoverBackgroundColor,
}: Props) {
  return (
    <div>
      <button
        type="button"
        className={`${color} ${backgroundColor} hover:${onHoverBackgroundColor} font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2`}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
