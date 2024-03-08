import { MouseEvent } from "react";
let items = ["Profile", "Settings", "Messages", "Download"];

// Event handler
const EventHandler = (event: MouseEvent) => {
  console.log("Clicked on", event, "at index", event);
};

function ListGroup() {
  return (
    <>
      <h1>My list</h1>

      {items.length > 0 ? (
        <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          {items.map((item) => (
            <li
              key={item}
              className="w-full px-4 py-2 rounded-b-lg"
              onClick={EventHandler}
            >
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p>No items to display</p>
      )}
    </>
  );
}

export default ListGroup;
