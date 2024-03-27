import { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("ProductList Fetching data from server");
    setProducts(["Apple", "Banana", "Orange"]);
  }, []);
  return <div>ProductList</div>;
};

export default ProductList;
