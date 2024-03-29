// import { FormEvent, useRef } from "react";
import { FormEvent, useState } from "react";
import Button from "./Button";
const htmlForm = () => {
  //   const refEmail = useRef<HTMLInputElement>(null);
  //   const refPassword = useRef<HTMLInputElement>(null);
  //   const userLogin = {
  //     email: "",
  //     password: "",
  //   };

  //   const handleSubmit = (event: FormEvent) => {
  //     event.preventDefault();
  //     userLogin.email = refEmail.current!.value;
  //     userLogin.password = refPassword.current!.value;
  //     console.log(userLogin);
  //   };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(userLogin);
  };
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
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
          value={userLogin.email}
          onChange={(e) =>
            setUserLogin({ ...userLogin, email: e.target.value })
          }
          //   ref={refEmail}
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
          value={userLogin.password}
          onChange={(e) =>
            setUserLogin({ ...userLogin, password: e.target.value })
          }
          //   ref={refPassword}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        />
      </div>

      <Button type="submit" text="Submit" />
    </form>
  );
};

export default htmlForm;
