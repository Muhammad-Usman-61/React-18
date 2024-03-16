// import ListGroup from "./components/ListGroup/ListGroup";
// import Alert from "./components/Alert";
import Button from "./components/Button";
// import ShowAlert from "./components/showAlert";
// import LikeButton from "./components/LikeButton";
// import UpdateObjects from "./components/UpdateObjects";
// import UpdateArrays from "./components/UpdateArrays";
// import UpdateArrayOfObjects from "./components/UpdateArrayOfObjects";
import { FaBowlFood } from "react-icons/fa6";
import { MdNoDrinks } from "react-icons/md";
import NavBar from "./components/navBar";
import Cart from "./components/cart";
import { useState } from "react";
import SearchBar from "./components/SearchBar";

function App() {
  const [foodItems, setFoodItems] = useState([
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Pineapple",
  ]);
  const [showFoodItems, setShowFoodItems] = useState(true);
  const [showDrinkItems, setShowDrinkItems] = useState(false);
  const [drinkItems, setDrinkItems] = useState([
    "Coke",
    "Pepsi",
    "Sprite",
    "Fanta",
    "7up",
  ]);

  const totalItemsList = foodItems.concat(drinkItems);

  return (
    <div>
      <div className="border-b border-gray-200 flex items-center">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li
            onClick={() => {
              setShowFoodItems(!showFoodItems), setShowDrinkItems(false);
            }}
            className={
              showFoodItems
                ? "gap-2 me-2 inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg text-gray-600 border-gray-300 group cursor-pointer"
                : "gap-2 me-2 inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 group cursor-pointer"
            }
          >
            <FaBowlFood />
            Food Items
            <span>({foodItems.length})</span>
          </li>

          <li
            onClick={() => {
              setShowDrinkItems(!showDrinkItems), setShowFoodItems(false);
            }}
            className={
              showDrinkItems
                ? "gap-2 me-2 inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg text-gray-600 border-gray-300 group cursor-pointer"
                : "gap-2 me-2 inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 group cursor-pointer"
            }
          >
            <MdNoDrinks />
            Drink Items
            <span>({drinkItems.length})</span>
          </li>
        </ul>
        <NavBar cartItemsCount={totalItemsList.length} />
      </div>
      <SearchBar />
      {showFoodItems && (
        <Cart
          products={foodItems}
          removeProduct={(index) => {
            const newItems = foodItems.filter((_, i) => i !== index);
            setFoodItems(newItems);
          }}
        />
      )}
      {showDrinkItems && (
        <Cart
          products={drinkItems}
          removeProduct={(index) => {
            const newItems = drinkItems.filter((_, i) => i !== index);
            setDrinkItems(newItems);
          }}
        />
      )}
      <Button
        text="Clear Cart"
        color="text-white"
        backgroundColor="bg-slate-800"
        onHoverBackgroundColor="bg-slate-600"
        onClick={() => {
          setFoodItems([]);
          setDrinkItems([]);
        }}
      />
      {/* <ListGroup
        items={["Multan", "Sialkot", "Vehari", "Islamabad", "Karachi"]}
        heading="Cities of Pakistan"
      /> */}
      {/* <ListGroup
        items={["Multan", "Sialkot", "Vehari", "Islamabad", "Karachi"]}
        heading="Cities of Pakistan"
        onSelection={(item, index) => console.log(item, index)}
      /> */}
      {/* <Alert>
        A simple info alert with an{" "}
        <a href="#" classNameName="font-semibold underline hover:no-underline">
          example link
        </a>
        . Give it a click if you like.
      </Alert>
      <Button
        text="Deafault"
        color="text-white"
        backgroundColor="bg-blue-700"
        onHoverBackgroundColor="bg-blue-800"
        onClick={() => console.log("1st Button clicked")}
      /> */}
      {/*   <Button
        text="Deafault"
        color="text-white"
        backgroundColor="bg-gray-800"
        onHoverBackgroundColor="bg-gray-900"
        onClick={() => console.log("2nd Button clicked")}
      /> */}
      {/* <ShowAlert />
      <LikeButton />
      <UpdateObjects name="Usman" age={23} updatedName="Ali" />
      <UpdateArrays />
      <UpdateArrayOfObjects /> */}
    </div>
  );
}

export default App;
