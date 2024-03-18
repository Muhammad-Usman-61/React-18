import { useState } from "react";
import Button from "../Button";
import { produce } from "immer";
const UpdateObjectsInArray = () => {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, name: "Apple", quantity: 1 },
      { id: 2, name: "Banana", quantity: 2 },
      { id: 3, name: "Orange", quantity: 3 },
    ],
  });
  return (
    <div>
      {cart.items.map((item, index) => (
        <div key={index}>
          {item.name} - {item.quantity}
        </div>
      ))}
      <Button
        text="Add Apple"
        color="text-white"
        backgroundColor="bg-blue-700"
        onHoverBackgroundColor="bg-blue-800"
        onClick={() => {
          setCart({
            ...cart,
            items: cart.items.map((item) => {
              return item.name === "Apple"
                ? { ...item, quantity: item.quantity + 1 }
                : item;
            }),
          });
        }}
      />
      <Button
        text="Add Banana"
        color="text-white"
        backgroundColor="bg-blue-700"
        onHoverBackgroundColor="bg-blue-800"
        onClick={() => {
          setCart({
            ...cart,
            items: cart.items.map((item) =>
              item.name === "Banana"
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        }}
      />
      <Button
        text="Add Orange"
        color="text-white"
        backgroundColor="bg-blue-700"
        onHoverBackgroundColor="bg-blue-800"
        onClick={() => {
          setCart(
            produce((draft) => {
              draft.items[2].quantity += 1;
            })
          );
        }}
      />
    </div>
  );
};

export default UpdateObjectsInArray;
