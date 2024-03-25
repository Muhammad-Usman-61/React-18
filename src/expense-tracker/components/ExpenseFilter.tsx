import catagories from "../catagories";
interface Props {
  onFilter: (catagory: string) => void;
  expensesTotal: string[];
}

const ExpenseFilter = ({ onFilter, expensesTotal }: Props) => {
  if (expensesTotal.length === 0) return null;
  return (
    <select
      onChange={(event) => onFilter(event.target.value)}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
    >
      <option value="">All Catagories</option>
      {catagories.map((catagory) => (
        <option key={catagory} value={catagory}>
          {catagory}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
