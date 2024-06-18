import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-between text-2xl p-8">
      <div>
        <img
          className="object-contain h-12 w-12"
          src="../../public/Logo+Remy_Def_Noir+PNG.png"
          alt="logo"
        />
      </div>
      <div>
        <Link className="mr-4" to="/about">
          About
        </Link>
        <Link className="mr-4" to="/work">
          Work
        </Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}
