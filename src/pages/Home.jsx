import FrontPage from "../components/FrontPage";
import About from "./About";
import Work from "./Work";

export default function Home() {
  return (
    <div className="bg-black h-screen w-screen">
      <FrontPage />
      <About />
      <Work />
    </div>
  );
}
