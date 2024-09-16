import logo from "../assets/avlogo.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex items-shrink-0 items-center">
        <img className="mx-2 w-12" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/aviral-bansal-8427a4289/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Aviral1611" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://twitter.com/AviralBansal16" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter />
        </a>
        <a href="https://instagram.com/aviralbansal16" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
