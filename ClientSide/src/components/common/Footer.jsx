import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { BsLaptop } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logobgless3.svg";

function Footer() {
  return (
    <footer className="p-3 text-blue-50 h-90 ">
      <div className="h-full w-full bg-primary rounded-xl">
        <h3 className="text-xl font-semibold text-center flex justify-center items-center gap-2 py-2 border-b-2 border-blue-50">
          - - - Made with <BsLaptop className="mt-0.5" /> by a Dev, for Devs - -
          -
        </h3>
        <div className="flex justify-between items-center py-4 px-16">
          <div className="h-full flex flex-col justify-center items-center">
            <img src={logo} alt="" className="h-38" />
            <h1 className="text-xl">ZekiCoder's LMS</h1>
            <p className="text-sm">Learn. Build. Conquer.</p>
          </div>
          
          <div className="h-full">
            <div className="h-full">
              <h1 className="text-lg font-bold mb-3">USEFUL LINKS</h1>
            </div>
            <div className="flex flex-col gap-4 text-lg font-semibold">
              <Link
                to="/"
                className="flex items-center text-slate-400 gap-2 hover:text-blue-50"
              >
                Courses
              </Link>
              <Link
                to="/"
                className="flex items-center text-slate-400 gap-2 hover:text-blue-50"
              >
                Help
              </Link>
              <Link
                to="/"
                className="flex items-center text-slate-400 gap-2 hover:text-blue-50"
              >
                About
              </Link>
            </div>
          </div>
          <div className="h-full">
            <h1 className="text-lg font-bold mb-3">CONTACT US</h1>
            <div className="flex flex-col gap-4 text-lg font-semibold">
              <Link
                to="https://www.linkedin.com/in/ashfaq-ahmed-khan-2264152ab/"
                className="flex items-center text-slate-400 gap-2 hover:text-blue-50"
              >
                <FaLinkedin /> <h2>Linkedin</h2>
              </Link>
              <Link
                to="https://github.com/Ashfaq-AK"
                className="flex items-center text-slate-400 gap-2 hover:text-blue-50"
              >
                <FaGithub /> <h2>Github</h2>
              </Link>
              <Link
                to="https://www.instagram.com/_khan._sab_/"
                className="flex items-center text-slate-400 gap-2 hover:text-blue-50"
              >
                <FaInstagram /> <h2>Instagram</h2>
              </Link>
            </div>
          </div>
          <div className="h-full">
            <div className="h-full">
              <h1 className="text-lg font-bold mb-3">TECHNOLOGIES</h1>
            </div>
            <div className="flex flex-col gap-4 text-lg font-semibold">
              <Link
                to="/"
                className="flex items-center text-slate-400 gap-2 hover:text-blue-50"
              >
                MERN
              </Link>
              <Link
                to="/"
                className="flex items-center text-slate-400 gap-2 hover:text-blue-50"
              >
                Chatbase
              </Link>
              <Link
                to="/"
                className="flex items-center text-slate-400 gap-2 hover:text-blue-50"
              >
                Animate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
