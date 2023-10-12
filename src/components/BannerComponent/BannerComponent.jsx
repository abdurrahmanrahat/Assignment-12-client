import { Link } from "react-router-dom";

const BannerComponent = ({ headingTitle, pageName, bgCover }) => {
  return (
    <div
      className="bg-cover text-white h-[420px] xl:h-[520px] relative "
      style={{ backgroundImage: `url(${bgCover})` }}
    >
      <div className="w-full flex flex-col items-center justify-center gap-6 p-4 md:p-0 mt-16 md:mt-0 absolute inset-0 bg-black opacity-75">
        <h2 className="text-3xl md:text-4xl">{headingTitle}</h2>
        <p className="text-lg">
          <Link to="/" className="cursor-pointer hover:text-[#EE9322] hover:text-[20px] duration-300">
            Home
          </Link>{" "}
          <span className="font-semibold">/</span> {pageName}
        </p>
      </div>
    </div>
  );
};

export default BannerComponent;
