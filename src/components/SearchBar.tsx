import { useState, ChangeEvent } from "react";
import { FaSearch } from "react-icons/fa";
interface Props {
  onSearch: (query: string) => void;
}
function SearchBar({ onSearch }: Props) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="flex items-center mt-4">
      <FaSearch className="text-gray-400 mr-2" />
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
        className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
      />
    </div>
  );
}

export default SearchBar;
