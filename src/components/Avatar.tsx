import { FC } from "react";
import Profile from "../images/image-avatar.png";

const Avatar: FC = () => (
  <div>
    <img
      src={Profile}
      alt=""
      className="w-7 h-7 rounded-full border-solid border border-White"
    />
  </div>
);

export default Avatar;
