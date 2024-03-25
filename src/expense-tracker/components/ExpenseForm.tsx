import catagories from "../catagories";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
  onAddExpense: (data: ExpenseFormData) => void;
}

const schema = z.object({
  description: z.string().min(3),
  amount: z
    .number({ invalid_type_error: "Amount is required." })
    .min(1)
    .max(1000000),
  catagory: z.enum(catagories, {
    errorMap: () => ({
      message: "Please select a catagory.",
    }),
  }),
});
type ExpenseFormData = z.infer<typeof schema>;

const ExpenseForm = ({ onAddExpense }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(schema),
  });
  return (
    <form
      className="mb-5"
      onSubmit={handleSubmit((data) => {
        onAddExpense(data);
        reset();
      })}
    >
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
          {...register("description")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
        {errors.description && (
          <span className="text-red-500 text-sm">
            {errors.description.message}
          </span>
        )}
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
          {...register("amount", { valueAsNumber: true })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
        {errors.amount && (
          <span className="text-red-500 text-sm">{errors.amount.message}</span>
        )}
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
          {...register("catagory")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
        >
          <option value=""></option>

          {catagories.map((catagory) => (
            <option key={catagory} value={catagory}>
              {catagory}
            </option>
          ))}
        </select>{" "}
        {errors.catagory && (
          <span className="text-red-500 text-sm">
            {errors.catagory.message}
          </span>
        )}
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
