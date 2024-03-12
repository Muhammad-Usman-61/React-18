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
      />
    </div>
  );
}

export default App;
