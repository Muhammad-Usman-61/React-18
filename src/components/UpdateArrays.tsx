import Button from "./Button";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

function UpdateArrays() {
  const [tags, setTags] = useState(["React", "TypeScript", "TailwindCSS"]);
  const [newTag, setNewTag] = useState("");
  const [showTagInput, setShowTagInput] = useState(false);
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
    setShowTagInput(!showTagInput);
  };
  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };
  return (
    <div className="flex gap-4 items-center p-4 max-w-96 shadow-md my-4 bg-white rounded-lg">
      <div className="flex flex-col gap-2">
        <h1 className="text-lg font-semibold">Add Your Interests</h1>
        <div className="flex gap-2 justify-between">
          {showTagInput && (
            <input
              type="text"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              className="border border-gray-400 p-1"
            />
          )}
          <Button
            text="Add New"
            onHoverBackgroundColor="bg-blue-600"
            onClick={handleClick}
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="flex text-sm gap-2 items-center w-fit bg-blue-700 text-white p-2 rounded cursor-pointer hover:shadow-md hover:shadow-gray-400"
            >
              {tag}{" "}
              <span onClick={() => removeTag(tag)}>
                <IoClose />
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UpdateArrays;
