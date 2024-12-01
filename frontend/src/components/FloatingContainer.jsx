import TextSection from "./TextSection";

const FloatingContainer = () => {
  return (
    // <div className="absolute top-1/3 left-1/4 p-8 bg-white bg-opacity-75 rounded-lg shadow-lg">
    <div className="absolute top-1/3 left-0 p-8  bg-opacity-75 rounded-lg ">
    {/* <div className="relative z-10 flex flex-col justify-center items-start h-full px-8"> */}
      <TextSection />
    </div>
  );
};

export default FloatingContainer;