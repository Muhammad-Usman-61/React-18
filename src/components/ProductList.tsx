import { useEffect, useState } from "react";

const ProductList = ({ catagory }: { catagory: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("ProductList Fetching data from", catagory);
    setProducts(["Apple", "Banana", "Orange"]);
  }, [catagory]);
  return <div>ProductList</div>;
};

export default ProductList;
