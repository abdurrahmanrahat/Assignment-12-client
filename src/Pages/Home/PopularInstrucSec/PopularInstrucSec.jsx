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
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    const instructors = allUsers?.filter(u => u.role === 'instructor');

    return (
        <div className="mb-24">
            {/* Section Title */}
            <SectionTitle
                subHeading='See popular'
                heading='Instructors Section'
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
                            <img src={instructor.photo} style={{ width: '400px', height: '480px' }} alt="" />
                            <h2 className="text-center text-3xl font-semibold -mt-24 text-white">{instructor.name}</h2>
                        </SwiperSlide>)
                    }
                </div>

            </Swiper>
        </div>
    );
};

export default PopularInstrucSec;