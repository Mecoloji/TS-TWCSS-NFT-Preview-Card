import Avatar from "./components/Avatar";
import Details from "./components/Details";
import Heading from "./components/Heading";
import Image from "./components/Image";
import Name from "./components/Name";
import Paragraph from "./components/Description";

const App = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen w-full">
        <div className="flex flex-col justify-center items-center h-auto w-auto rounded-xl bg-CBG font-Outfits drop-shadow-2xl p-1">
          <Image />
          <Heading />
          <Paragraph />
          <Details />
          <div className="flex w-60 flex-start mb-4">
            <Avatar />
            <Name />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
