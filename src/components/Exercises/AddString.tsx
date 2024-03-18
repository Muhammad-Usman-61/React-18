import Button from "../Button";
import { useState } from "react";

const AddString = () => {
  const [pizza, setPizza] = useState({
    name: "Cheese",
    toppings: ["Cheese", "Tomato", "Basil"],
  });
  return (
    <div>
      {pizza.toppings.map((topping, index) => (
        <div key={index}>{topping}</div>
      ))}
      <Button
        text="Add Topping"
        color="text-white"
        backgroundColor="bg-blue-700"
        onHoverBackgroundColor="bg-blue-800"
        onClick={() => {
          setPizza({ ...pizza, toppings: [...pizza.toppings, "Mushroom"] });
        }}
      />
    </div>
  );
};

export default AddString;
