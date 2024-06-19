import FrontPage from "../components/FrontPage";
import About from "./About";

export default function Home() {
  return (
    <div className="bg-black h-screen w-screen">
      <FrontPage />
      <About />
    </div>
  );
}
