const items = ["Profile", "Settings", "Messages", "Download"];
function ListGroup() {
  return (
    <>
      <h1>My list</h1>
      <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {items.map((item) => (
          <li key={item} className="w-full px-4 py-2 rounded-b-lg">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
