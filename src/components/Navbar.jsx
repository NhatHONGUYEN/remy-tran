import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="absolute w-full h-12 z-50 top-0 left-0 text-4xl ">
      <div className="flex justify-between items-center p-12 border-b border-black">
        <Link to="/">
          <img
            className="h-20 w-20 border-2 border-black rounded-full"
            src="../../public/Logo+Remy_Def_Noir+PNG.png"
            alt="logo"
          />
        </Link>
        <div className="flex">
          <motion.div
            whileHover={{ scale: 1.25 }}
            transition={{ duration: 0.3 }}
          >
            <Link className="mr-10" to="/about">
              About
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.25 }}
            transition={{ duration: 0.3 }}
          >
            <Link className="mr-10" to="/work">
              Work
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.25 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/contact">Contact</Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
