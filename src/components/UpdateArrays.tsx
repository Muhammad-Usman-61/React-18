import Button from "./Button";
import { useState } from "react";

function UpdateArrays() {
  const [tags, setTags] = useState(["React", "TypeScript", "TailwindCSS"]);
  const [newTag, setNewTag] = useState("");
  const handleClick = () => {
    //Add a new tag to the array
    // setTags([...tags, "JavaScript"]);
    // Remove the tag from the array
    // setTags(tags.filter((tag) => tag !== "TypeScript"));
    // Update the tag in the array
    // setTags(tags.map((tag) => (tag === "React" ? "ReactJS" : tag)));
    if (newTag.trim() !== "") {
      setTags([...tags, newTag.trim()]);
      setNewTag("");
    }
  };
  return (
    <div className="flex gap-4 items-center py-4 border-solid border-grey border-b-2">
      {tags.map((tag, index) => (
        <span key={index} className="bg-blue-700 text-white p-2 rounded">
          {tag}
        </span>
      ))}
      <input
        type="text"
        value={newTag}
        onChange={(e) => setNewTag(e.target.value)}
        className="border border-gray-400 p-1"
      />
      <Button
        text="Add Tag"
        onHoverBackgroundColor="bg-blue-600"
        onClick={handleClick}
      />
    </div>
  );
}

export default UpdateArrays;
