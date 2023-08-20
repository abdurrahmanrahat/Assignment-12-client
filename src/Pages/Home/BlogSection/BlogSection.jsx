import { FaArrowRight } from "react-icons/fa";
import dataOfBlog from "./blogData";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const BlogSection = () => {
  return (
    <div className="text-center mt-32 mb-20">
      <SectionTitle
        subHeading="How may I"
        heading="Help Your Brand?"
      ></SectionTitle>
      <h2 className="text-xl md:w-2/3 mx-auto">
        I specialize in creating beautiful design & websites that convert &
        generate revenue while making an impact with marketing for growing your
        brand.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16  mt-14">
        {dataOfBlog.map((service) => (
          <div
            key={service._id}
            className="rounded-lg shadow-xl overflow-hidden transition-transform transform hover:scale-105 p-4"
          >
            <img
              src={service.image}
              className="w-full h-auto md:w-80 mx-auto"
              alt="Shoes"
            />
            <div className="p-4">
              <p className="text-xl font-semibold">
                {service.title}
              </p>
              <p className="text-[16px] mt-2">
                {service.description}
              </p>
            </div>
            <div className="bg-[#01539C] text-white py-2 px-4 flex justify-center items-center ">
              <button className="uppercase font-medium hover:bg-[#0E0C1A] transition-colors duration-300 border-0 rounded-full focus:outline-none focus:ring-2 focus:ring-[#FFBD00] focus:ring-offset-2">
                View Details <FaArrowRight className="ml-2 inline" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
