import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
interface Props {
  onClick?: (type: any) => void;
  name?: string;
}

function LikeButton({ onClick, name = "Item" }: Props) {
  const [liked, setLiked] = useState(false);
  const toggle = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    setLiked(!liked);
    if (onClick) {
      onClick({});
    }
    liked ? console.log(name, "Liked") : console.log(name, "Disliked");
    e.stopPropagation();
  };
  return liked ? (
    <AiFillHeart
      color="red"
      size={18}
      onClick={(e) => toggle(e)}
      cursor={"pointer"}
    />
  ) : (
    <AiOutlineHeart size={18} onClick={(e) => toggle(e)} cursor={"pointer"} />
  );
}

export default LikeButton;
