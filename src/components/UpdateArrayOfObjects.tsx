import Button from "./Button";
import { useState } from "react";
function UpdateArrayOfObjects() {
  const [arrayOfObjects, setArrayOfObjects] = useState([
    { id: 1, name: "React" },
    { id: 2, name: "TypeScript" },
    { id: 3, name: "TailwindCSS" },
  ]);

  const handleClick = () => {
    // setArrayOfObjects([
    //   ...arrayOfObjects,
    //   { id: arrayOfObjects.length + 1, name: "JavaScript" },
    // ]);

    //Remove
    setArrayOfObjects([...arrayOfObjects.slice(0, -1)]);
  };
  return (
    <div>
      <Button
        text="Update Array of Objects"
        onHoverBackgroundColor="bg-blue-600"
        onClick={handleClick}
      />
      <ul>
        {arrayOfObjects.map((item, index) => (
          <li key={index}>
            {item.id} - {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UpdateArrayOfObjects;
