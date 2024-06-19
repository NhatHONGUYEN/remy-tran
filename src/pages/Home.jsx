import { Link } from "react-router-dom";
import FrontPage from "../components/FrontPage";
import About from "./About";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Adobe Stagger",
    src: "../../public/adobestagger (1).jpg",
    description: "A description of the Adobe Stagger project.",
    link: "/projects/adobe-stagger",
  },
  // add more projects here
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <div className="bg-black h-screen w-screen">
      <FrontPage />
      <About />
    </div>
  );
}
