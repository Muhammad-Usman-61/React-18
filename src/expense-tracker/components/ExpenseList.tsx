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
  return (
    <table>
      <thead>
        <th>Description</th>
        <th>Amount</th>
        <th>Catagory</th>
        <th></th>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.catagory}</td>
            <td>
              <Button
                text="Delete"
                backgroundColor="bg-red-600"
                onClick={() => onDelete(expense.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseList;
