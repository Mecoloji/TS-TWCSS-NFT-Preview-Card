import { FC } from "react";
import Main from "../images/image-equilibrium.jpg";
import View from "../images/icon-view.svg";

const Image: FC = () => (
  <div className="relative">
    <img src={Main} alt="" className="h-60 w-60 m-3 rounded-lg" />
    <div className="absolute inset-0 flex items-center justify-center hover:w-60 hover:h-60 m-3 top-0 text-center hover:cursor-pointer hover:bg-Cyanh rounded-lg">
      <img
        src={View}
        alt=""
        className="h-auto w-auto opacity-0 hover:opacity-100"
      />
    </div>
  </div>
);

export default Image;
