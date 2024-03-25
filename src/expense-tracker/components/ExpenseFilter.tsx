interface Props {
  onFilter: (catagory: string) => void;
}
const ExpenseFilter = ({ onFilter }: Props) => {
  return (
    <select
      onChange={(event) => onFilter(event.target.value)}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
    >
      <option value="">All Catagories</option>
      <option value="Grocery">Grocery</option>
      <option value="Utilities">Utilities</option>
      <option value="Equipments">Equipments</option>
    </select>
  );
};

export default ExpenseFilter;
