import { useEffect, useState } from "react";

// const ProductList = ({ catagory }: { catagory: string }) => {
//   const [products, setProducts] = useState<string[]>([]);

//   useEffect(() => {
//     console.log("ProductList Fetching data from", catagory);
//     setProducts(["Apple", "Banana", "Orange"]);
//   }, [catagory]);
//   return <div>ProductList</div>;
// };

const ProductList = () => {
  const connect = () => console.log("Connecting to database");
  const disconnect = () => console.log("Disconnecting from database");

  useEffect(() => {
    connect();
    return () => disconnect();
  });
};

export default ProductList;
