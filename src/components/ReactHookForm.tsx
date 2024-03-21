import { FieldValues, useForm } from "react-hook-form";
import Button from "./Button";
const ReactHookForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: FieldValues) => console.log(data);
  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="name@gmail.com"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Your password
        </label>
        <input
          type="password"
          id="password"
          {...register("password")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        />
      </div>

      <Button type="submit" text="Submit" />
    </form>
  );
};

export default ReactHookForm;
