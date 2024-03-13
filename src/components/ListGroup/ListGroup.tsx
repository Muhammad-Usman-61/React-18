import { useState } from "react";
import styles from "./ListGroup.module.css";
import { FaCity } from "react-icons/fa";
interface Props {
  items: string[];
  heading: string;
  onSelection: (item: string, index: number) => void;
}
function ListGroup({ items, heading, onSelection }: Props) {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <>
      <div className="flex items-center gap-2">
        <FaCity color="#444" size="20" />
        <h1>{heading}</h1>
      </div>

      {items.length > 0 ? (
        <ul
          className={[
            styles.listGroup,
            "w-48 text-sm font-medium text-gray-900 bg-white border rounded-lg my-4",
          ].join(" ")}
        >
          {items.map((item, index) => (
            <li
              key={item}
              className={
                selectedItem === index
                  ? "w-full px-4 py-2 rounded cursor-pointer bg-gray-700 text-white"
                  : "w-full px-4 py-2 cursor-pointer rounded"
              }
              onClick={() => {
                setSelectedItem(index);
                onSelection(item, index);
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
