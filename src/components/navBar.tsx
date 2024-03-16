import { BsCart2 } from "react-icons/bs";
interface Props {
  cartItemsCount: number;
}
const navBar = ({ cartItemsCount }: Props) => {
  return (
    <div className="text-gray-600 flex items-center gap-2 bg-slate-300 p-2 rounded-lg">
      <BsCart2 />
      Cart Items - {cartItemsCount}
    </div>
  );
};

export default navBar;
