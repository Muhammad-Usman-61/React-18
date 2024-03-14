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
    address: {
      street: "1234 Main St",
      city: "New York",
      zip: 10001,
    },
  });

  const updateName = () => {
    setObjects({
      ...objects,
      name: updatedName,
      address: { ...objects.address, zip: 10002 },
    });
  };
  return (
    <div className="flex gap-4 items-center mt-4 py-4 border-solid border-grey border-y-2">
      {objects.name} {objects.address.zip}
      <Button
        text="Update Name & ZipCode"
        onHoverBackgroundColor="bg-blue-600"
        onClick={updateName}
      />
    </div>
  );
}

export default UpdateObjects;
