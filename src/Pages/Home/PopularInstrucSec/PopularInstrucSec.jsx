import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const PopularInstrucSec = () => {

    const { data: allUsers = [] } = useQuery(['users'], async () => {
        const res = await fetch('https://assignment-12-server-lyart-xi.vercel.app/users')
        return res.json();
    })

    const instructors = allUsers?.filter(u => u.role === 'instructor');

    return (
        <div className="mb-24">
            {/* Section Title */}
            <SectionTitle
                subHeading='See our'
                heading='Top Instructors'
            ></SectionTitle>

            {/* Top 6 instructors here */}
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className=""
            >
                <div className="">
                    {
                        instructors.slice(0, 6).map(instructor => <SwiperSlide key={instructor._id}>
                            <img src={instructor.photo} className="object-cover w-full h-full cursor-pointer" alt="" />
                            <h2 className="text-center text-3xl font-semibold -mt-24 text-white">{instructor.name}</h2>
                        </SwiperSlide>)
                    }
                </div>

            </Swiper>
        </div>
    );
};

export default PopularInstrucSec;