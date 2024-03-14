import Button from "./Button";
import { useState } from "react";

function UpdateArrays() {
  const [tags, setTags] = useState(["React", "TypeScript", "TailwindCSS"]);
  const handleClick = () => {
    //Add a new tag to the array
    setTags([...tags, "JavaScript"]);

    // Remove the tag from the array
    // setTags(tags.filter((tag) => tag !== "TypeScript"));

    // Update the tag in the array
    // setTags(tags.map((tag) => (tag === "React" ? "ReactJS" : tag)));
  };
  return (
    <div className="flex gap-4 items-center mt-4 py-4 border-solid border-grey border-y-2">
      {tags}
      <Button
        text="Add Tag"
        onHoverBackgroundColor="bg-blue-600"
        onClick={handleClick}
      />
    </div>
  );
}

export default UpdateArrays;
