const TextSection = () => {
  return (
    <div>
      {/* <h1 className="text-4xl font-bold mb-4">Welcome to AutoSoft</h1> */}
      <h1 className="text-4xl font-bold mb-4 text-white">TRANSFORM <span className="text-blue-500">VISIONS</span> INTO <span className="text-orange-500">REAL</span></h1>
      {/* <p className="text-lg">We build innovative software solutions for your business needs.</p> */}
      <p className="text-lg text-white">From concept to launch, we deliver websites and applications <br />designed to inspire and perform.</p>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">Contact Us</button>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full ml-2">Our Projects</button>
      </div>
    </div>
  );
};

export default TextSection;