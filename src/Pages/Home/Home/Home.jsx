import AnimeJS from "../AnimeJS/AnimeJS";
import PopularClassSec from "../PopularClassSec/PopularClassSec";
import PopularInstrucSec from "../PopularInstrucSec/PopularInstrucSec";
// import Carousel from "./Carousel";
import SwiperBanner from "./SwiperBanner";


const Home = () => {
    return (
        <div>
            {/* <Carousel></Carousel> */}

            <SwiperBanner></SwiperBanner>

            <PopularClassSec></PopularClassSec>

            <PopularInstrucSec></PopularInstrucSec>

            {/* AnimeJS Section */}
            <AnimeJS></AnimeJS>
        </div>
    );
};

export default Home;