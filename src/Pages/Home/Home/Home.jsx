import PopularClassSec from "../PopularClassSec/PopularClassSec";
import Carousel from "./Carousel";


const Home = () => {
    return (
        <div>
            <Carousel></Carousel>

            <PopularClassSec></PopularClassSec>
            <h2 className="">Home Page</h2>
        </div>
    );
};

export default Home;