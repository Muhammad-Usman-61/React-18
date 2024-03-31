import { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";
// import axios, { AxiosError } from "axios";
import ClipLoader from "react-spinners/ClipLoader";

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
  //url: string;
}
const ProductList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  //   const connect = () => console.log("Connecting to database");
  //   const disconnect = () => console.log("Disconnecting from database");
  //   useEffect(() => {
  //     connect();
  //     return () => disconnect();
  //   });
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axios
      //.get("https://jsonplaceholder.typicode.com/photos")
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    // .finally(() => {
    //   setLoading(false);
    // });

    return () => controller.abort();
    // const fetchUsers = async () => {
    //   try {
    //     const res = await axios.get<User[]>(
    //       "https://jsonplaceholder.typicode.com/users"
    //     );
    //     setUsers(res.data);
    //   } catch (err) {
    //     setError((err as AxiosError).message);
    //   }
    // };
    // fetchUsers();
  }, []);

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
      <ul className="border border-gray-600 rounded-lg">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex justify-between items-center border-b border-gray-600 p-2 last:border-b-0"
          >
            <li>{user.name}</li>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Delete
            </button>
          </div>
        ))}
      </ul>
    </>
  );
};

export default ProductList;
