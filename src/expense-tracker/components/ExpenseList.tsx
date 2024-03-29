import Button from "../../components/Button";
import { useState } from "react";
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
const currency = ["$", "PKR"];

const ExpenseList = ({ expenses, onDelete }: Props) => {
  const [selectedCurrency, setSelectedCurrency] = useState(currency[0]);
  if (expenses.length === 0) return <p>No data available.</p>;
  return (
    <>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th className="px-6 py-3">Description</th>
            <th className="px-6 py-3">Amount</th>
            <th className="px-6 py-3">Catagory</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {expenses
            .map((expense) => (
              <tr
                key={expense.id}
                className="odd:bg-white even:bg-gray-50 border-b"
              >
                <td className="px-6 py-4">{expense.description}</td>
                <td className="px-6 py-4">
                  <span
                    className={
                      selectedCurrency === currency[0]
                        ? "text-green-500"
                        : "text-green-500 pr-1"
                    }
                  >
                    {selectedCurrency}
                  </span>

                  {selectedCurrency === currency[0]
                    ? expense.amount
                    : (expense.amount * 277.85).toFixed(2)}
                </td>
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
            ))
            .reverse()}
        </tbody>
        <tfoot className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <td className="px-6 py-3">Total</td>
            <td className="px-6 py-3">
              <span
                className={
                  selectedCurrency === currency[0]
                    ? "text-green-500"
                    : "text-green-500 pr-1"
                }
              >
                {selectedCurrency}
              </span>
              {selectedCurrency === currency[0]
                ? expenses.reduce((acc, expenses) => expenses.amount + acc, 0)
                : (
                    expenses.reduce(
                      (acc, expenses) => expenses.amount + acc,
                      0
                    ) * 277.85
                  ).toFixed(2)}
            </td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
          </tr>
        </tfoot>
      </table>

      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
        <ul className="flex flex-wrap -mb-px">
          <li className="me-2">
            <a
              href="#"
              onClick={() => setSelectedCurrency(currency[0])}
              className={
                selectedCurrency === currency[0]
                  ? "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg"
                  : "inline-block p-4 text-gray-500 border-b-2 border-transparent rounded-t-lg hover:text-blue-600 hover:border-blue-600"
              }
            >
              USD $
            </a>
          </li>
          <li className="me-2">
            <a
              href="#"
              onClick={() => setSelectedCurrency(currency[1])}
              className={
                selectedCurrency === currency[1]
                  ? "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg"
                  : "inline-block p-4 text-gray-500 border-b-2 border-transparent rounded-t-lg hover:text-blue-600 hover:border-blue-600"
              }
              aria-current="page"
            >
              PKR
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ExpenseList;
