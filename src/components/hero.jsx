import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/remprofile.jpg";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex-1">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Christian Remoh Mappatao
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Web Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="h-[300px] w-[300px] lg:h-[600px] lg:w-[600px]">
            <img src={profilePic} alt="Remoh Mappatao" className="rounded-2xl object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
