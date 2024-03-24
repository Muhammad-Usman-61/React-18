import Button from "../../components/Button";
interface Expense {
  id: number;
  description: string;
  amount: number;
  catagory: string;
}

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}
const ExpenseList = ({ expenses, onDelete }: Props) => {
  if (expenses.length === 0) return <p>No data available.</p>;
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <th className="px-6 py-3">Description</th>
        <th className="px-6 py-3">Amount</th>
        <th className="px-6 py-3">Catagory</th>
        <th className="px-6 py-3">Action</th>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr className="odd:bg-white even:bg-gray-50 border-b">
            <td className="px-6 py-4">{expense.description}</td>
            <td className="px-6 py-4">${expense.amount}</td>
            <td className="px-6 py-4">{expense.catagory}</td>
            <td className="px-6 py-4">
              <Button
                text="Delete"
                backgroundColor="bg-red-600"
                onHoverBackgroundColor="bg-red-900"
                onClick={() => onDelete(expense.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot className="text-xs text-gray-700 uppercase bg-gray-50">
        <th className="px-6 py-3">Total</th>
        <th className="px-6 py-3">
          ${expenses.reduce((acc, expenses) => expenses.amount + acc, 0)}
        </th>
        <th className="px-6 py-3"></th>
        <th className="px-6 py-3"></th>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
