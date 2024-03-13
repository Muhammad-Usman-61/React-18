import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
interface Props {
  onClick: () => void;
}

function LikeButton({ onClick }: Props) {
  const [liked, setLiked] = useState(false);
  const toggle = () => {
    setLiked(!liked);
    onClick();
  };
  return liked ? (
    <AiOutlineHeart size={30} onClick={toggle} />
  ) : (
    <AiFillHeart color="red" size={30} onClick={toggle} />
  );
}

export default LikeButton;
