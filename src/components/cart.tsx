import { RxCrossCircled } from "react-icons/rx";
interface Props {
  products: string[];
  removeProduct: (index: string) => void;
  filteredItems: () => void;
}
const cart = ({ products, removeProduct, filteredItems }: Props) => {
  return (
    <div>
      {products.length !== 0 && (
        <ul className="max-w-48 border-2 border-gray-800 p-2 rounded-xl my-4">
          {products.map((product, index) => (
            <li key={index} className="flex items-center justify-between">
              {index + 1} - {product}{" "}
              <RxCrossCircled
                className="cursor-pointer"
                onClick={() => {
                  removeProduct(product), filteredItems();
                }}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default cart;
