import AnimeJS from "../AnimeJS/AnimeJS";
import PopularClassSec from "../PopularClassSec/PopularClassSec";
import PopularInstrucSec from "../PopularInstrucSec/PopularInstrucSec";
import Carousel from "./Carousel";


const Home = () => {
    return (
        <div>
            <Carousel></Carousel>

            <PopularClassSec></PopularClassSec>

            <PopularInstrucSec></PopularInstrucSec>

            {/* AnimeJS Section */}
            <AnimeJS></AnimeJS>
        </div>
    );
};

export default Home;