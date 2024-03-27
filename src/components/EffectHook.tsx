import { useEffect, useRef } from "react";

const EffectHook = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  });

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        className="border border-gray-300 p-2"
      />
    </div>
  );
};

export default EffectHook;
