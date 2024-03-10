import ListGroup from "./components/ListGroup";

function App() {
  return (
    <div>
      <ListGroup
        items={["Multan", "Sialkot", "Vehari", "Islamabd", "Karachi"]}
        heading="Cities of Pakistan"
        onSelection={(item) => console.log(item)}
      />
    </div>
  );
}

export default App;
