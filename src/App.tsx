// import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
  return (
    <div>
      {/* <ListGroup
        items={["Multan", "Sialkot", "Vehari", "Islamabd", "Karachi"]}
        heading="Cities of Pakistan"
        onSelection={(item, index) => console.log(item, index)}
      /> */}
      <Alert>
        <span className="font-medium">Danger alert!</span>
        Stay Alert
      </Alert>
    </div>
  );
}

export default App;
