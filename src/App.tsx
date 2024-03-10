import ListGroup from "./components/ListGroup";

function App() {
  return (
    <div>
      <ListGroup
        items={["Multan", "Sialkot", "Vehari", "Islamabd", "Karachi"]}
        heading="Cities of Pakistan"
      />
    </div>
  );
}

export default App;
