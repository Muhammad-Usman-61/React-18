interface Props {
  text: string;
  color: string;
  backgroundColor: string;
}
function Button({ text, color, backgroundColor }: Props) {
  return (
    <div>
      <button
        type="button"
        className={`${color} ${backgroundColor} hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
