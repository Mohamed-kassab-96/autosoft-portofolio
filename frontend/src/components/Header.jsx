// import SocialIcons from "./SocialIcons";

// const Header = () => {
//   return (
//     <header className="flex justify-between items-center p-4">
//       {/* Logo */}
//       <div className="text-2xl font-bold">AutoSoft</div>

//       {/* Navigation Links */}
//       <nav>
//         <ul className="flex gap-4">
//           <li><a href="#about" className="hover:underline">About</a></li>
//           <li><a href="#services" className="hover:underline">Services</a></li>
//           <li><a href="#portfolio" className="hover:underline">Portfolio</a></li>
//           <li><a href="#contact" className="hover:underline">Contact</a></li>
//         </ul>
//       </nav>

//       {/* Social Icons */}
//       <SocialIcons />
//     </header>
//   );
// };

// export default Header;
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import SocialIcons from "./SocialIcons";

const Header = () => {
  return (
    <header className="relative z-20 flex justify-between items-center p-4">
      {/* Logo */}
      {/* <div className="text-2xl font-bold">AutoSoft</div> */}
      <img src={logo} alt="AutoSoft Logo" className="h-12 w-auto"/>

      {/* Navigation Links */}
      <nav>
        <ul className="flex gap-4 text-white">
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/services" className="hover:underline">Services</Link></li>
          {/* <li><Link to="/portfolio" className="hover:underline">Portfolio</Link></li> */}
          <li><Link to="/portfolio" className="hover:underline">Our Projects</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </nav>

      {/* Social Icons */}
      <SocialIcons />
      {/* <div className="flex gap-2">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">FB</a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">TW</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">LN</a>
      </div> */}
    </header>
  );
};

export default Header;