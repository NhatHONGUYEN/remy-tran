import { useState } from "react";
import { Link } from "react-router-dom";
import FrontPage from "../components/FrontPage";
import About from "./About";

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

export default function Home() {
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <div className="bg-black h-screen w-screen">
      <FrontPage />
      <About />
      <div className="w-full h-screen flex p-20 relative">
        <div>
          <h1 className="text-9xl font-semibold">Work</h1>
        </div>
        <div>
          {hoveredImage && (
            <img
              src={hoveredImage}
              alt="Project"
              className="w-[40%] h-auto absolute left-[24%] top-96 transition-opacity duration-300"
            />
          )}
        </div>
        <div className="flex flex-col absolute top-0 right-32">
          <div>
            {projects.map((project) => (
              <Link
                to={`/projects/${project.id}`}
                key={project.id}
                onMouseEnter={() => setHoveredImage(project.image)}
              >
                <div>
                  <h3 className="text-8xl mt-16 py-10 border-b border-black">
                    {project.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 -left-52 w-[50%] h-[50%] -z-10 bg-black rounded-full"></div>
      </div>
    </div>
  );
}
