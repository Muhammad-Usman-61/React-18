import { FieldValues, useForm } from "react-hook-form";
import Button from "./Button";
interface FormData {
  name: string;
  email: string;
  password: string;
}
const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FieldValues) => console.log(data);
  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Your email
        </label>
        <input
          type="text"
          id="emanameil"
          {...(register("name"), { required: true, minLength: 3 })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="name@gmail.com"
        />
        {errors.name?.type === "required" && (
          <span className="text-red-500 text-sm">This field is required</span>
        )}
        {errors.name?.type === "minLength" && (
          <span className="text-red-500 text-sm">
            This field should have at least 3 characters
          </span>
        )}
      </div>
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
          {...(register("email"), { required: true })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="name@gmail.com"
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
          {...(register("password"), { required: true, minLength: 5 })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>

      <Button type="submit" text="Submit" />
    </form>
  );
};

export default ReactHookForm;
