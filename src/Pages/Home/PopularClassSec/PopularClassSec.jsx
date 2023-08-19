import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import SingleAppClass from "./SingleAppClass";

const PopularClassSec = () => {
  const { data: approvedClasses = [] } = useQuery(
    ["approvedClasses"],
    async () => {
      const res = await fetch(
        "https://assignment-12-server-lyart-xi.vercel.app/approvedClasses"
      );
      return res.json();
    }
  );

//   const currentMode = localStorage.getItem("theme");

  return (
    <div className="my-24">
      {/* Section Title */}
      <SectionTitle subHeading="See our" heading="Top Classes"></SectionTitle>

      {/* Top 6 Class here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 px-2 md:px-0 mt-10">
        {approvedClasses.slice(0, 6).map((appClass) => (
          <SingleAppClass
            key={appClass._id}
            appClass={appClass}
          ></SingleAppClass>
        ))}
      </div>
    </div>
  );
};

export default PopularClassSec;

/*
<div
                        key={appClass._id}
                        className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={appClass.classImg} className="hover:scale-110 duration-500" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className={`card-title ${currentMode == 'dark' && 'text-black'}`}>{appClass.classNameSpe}</h2>
                        </div>
                    </div>
*/
