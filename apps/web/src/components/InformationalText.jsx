
const InformationalText = ({
  placeholder
}) => {
  return <div className="flex w-full h-20 md:h-28 relative justify-center items-center">
    <span className="font-bold text-3xl lg:text-4xl text-gray-300">{placeholder}</span>
  </div>
};

export default InformationalText;
