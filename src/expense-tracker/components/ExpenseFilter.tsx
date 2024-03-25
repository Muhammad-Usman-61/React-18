interface Props {
  onFilter: (catagory: string) => void;
}
const ExpenseFilter = ({ onFilter }: Props) => {
  return (
    <select onChange={(event) => onFilter(event.target.value)}>
      <option value="">All Catagories</option>
      <option value="Grocery">Grocery</option>
      <option value="Utilities">Utilities</option>
      <option value="Equipments">Equipments</option>
    </select>
  );
};

export default ExpenseFilter;
