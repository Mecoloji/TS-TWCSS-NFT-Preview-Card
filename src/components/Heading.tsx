interface HeadingProps {
  title?: string;
}

const Heading = ({ title }: HeadingProps) => {
  return (
    <div className="w-60 my-1">
      <p className="text-White hover:cursor-pointer hover:text-Cyan">
        {title || "Equilibrium #3429"}
      </p>
    </div>
  );
};

export default Heading;
