interface Expense {
  id: number;
  description: string;
  amount: number;
  catagory: string;
}

interface Props {
  expenses: Expense[];
}
const ExpenseList = ({ expenses }: Props) => {
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
            <td></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseList;
