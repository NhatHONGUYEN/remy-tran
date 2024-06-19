import FrontPage from "../components/FrontPage";
import { motion } from "framer-motion";

export default function Home() {
  const text = "Rémy-Tran-Rémy-Tran-Rémy-  ";
  const Letter = text.split("");

  return (
    <div className="bg-black h-screen w-screen">
      <FrontPage />
      <div className="w-full h-screen flex relative p-32  ">
        <section className="animate-spin absolute  right-[20%] top-80 rotating-text">
          {Letter.map((item, index) => {
            return (
              <motion.span
                key={index}
                className="letter absolute  text-5xl"
                style={{
                  transform: `rotate(${index * 14.5}deg) translateX(200px)`,
                }}
              >
                {item}
              </motion.span>
            );
          })}
        </section>

        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-9xl transition-colors duration-1000 hover:text-red-600">
            About
          </h1>
          <p className="text-8xl transition-colors duration-1000 hover:text-red-600 w-3/5 py-10">
            Hey there! I’m a freelance 2D/3D Motion designer based in Paris.
          </p>
          <div className="w-[500px] h-[500px] ml-[15%] ">
            <img
              src="/geisha+corrected+2.jpg"
              alt="remy"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        <div className="text-4xl font-thin absolute w-2/5 bottom-56 right-80 ">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            I started my motion adventure in 2015 passing through various
            project and challenges like Videomapping, Architecture viz,
            Explainer video and even opening credits for a music video!
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className=" pt-20"
          >
            Nowadays I spend my time focusing on becoming a fully fledged 3D
            wizard, specializing towards photorealistic renders and playful
            animations.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
