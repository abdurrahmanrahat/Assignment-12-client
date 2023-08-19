import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";
import { Autoplay, EffectFade, Navigation } from "swiper";
import SingleSwiper from "./SingleSwiper";

const SwiperBanner = () => {
  const sliderContent = [
    {
      id: 1,
      bg: "/slide4-min.jpg",
      title: "Welcome to \n Foreign Language School!",
    },
    {
      id: 2,
      bg: "/slide2-min.jpg",
      title: "The Best School of \n Foreign Language in World",
    },
    {
      id: 3,
      bg: "/slide1-min.jpg",
      title: "Welcome to \n Foreign Language School!",
    },
    {
      id: 4,
      bg: "/slide5-min.jpg",
      title: "The Best School of \n Foreign Language in World",
    },
  ];

  return (
    <div className="main-slider">
      <Swiper
        slidesPerView={1}
        loop
        navigation
        effect="fade"
        autoplay
        modules={[Navigation, EffectFade, Autoplay]}
      >
        {sliderContent.map((slider) => (
          <SwiperSlide key={slider.id}>
            <SingleSwiper slider={slider} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperBanner;
