import logo from "../assets/logo1.png";
import Icons from "./icons";
import resume from "../assets/Resume.pdf";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="flex items-center justify-center gap-4 text-lg"> {/* Changed text size to lg for smaller font */}
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-2 py-0.5 text-cyan-100 bg-transparent border border-neutral rounded hover:bg-cyan-100 hover:text-black transition duration-300" 
        >
          Resume
        </a>
        <Icons />
      </div>
    </nav>
  );
};

export default Navbar;
