import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

import sliderImg1 from '../../../assets/Slider-Image/slide1-min.jpg';
import sliderImg2 from '../../../assets/Slider-Image/slide2-min.jpg';
import sliderImg3 from '../../../assets/Slider-Image/slide3-min.jpg';
import sliderImg4 from '../../../assets/Slider-Image/slide4-min.jpg';
import sliderImg5 from '../../../assets/Slider-Image/slide5-min.jpg';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Carousel = () => {
    return (
        <AutoplaySlider
            play={false}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={6000}
        >
            <div data-src={sliderImg3} />
            <div data-src={sliderImg2} />
            <div data-src={sliderImg1} />
            <div data-src={sliderImg4} />
            <div data-src={sliderImg5} />
        </AutoplaySlider>
    );
};

export default Carousel;