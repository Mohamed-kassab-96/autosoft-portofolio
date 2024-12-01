import Header from "../components/Header";
import FloatingContainer from "../components/FloatingContainer";
import backgroundImage from "../assets/background.png";

const HomePage = () => {
  return (
    <div 
      className="relative bg-cover bg-center h-screen" 
      style={{ backgroundImage:` url(${backgroundImage}) `}}
    >
      {/* <div className="absolute inset-0 bg-black opacity-50"></div>   */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-md pointer-events-none"></div>  
      <Header />
      <FloatingContainer />
    </div>
  );
};

export default HomePage;