interface DescriptionProps {
  description?: string;
}

const Description = ({ description }: DescriptionProps) => {
  return (
    <div className="w-60 my-2 text-sm">
      <p className="text-SBlue leading-6">
        {description || "Our Equilibrium collection promotes balance and calm."}
      </p>
    </div>
  );
};

export default Description;
