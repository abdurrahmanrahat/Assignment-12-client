import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PopularClassSec = () => {

    const { data: approvedClasses = [] } = useQuery(['approvedClasses'], async () => {
        const res = await fetch('http://localhost:5000/approvedClasses')
        return res.json();
    })

    return (
        <div className="my-24">
            {/* Section Title */}
            <SectionTitle
                subHeading='See popular'
                heading='Classes Section'
            ></SectionTitle>

            {/* Top 6 Class here */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2 md:px-0">
                {
                    approvedClasses.slice(0, 6).map(appClass => <div
                        key={appClass._id}
                        className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={appClass.classImg} className="" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{appClass.classNameSpe}</h2>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularClassSec;