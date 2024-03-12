import { useState } from "react";
import Alert from "./Alert";
import Button from "./Button";

function showAlert() {
  const [alertVisible, setAlert] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlert(false)}>
          A simple info alert with an{" "}
          <a href="#" className="font-semibold underline hover:no-underline">
            example link
          </a>
          . Give it a click if you like.
        </Alert>
      )}
      <Button
        text="Deafault"
        color="text-white"
        backgroundColor="bg-blue-700"
        onHoverBackgroundColor="bg-blue-800"
        onClick={() => setAlert(true)}
      />
    </div>
  );
}

export default showAlert;
