import FrontPage from "../components/FrontPage";
import { ParallaxScroll } from "../components/ParallaxScroll";
import About from "./About";
import Contact from "./Contact";
import Work from "./Work";

export default function Home() {
  const images = [
    "/adobestagger (1).jpg",
    "/adobestagger (2).jpg",
    "/adobestagger (3).jpg",
    "/adobestagger (4).jpg",
    "/amber (1).jpg",
    "/amber (2).jpg",
    "/amber (3).jpg",
    "/funeral (1).png",
    "/funeral (2).png",
    "/funeral (3).png",
    "/funeral (4).png",
    "/santarome (1).jpg",
    "/santarome (2).jpg",
    "/brikenstock (1).gif",
    "/brikenstock (2).gif",
  ];

  return (
    <div className="bg-black h-screen w-screen">
      <FrontPage />
      <About />
      <Work />
      <ParallaxScroll images={images} className="bg-black" />
      <Contact />
    </div>
  );
}
