import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

export const ParallaxScroll = ({ images, className }) => {
  const scrollRef = useRef(null);
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: scrollRef,
    offset: ["start start", "end start"],
    layoutEffect: false,
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -2000]); // Increased the translation for the first column
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -1000]); // Increased the translation for the third column

  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third * 2); // Doubled the number of images in the first column
  const secondPart = images.slice(third * 2, images.length);
  const thirdPart = images.slice(0, third * 2); // Moved some images from the first column to the third column

  return (
    <div
      className={`h-[2500px] relative items-start overflow-y-auto w-full ${className}`}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start mx-auto gap-10 py-40 px-10"
        ref={gridRef}
      >
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div style={{ y: translateFirst }} key={"grid-1" + idx}>
              <img
                src={el}
                className="h-auto w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <img
                src={el}
                className="h-auto w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <img
                src={el}
                className="h-auto w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
