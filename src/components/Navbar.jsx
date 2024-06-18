import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="absolute w-full h-12 z-50 top-0 left-0 text-xl ">
      <div className="flex justify-between items-center p-12 border-b border-black">
        <div>
          <img
            className="object-contain h-12 w-12"
            src="../../public/Logo+Remy_Def_Noir+PNG.png"
            alt="logo"
          />
        </div>
        <div>
          <Link className="mr-10" to="/about">
            About
          </Link>
          <Link className="mr-10" to="/work">
            Work
          </Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}
