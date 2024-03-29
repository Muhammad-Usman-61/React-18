import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

// const ProductList = ({ catagory }: { catagory: string }) => {
//   const [products, setProducts] = useState<string[]>([]);

//   useEffect(() => {
//     console.log("ProductList Fetching data from", catagory);
//     setProducts(["Apple", "Banana", "Orange"]);
//   }, [catagory]);
//   return <div>ProductList</div>;
// };
interface User {
  id: number;
  name: string;
}
const ProductList = () => {
  const [users, setUsers] = useState<User[]>([]);
  //   const connect = () => console.log("Connecting to database");
  //   const disconnect = () => console.log("Disconnecting from database");
  //   useEffect(() => {
  //     connect();
  //     return () => disconnect();
  //   });
  const [error, setError] = useState("");
  useEffect(() => {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/husers")
    //   .then((res) => {
    //     setUsers(res.data);
    //   })
    //   .catch((err) => setError(err.message));
    const fetchUsers = async () => {
      try {
        const res = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
      } catch (err) {
        setError((err as AxiosError).message);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      {error && <p className="text-red-600">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default ProductList;
