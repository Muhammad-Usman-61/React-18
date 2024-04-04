import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import UserService, { User } from "../services/user-services";

const useUsers = () => {
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
    setLoading(true);
    const { request, cancel } = UserService.getAll<User>();
    request
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

    return () => cancel();
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

  return { users, loading, error, setUsers, setError };
};

export default useUsers;
