import { produce } from "immer";
import Button from "../Button";
import { useState } from "react";

const UpdateState = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });
  return (
    <div>
      {game.player.name}
      <Button
        text="Update Player's Name"
        color="text-white"
        backgroundColor="bg-blue-700"
        onHoverBackgroundColor="bg-blue-800"
        onClick={() => {
          setGame(
            produce((draft) => {
              draft.player.name = "John Doe";
            })
          );
        }}
      />
    </div>
  );
};

export default UpdateState;
