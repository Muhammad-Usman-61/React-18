// import ListGroup from "./components/ListGroup";
// import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <div>
      {/* <ListGroup
        items={["Multan", "Sialkot", "Vehari", "Islamabd", "Karachi"]}
        heading="Cities of Pakistan"
        onSelection={(item, index) => console.log(item, index)}
      /> */}
      {/* <Alert>
        <span className="font-medium">Danger alert!</span>
        Stay Alert
      </Alert> */}
      <Button
        text="Deafault"
        color="text-white"
        backgroundColor="bg-blue-700"
        onHoverBackgroundColor="bg-blue-800"
        onClick={() => console.log("1st Button clicked")}
      />
      <Button
        text="Deafault"
        color="text-white"
        backgroundColor="bg-gray-800"
        onHoverBackgroundColor="bg-gray-900"
        onClick={() => console.log("2nd Button clicked")}
      />
    </div>
  );
}

export default App;
