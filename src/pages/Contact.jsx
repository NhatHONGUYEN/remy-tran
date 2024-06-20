import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between">
      <div className="flex-grow flex justify-center items-center">
        <div className="w-[70%] h-[60%] flex flex-col relative">
          <div className="flex pb-32">
            <img
              className="w-40 h-40 rounded-full object-cover mt-16 ml-10"
              src="../../public/remy.jpg"
              alt="remy"
            />
            <h1 className="text-9xl ml-20">
              Let's work <br /> together
            </h1>
          </div>
          <div>
            <hr className="" />
            <div className="flex items-center text-3xl pt-32">
              <a
                href="mailto:your-email@example.com"
                className="border-2 rounded-full py-8 px-14 transition-all duration-300 hover:-rotate-6 hover:bg-black hover:text-beige"
              >
                contact@remy-tran.com
              </a>

              <a
                href="tel:+1234567890"
                className="ml-4 border-2 rounded-full py-8 px-14 transition-all duration-300 hover:-rotate-6 hover:bg-black hover:text-beige"
              >
                +33770431695
              </a>
            </div>
          </div>
        </div>
        <div className="absolute right-[30%]  w-40 h-80 border-2 bg-black"></div>
      </div>
      <Footer />
    </div>
  );
}
