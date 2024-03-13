import ListGroup from "./components/ListGroup/ListGroup";
// import Alert from "./components/Alert";
// import Button from "./components/Button";
import ShowAlert from "./components/showAlert";
import LikeButton from "./components/LikeButton";
import UpdateObjects from "./components/UpdateObjects";
function App() {
  return (
    <div>
      <ListGroup
        items={["Multan", "Sialkot", "Vehari", "Islamabad", "Karachi"]}
        heading="Cities of Pakistan"
      />
      {/* <ListGroup
        items={["Multan", "Sialkot", "Vehari", "Islamabad", "Karachi"]}
        heading="Cities of Pakistan"
        onSelection={(item, index) => console.log(item, index)}
      /> */}
      {/* <Alert>
        A simple info alert with an{" "}
        <a href="#" className="font-semibold underline hover:no-underline">
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
      <ShowAlert />
      <LikeButton />
      <UpdateObjects />
    </div>
  );
}

export default App;
