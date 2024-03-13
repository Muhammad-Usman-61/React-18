import Button from "./Button";
import { useState } from "react";
interface Props {
  name: string;
  age: number;
  updatedName: string;
}
function UpdateObjects({ name, age, updatedName }: Props) {
  const [objects, setObjects] = useState({
    name: name,
    age: age,
  });

  const updateName = () => {
    setObjects({ ...objects, name: updatedName });
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
