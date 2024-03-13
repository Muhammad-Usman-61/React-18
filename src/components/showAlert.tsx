import { useState } from "react";
import Alert from "./Alert";
import Button from "./Button";

function showAlert() {
  const [alertVisible, setAlert] = useState(false);
  return (
    <div className="py-4 border-solid border-grey border-y-2 mb-4">
      {alertVisible && (
        <Alert onClose={() => setAlert(false)}>
          A simple info alert. You can close it.
        </Alert>
      )}
      <Button
        text="Default"
        color="text-white"
        backgroundColor="bg-blue-700"
        onHoverBackgroundColor="bg-blue-800"
        onClick={() => setAlert(true)}
      />
    </div>
  );
}

export default showAlert;
