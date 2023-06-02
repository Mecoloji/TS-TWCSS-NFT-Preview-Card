import Ethereum from "../images/icon-ethereum.svg";
import Clock from "../images/icon-clock.svg";

interface DetailsProps {
  price?: number;
  daysLeft?: number;
}

const Details = ({ price = 0.041, daysLeft = 3 }: DetailsProps) => {
  return (
    <>
      <div className="flex flex-row w-60 justify-between my-2">
        <div className="flex text-xs">
          <img src={Ethereum} alt="" className="mr-2 h-4" />
          <p className="text-Cyan">{price} ETH</p>
        </div>
        <div className="flex text-xs">
          <img src={Clock} alt="" className="mr-2 h-4" />
          <p className="text-SBlue">{daysLeft} days left</p>
        </div>
      </div>
      <div>
        <hr className="border border-solid border-Line w-60 my-3" />
      </div>
    </>
  );
};

export default Details;
