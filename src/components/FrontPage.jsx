import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function FrontPage() {
  return (
    <motion.div
      className="relative h-screen w-full bg-black"
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0, backgroundColor: "#FBFBFB" }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Navbar />
      <div className="absolute w-96 top-[40%] left-16 -z-40">
        <img
          className="transition-transform duration-1000 hover:z-50 hover:scale-125"
          src="/Reveal+shoe.gif"
          alt="chaussure"
        />
      </div>
      <div className="absolute w-[18%] top-[15%] left-72 -z-50">
        <img src="/Chill_Render_DEF.jpg" alt="chill" />
      </div>
      <div className="w-[400%] top-[52vh] absolute overflow-hidden">
        <p className="text-[380px] animate-marquee whitespace-nowrap border-t-2  border-b-2 border-gray-900">
          Rémy Tran - Rémy Tran - Rémy Tran - Rémy Tran - Rémy Tran - Rémy Tran
          - Rémy Tran - Rémy Tran - Rémy Tran - Rémy Tran - Rémy Tran - Rémy
          Tran -
        </p>
      </div>

      <div className="h-44 w-[30%] absolute font-thin top-[25%] left-[37%] z-50">
        <p className="text-8xl">
          FREELANCE MOTION
          <span className="py-10 inline-block">DESIGNER 2D/3D</span>
        </p>
      </div>
      <motion.video
        className="w-[30%] z-50 absolute top-[25vh] left-[65vw]"
        src="/00-Showreel remy.mp4"
        autoPlay
        loop
        muted
        controls={false}
        whileHover={{
          scale: 1,
          top: "50%",
          left: "50%",
          width: "70%",
          height: "70%",
          translateX: "-50%",
          translateY: "-50%",
        }}
        transition={{ duration: 1 }}
      />
    </motion.div>
  );
}
