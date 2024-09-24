import pcImg from "../assets/pc.png";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap lg:flex-nowrap lg:space-x-8">
        {/* Image container */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:p-8">
          <img src={pcImg} alt="about" className="max-w-full h-auto" />
        </div>

        {/* About text container */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start lg:p-8">
          <p className="text-lg text-justify">{ABOUT_TEXT}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
