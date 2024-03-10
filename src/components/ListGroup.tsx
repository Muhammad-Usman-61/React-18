import { useState } from "react";
interface Props {
  items: string[];
  heading: string;
  onSelection: (item: string) => void;
}
function ListGroup({ items, heading, onSelection }: Props) {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <>
      <h1>{heading}</h1>

      {items.length > 0 ? (
        <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg ">
          {items.map((item, index) => (
            <li
              key={item}
              className={
                selectedItem === index
                  ? "w-full px-4 py-2 rounded bg-gray-700 text-white"
                  : "w-full px-4 py-2 rounded"
              }
              onClick={() => {
                setSelectedItem(index);
                onSelection(item);
              }}
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
