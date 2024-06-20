import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const projects = [
  {
    id: 1,
    title: "Adobe Stagger",
    image: "/adobestagger (1).jpg",
  },
  {
    id: 2,
    title: "Amber",
    image: "/Chill_Render_DEF.jpg",
  },
  {
    id: 3,
    title: "Birkenstock",
    image: "/Splash.gif",
  },
  {
    id: 4,
    title: "Funeral",
    image: "/04-Main_0001.jpg",
  },
  {
    id: 5,
    title: "Santarome",
    image: "/image-asset.jpeg",
  },
  // add more projects here
];

export default function Work() {
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <div className="w-full h-screen flex p-20 mb-36 relative">
      <div className="ml-40">
        <h1 className="text-9xl border-2 border-black hover:scale-125 transition-transform duration-300 rounded-full p-10 font-semibold">
          Work
        </h1>
      </div>
      <div>
        {hoveredImage && (
          <img
            src={hoveredImage}
            alt="Project"
            className="w-[40%] h-auto absolute left-[26%] top-80 hover:scale-125 transition-transform duration-300"
          />
        )}
      </div>
      <div className="flex flex-col absolute top-0 right-32">
        <div>
          {projects.map((project, index) => (
            <Link
              to={`/projects/${project.id}`}
              key={project.id}
              onMouseEnter={() => setHoveredImage(project.image)}
            >
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.3 }}
              >
                <motion.h3
                  className="text-8xl mt-16 py-10 border-b border-black"
                  whileHover={{ translateX: 40 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.title}
                </motion.h3>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 -left-52 w-[50%] h-[50%] -z-10 bg-black rounded-full"></div>
    </div>
  );
}
