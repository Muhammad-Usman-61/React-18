import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Multan", "Sialkot", "Vehari", "Islamabd"];
  return (
    <div>
      <ListGroup items={items} heading="Cities of Pakistan" />
    </div>
  );
}

export default App;
