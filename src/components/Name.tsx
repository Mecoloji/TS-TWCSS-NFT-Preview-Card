interface NameProps {
  name?: string;
}

const Name = ({ name }: NameProps) => {
  return (
    <>
      <div className="my-1 ml-3 text-SBlue text-sm">
        Creation of{" "}
        <span className="text-White hover:text-Cyan hover:cursor-pointer">
          {name || "Jules Wyvern"}
        </span>
      </div>
    </>
  );
};

export default Name;
