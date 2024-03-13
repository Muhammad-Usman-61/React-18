import Button from "./Button";
import { useState } from "react";
function UpdateObjects() {
  const [objects, setObjects] = useState({
    name: "John",
    age: 25,
  });

  const updateName = () => {
    setObjects({ ...objects, name: "Jane" });
  };
  return (
    <div className="flex gap-4 items-center mt-4 py-4 border-solid border-grey border-y-2">
      {objects.name}
      <Button
        text="Update Name"
        onHoverBackgroundColor="bg-blue-600"
        onClick={updateName}
      />
    </div>
  );
}

export default UpdateObjects;
