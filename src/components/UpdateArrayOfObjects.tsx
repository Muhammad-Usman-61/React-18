import Button from "./Button";
import { useState } from "react";
import { produce } from "immer";
function UpdateArrayOfObjects() {
  const [arrayOfObjects, setArrayOfObjects] = useState([
    { id: 1, name: "React", applicationStatus: "Active" },
    { id: 2, name: "TypeScript", applicationStatus: "Active" },
    { id: 3, name: "TailwindCSS", applicationStatus: "Not Active" },
  ]);

  const handleClick = () => {
    // setArrayOfObjects([
    //   ...arrayOfObjects,
    //   { id: arrayOfObjects.length + 1, name: "JavaScript" },
    // ]);

    //Remove
    //setArrayOfObjects([...arrayOfObjects.slice(0, -1)]);

    //Filter
    //setArrayOfObjects([...arrayOfObjects.filter((item) => item.id !== 2)]);

    //Update
    // setArrayOfObjects([
    //   ...arrayOfObjects.map((item) =>
    //     item.id === 1 ? { ...item, name: "ReactJS" } : item
    //   ),
    // ]);

    //Immer
    setArrayOfObjects(
      produce((draft) => {
        const status = draft.some(
          (item) => item.applicationStatus === "Active"
        );
        draft.forEach((item) => {
          item.applicationStatus = status ? "Active" : "Not Active";
        });
      })
    );
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
            {item.id} - {item.name} - {item.applicationStatus}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UpdateArrayOfObjects;
