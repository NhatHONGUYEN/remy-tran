import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="relative h-screen w-full">
      <Navbar />
      <div className="absolute w-96 top-[40%]    -z-40">
        <img src="../../public/Reveal+shoe.gif" alt="" />
      </div>
      <div className="w-[400%] top-[52vh] absolute overflow-hidden">
        <p className="text-[400px] animate-marquee whitespace-nowrap">
          Rémy Tran - Rémy Tran - Rémy Tran - Rémy Tran - Rémy Tran - Rémy Tran
          - Rémy Tran - Rémy Tran - Rémy Tran - Rémy Tran - Rémy Tran - Rémy
          Tran -
        </p>
      </div>
      <div className=" h-44 w-[30%] absolute font-thin  top-[25%] left-[37%] z-50">
        <p className="text-8xl ">
          FREELANCE MOTION
          <span className="py-10 inline-block">DESIGNER 2D/3D</span>
        </p>
      </div>

      <div>
        <video
          className="w-[30%] absolute top-[20vh] left-[65vw] "
          src="../../public/00-Showreel remy.mp4"
          autoPlay
          loop
          muted
          controls={false}
        ></video>
      </div>
    </div>
  );
}
