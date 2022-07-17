import { FaPlayCircle } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="hero-container text-gray-100 flex flex-col items-center p-1 font-semibold text-center">
      <h1 className="text-[34px] uppercase mt-10 mb-4 sm:text-5xl md:text-7xl">
        Adventure awaits
      </h1>
      <p className="text-2xl mb-8 md:text-3xl">What are you waiting for?</p>
      <div className="w-full flex flex-col justify-center items-center uppercase gap-2 md:flex-row md:text-2xl">
        <button className="hero-btn text-gray-50 border hover:bg-gray-50 hover:text-neutral-900 hover:outline-0">
          Get Started
        </button>
        <button className="hero-btn bg-gray-200 text-neutral-900 flex items-center gap-1 hover:bg-gray-50 ">
          Watch trailer
          <div>
            <FaPlayCircle />
          </div>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
