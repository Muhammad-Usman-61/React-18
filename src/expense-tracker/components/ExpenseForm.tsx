import { catagories } from "../../App";
const ExpenseForm = () => {
  return (
    <form className="mb-5">
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Description
        </label>
        <input
          type="text"
          id="description"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="amount"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Amount
        </label>
        <input
          type="number"
          id="amount"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="catagory"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Catagory
        </label>
        <select
          id="catagory"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
        >
          <option value=""></option>

          {catagories.map((catagory) => (
            <option key={catagory} value={catagory}>
              {catagory}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg text-sm px-5 py-2.5"
      >
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
