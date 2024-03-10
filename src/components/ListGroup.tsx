import { useState } from "react";

function ListGroup() {
  let items = ["Multan", "Sialkot", "Vehari", "Islamabd"];
  const [selectedItem, setSelectedItem] = useState(-1);

  return (
    <>
      <h1>New list</h1>

      {items.length > 0 ? (
        <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg ">
          {items.map((item, index) => (
            <li
              key={item}
              className={
                selectedItem === index
                  ? "w-full px-4 py-2 rounded-b-lg bg-gray-700 text-white"
                  : "w-full px-4 py-2 rounded-b-lg"
              }
              onClick={() => setSelectedItem(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p>Add new item</p>
      )}
    </>
  );
}

export default ListGroup;
