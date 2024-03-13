import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
interface Props {
  onClick?: (type: string) => void;
  name?: string;
}

function LikeButton({ onClick, name = "Item" }: Props) {
  const [liked, setLiked] = useState(false);
  const toggle = () => {
    setLiked(!liked);
    if (onClick) {
      onClick("hi there!");
    }
    liked ? console.log(name, "Liked") : console.log(name, "Disliked");
  };
  return liked ? (
    <AiOutlineHeart size={18} onClick={toggle} cursor={"pointer"} />
  ) : (
    <AiFillHeart color="red" size={18} onClick={toggle} cursor={"pointer"} />
  );
}

export default LikeButton;
