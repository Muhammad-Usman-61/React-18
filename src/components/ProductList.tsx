// import { useEffect, useState } from "react";

// import axios, { AxiosError } from "axios";
import ClipLoader from "react-spinners/ClipLoader";
// import { CanceledError } from "../services/api-client";
import UserService, { User } from "../services/user-services";
import userServices from "../services/user-services";
import useUsers from "../hooks/useUsers";

// const ProductList = ({ catagory }: { catagory: string }) => {
//   const [products, setProducts] = useState<string[]>([]);

//   useEffect(() => {
//     console.log("ProductList Fetching data from", catagory);
//     setProducts(["Apple", "Banana", "Orange"]);
//   }, [catagory]);
//   return <div>ProductList</div>;
// };
// interface User {
//   id: number;
//   name: string;
//   //url: string;
// }
const ProductList = () => {
  const { users, loading, error, setUsers, setError } = useUsers();
  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    UserService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const name = prompt("Enter the name of the user");
    const originalUsers = [...users];
    // const newUser = {
    //   id: 0,
    //   name: "Usman",
    // };
    if (name !== "") {
      const newUser = {
        id: users.length + 1,
        name: name || "",
      };
      setUsers([newUser, ...users]);

      userServices
        .create(newUser)
        .then(({ data: newUser }) => setUsers([newUser, ...users]))
        .catch((err) => {
          setError(err.message);
          setUsers(originalUsers);
        });
    }
  };

  const updateUser = (user: User) => {
    const name = prompt("Enter the new name of the user", user.name);
    const originalUsers = [...users];
    const updatedUsers = users.map((u) =>
      u.id === user.id ? { ...u, name: name || u.name } : u
    );
    setUsers(updatedUsers);
    // axios
    //   .put(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
    //     ...user,
    //     name: name,
    //   })
    //   .catch((err) => {
    //     setError(err.message);
    //     setUsers(originalUsers);
    //   });
    userServices
      .update({
        ...user,
        name: name || user.name,
      })
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };
  return (
    <>
      {error && <p className="text-red-600">{error}</p>}
      {loading && (
        <ClipLoader
          color="blue"
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
      {/* <ul>
           {users.map((user) => (
             <li key={user.id}>{user.name}</li>
             <img
             key={user.id}
               src={user.url}
              alt="user"
              className="w-20 h-20"
            />
           ))}
           </ul> */}
      <button
        onClick={addUser}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
      >
        Add User
      </button>
      <ul className="border border-gray-600 rounded-lg">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex justify-between items-center border-b border-gray-600 p-2 last:border-b-0"
          >
            <li>{user.name}</li>
            <div className="flex gap-2">
              <button
                onClick={() => updateUser(user)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Update
              </button>

              <button
                onClick={() => deleteUser(user)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </ul>
    </>
  );
};

export default ProductList;
